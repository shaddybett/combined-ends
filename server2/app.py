# from flask import Flask
# from  flask_cors import CORS

# app = Flask(__name__)
# CORS(app)
# @app.route('/home')
# def home():
#     members  = ['member1','member2','member3','member4']
#     return {'members':members}

# if __name__=='__main__':
#     app.run(debug=True)



from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/home')
def members():
    members=['alex','bett','norm']
    return {'members': members}


if __name__=='__main__':
    app.run(debug=True)



