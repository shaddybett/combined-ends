from flask import Flask,request
from flask_cors import CORS
from models import Member,db
from flask_restful import Api

app = Flask(__name__)
api = Api(app)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI'] ='sqlite:///member.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)


@app.route('/signup',method='POST')
def signup():
    data = request
    

if __name__=='__main__':
    app.run(debug=True)



