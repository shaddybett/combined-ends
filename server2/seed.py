# from app import app,db
# from models import Member

# with app.app_context():
#     members = [
#         Member(username='bett',email='bett@gmail.com',password='12345')
#     ]
#     db.session.add_all(members)
#     db.session.commit()




from app import app,db
from models import Member
with app.app_context():
    try:
        members = Member(
            username = 'west',
            email = 'west@gmail.com',
            password = '123456'
        )
        db.session.add(members)
        db.session.commit()
        print('seeding successful'),200
        
    except Exception as e:
        db.session.rollback()
        print(f"Error seeding data:{str(e)}")




from app import app,db
from models import Member

with app.app_context():
    