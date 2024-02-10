from flask import Flask

app = Flask(__name__)

@app.route('/home')
def home():
    members  = ['member1','member2','member3','member4']
    return {'members':members}

if __name__=='__main__':
    app.run(debug=True)