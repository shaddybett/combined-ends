from flask import Flask
from flask_sqlalchemy import Api,Resource
from Models import db,User

app = Flask(__name__)
api = Api(app)

api.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///combined.db'
api.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
