from flask import Flask
from flask_sqlalchemy import Api,Resource
from Models import db

app = Flask(__name__)
api = Api(app)

