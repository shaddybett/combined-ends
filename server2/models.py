from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Member (db.Model):
    __tablename__='members'
    id = db.Column(db.Integer,primarykey = True)
    username = db.Column(db.String,nullable=False)
    email = db.Column(db.String,nullable=False)
    password = db.Column(db.String,nulable = False)
    