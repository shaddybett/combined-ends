from flask import Flask
from flask_sqlalchemy import Api,Resource
from Models import db,User

app = Flask(__name__)
api = Api(app)

api.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///combined.db'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.init_app(app)

class User(Resource):
    def get(self):
        username = User.query.filter_by(id=id).first()
        if username:
            return username
        else:
            return ('User not found')


api.addResource(User,'/user')
