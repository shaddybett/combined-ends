from flask import Flask,jsonify

app = Flask(__name__)

@app.route('/home')
def home():
    members = {'member1','member2','member3'}
    return jsonify ({members: list(members)})

if __name__=='__main__':
    app.run(debug=True)