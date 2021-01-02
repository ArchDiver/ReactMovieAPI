from flask import Flask
from sqlalchemy import SQLAlchemy
from config import Config

def create_app():
    app = Flask(__name__)

    app.config['SQL']
