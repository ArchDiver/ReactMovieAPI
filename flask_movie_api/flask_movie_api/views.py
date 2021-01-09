from flask import Blueprint, jsonify, request
from . import db
from .models import Movie

main = Blueprint('main', __name__)

@main.route('/add_movie', methods=['POST'])
def add_movie():
    movie_data = request.get_json()

    new_movie = Movie(imdbID=movie_data['imdbID'], title=movie_data['title'], rating=movie_data['rating'], likes=movie_data['likes'], dislikes=movie_data['dislikes'] )

    db.session.add(new_movie)
    db.session.commit()

    return 'Movie Added', 201

# @main.route('/movies')
# def movies():
#     movies_list = Movie.query.all()
#     movies = []

#     for movie in movies_list:
#         movies.append({'imdbID' : movie.imdbID, 'title' : movie.title, 'rating' : movie.rating, 'likes' : movie.likes, 'dislikes' : movie.dislikes})


#     return jsonify({'movies' : movies})
