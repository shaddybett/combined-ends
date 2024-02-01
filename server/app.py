from flask import Flask,request
from flask_restful import Api,Resource
from Models import db,User
from flask_migrate import Migrate
from flask_bcrypt import bcrypt
from flask_cors import CORS

app = Flask(__name__)
api = Api(app)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///combined.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)
migrate = Migrate(app,db)

def hash_password(password):
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password


class UserResource(Resource):
    def post(self):
        data = request.get_json()
        existing_User = User.query.filter_by(username = data['username']).first()
        if existing_User:
            if bcrypt.checkpw(data['password'].encode('utf-8'),existing_User.password):
                return {'message':'Succesfully logged in'},200
            else:
                return {'message': 'Invalid credentials'},401   
        else:
            new_user = User(username = data['username'], email=data['email'],password=hash_password(data['password']))
            db.session.add(new_user)
            db.session.commit()
            return {'message':'Registration successfull'},201            


api.add_resource(UserResource,'/user')
if __name__=='__main__':
    app.run(debug=True)