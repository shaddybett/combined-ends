
from flask import Flask,request,jsonify
from flask_restful import Api
from models import Member,db
from flask_cors import CORS
from flask_migrate import Migrate


app = Flask(__name__)
api = Api(app)
CORS(app)
Migrate(app,db)

app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///member.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False
db.init_app(app)

@app.route('/signup',methods=['POST'])
def signup():
    data = request.get_json()
    email = data.get('email')
    existing_member = Member.query.filter_by(email=email).first()
    if existing_member:
        return jsonify({'error':'Email already exists'})
    else:
        new_member = Member(
            username = data.get('username'),
            email=email,
            password=data.get('password')
        )
        db.session.add(new_member)
        db.session.commit()
        return jsonify({'message':'Successfully signed in'}),200
@app.route('/login',methods=['GET'])
def login():
    data = request.get_json()
    email = data.get('username')
    existing = Member.query.filter_by(email=email).first()
    if existing:
        return jsonify ({'message':'Login successful'}),200
    else:
        return jsonify ({'error':'User does not exist'}),400    

if __name__=='__main__':
    app.run(debug=True)        



