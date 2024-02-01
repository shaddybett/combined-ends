from flask import Flask,request
from flask_restful import Api,Resource
from Models import db,User
from flask_migrate import Migrate
from flask_bcrypt import bcrypt
from flask_cors import CORS
import os

app = Flask(__name__)
api = Api(app)
CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
abs_path = os.environ.get('database')
print(f"Database URI: {abs_path}")

app.config['SQLALCHEMY_DATABASE_URI'] = abs_path
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
migrate = Migrate(app,db)

def hash_password(password):
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password


class RegisterResource(Resource):
    def post(self):
        data = request.get_json()
        existing_user = User.query.filter_by(username=data['username']).first() 
        if existing_user:
            return {'message': 'Username already exists'}, 409
                  


api.add_resource(UserResource,'/user')
if __name__=='__main__':
    app.run(debug=True)