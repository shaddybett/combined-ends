from flask import Flask
from Models import db,User
from flask_restful import Resource

app = Flask(__name__)
db.init_app(app)
class UserResource(Resource):
    def seed_data(self):
        new_user = User(username='Bett',email="B@gmail.com",password='west')

        db.session.add(new_user)
        db.session.commit()
user_resource = UserResource()
user_resource.seed_data()        





