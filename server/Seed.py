from flask import Flask
from Models import db,User
from flask_restful import Resource
# from App import App

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///combine.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

class UserResource(Resource):
    def seed_data(self):
            with app.app_context():
                new_user = User(username='Bett',email="B@gmail.com",password='west')

                db.session.add(new_user)
                db.session.commit()
user_resource = UserResource()
user_resource.seed_data()        





