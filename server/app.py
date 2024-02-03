from flask import Flask
from models import db,User
from flask_restful import Api

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite://combined.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db.init_app(app)

@app.route('/')
def get(self):
    return('Welcome')