from . import db

class Movie(db.Model):
    imdbID = db.Column(db.String(100), primary_key=True)
    title = db.Column(db.String(100))
    rating = db.Column(db.Integer)
    likes = db.Column(db.Integer)
    dislikes = db.Column(db.Integer)