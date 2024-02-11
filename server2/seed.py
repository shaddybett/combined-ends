from app import app,db
from models import Member

with app.app_context():
    members = [
        Member(username='bett',email='bett@gmail.com',password='12345')
    ]
    db.session.add_all(members)
    db.session.commit()