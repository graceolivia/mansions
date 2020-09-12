from app import app
from flask import render_template

@app.route('/')
def index():
    return render_template('welcome.html')

@app.route('/map')
def welcome():
    return render_template('mainpage.html')
