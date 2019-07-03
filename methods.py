from model import*
import json
def post_info(current_user):
	data= User.query(User.email!=current_user.email()).fetch()
	d=[]
	for i in data:
		d.append({
			'email':d.email,
			'user_id':d.user_id
			})
	return json.dumps(d);

def put_data(user_email,user_id):
	user=User()
	user.email=user_email
	user.user_id=user_id
	user.put()

def put_current_user(user_email):
	user1_key=User.query(user.email==user_email).get(keys_only=True)
	if user1_key:
		print(user1_key.urlsafe())
		return user1_key.urlsafe()
