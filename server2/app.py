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

@app.route('/members' methods = ['POST'])
def signup ():
    data = request
    email = data.get(Member.email)
    existingUser = Member.query.filter_by(email=email).first()
    if existingUser:
        return jsonify({'error':'email already exists'})
    else:
        newUser = 

  
    
    

if __name__=='__main__':
    app.run(debug=True)



