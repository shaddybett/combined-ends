from flask import Flask
from Models import db,User
from flask_restful import Resource
# from App import App

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///combine.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

with app.app_context():
    user = {
        "username":"Bett",
        "email":"B@gmail.com",
        "password":"1234" 
    }




