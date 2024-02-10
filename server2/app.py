from flask import Flask

app = Flask(__name__)

@app.route('/home')
def home():
    return ({'members':{'member1','member2','members3'}})

if __name__=='__main__':
    app.run(debug=True)