from flask import Flask, url_for, render_template
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/about")
def about_us():
    return render_template("about-us.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/Products")
def Products():
    return render_template("Products.html")

if __name__ == '__main__':
    app.run(debug = True)