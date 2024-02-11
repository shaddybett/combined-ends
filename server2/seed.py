from models import Member,db
from flask import Flask

app = Flask(__name__)

with app.app_context:
    class Member(db.Model):
        Member = {
            'username':'bett',
            'email':'bett@gmail.com',
            'password':'12345'
        }