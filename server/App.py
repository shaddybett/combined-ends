from flask import Flask
from flask_sqlalchemy import Api,Resource

app = Flask(__name__)
api = Api(app)

