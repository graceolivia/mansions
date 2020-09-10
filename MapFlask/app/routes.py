from app import app
from flask import render_template

@app.route('/')
@app.route('/index')
def index():
    return render_template('mainpage.html')

@app.route('/welcome')
def welcome():
    return render_template('welcome.html')
