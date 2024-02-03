from flask import Flask, request, jsonify
from flask_migrate import Migrate
from flask_bcrypt import Bcrypt
from flask_cors import CORS
from dotenv import load_dotenv
from models import db, User  # Assuming 'Models' is a typo and should be 'models'
import os

load_dotenv()

app = Flask(__name__)
app.secret_key = os.environ.get('SECRET_KEY')
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})

app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL') or 'sqlite:///combined.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
migrate = Migrate(app, db)
bcrypt = Bcrypt(app)


def hash_password(password):
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    return hashed_password


@app.route('/register', methods=['POST'])
def register():
    try:
        data = request.get_json()
        existing_user = User.query.filter_by(username=data['username']).first()
        if existing_user:
            return {'message': 'Username already exists'}, 409
        else:
            new_user = User(username=data['username'], email=data['email'], password=hash_password(data['password']))
            db.session.add(new_user)
            db.session.commit()
            return {'message': 'Registration successful'}, 201
    except Exception as e:
        app.logger.error(f"Error during registration: {str(e)}")
        return {'message': 'Internal Server Error'}, 500


@app.route('/login', methods=['POST'])
def login():
    try:
        data = request.get_json()
        existing_user = User.query.filter_by(username=data['username']).first()
        if existing_user and bcrypt.check_password_hash(existing_user.password, data['password']):
            return {'message': 'Successfully logged in'}, 200
        else:
            return {'message': 'Invalid credentials'}, 401
    except Exception as e:
        app.logger.error(f"Error during login: {str(e)}")
        return {'message': 'Internal Server Error'}, 500


@app.route('/users', methods=['GET'])
def get_users():
    try:
        print("Fetching users...")
        users = User.query.all()
        print("Users:", users)
        if users:
            return {'users': [{'username': user.username, 'email': user.email} for user in users]}
        else:
            return {'message': 'Users not found'}, 404
    except Exception as e:
        app.logger.error(f"Error fetching users: {str(e)}")
        return {'message': 'Internal Server Error'}, 500


if __name__ == '__main__':
    app.run(debug=True)
