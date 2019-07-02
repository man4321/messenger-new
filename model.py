from google.appengine.ext import ndb
from google.appengine.api import users
import webapp2

class User(ndb.Model):
    firstname=ndb.StringProperty()
    lastname=ndb.StringProperty()
    username=ndb.StringProperty()
    password=ndb.StringProperty()
    email=ndb.StringProperty()

class Sender(ndb.Model):
    sender_key=ndb.KeyProperty(kind=User)
    reciver_key=ndb.KeyProperty(kind=User)
    content=ndb.TextProperty()
    send_time=ndb.DateTimeProperty(auto_now_add=True)
   
# class Reciver(ndb.Model):
#     reciver_key=ndb.KeyProperty(kind=User)
#     content=ndb.TextProperty()
#     reciver_time=ndb.DateTimeProperty(auto_now_add=True)

class Feeds(ndb.Model):
    user_key=ndb.KeyProperty(kind=User)
    post=ndb.TextProperty()
    post_time=ndb.DateTimeProperty(auto_now_add=True)
    


