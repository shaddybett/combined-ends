from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    __tablename__='users'
    id = db.Column(db.Integer,primary_key=True)
    username = db.Column(db.String(100),nullable=False)
    email = db.Column(db.String(100),nullable=False)
    password = db.Column(db.String,nullable=False)
    
    def __init__(self,username,email,password):
        self.username = username
        self.email = email
        self.password=password


#write a function that given an array A of N integers, returns the smallest positive integer(greater than 0)
# that does not occur in A
# for example given A = [1,3,6,4,1,2] the function should return 5
#Given A =[1,2,3]the function should return 4
#Given A =[-1,-3] the function should return 1
#write an efficient algorithm for the following assumptions:
#N is an integer within the range[1..100,000]
#each element of array A is an integer within the range [-1,000,000..1,000,000] 
          


        