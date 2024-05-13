from flask import Flask, url_for, render_template,request
from werkzeug.utils import secure_filename
import sklearn
from flask_sqlalchemy import SQLAlchemy
import numpy
import sweetviz as sv
import ydata_profiling as ydp
import pandas as pd
import os
import pickle

model = pickle.load(open("RegModel.pkl", 'rb'))
app = Flask(__name__)

UPLOAD_FOLDER = 'C:\\Users\\shres\\Documents\\Flask-tutorial\\static'
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

ALLOWED_EXTENSIONS = set(['csv', 'xlsx', 'jpg', 'jpeg', 'gif'])

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1] in ALLOWED_EXTENSIONS


@app.route("/")
def Home():
    return render_template("index.html")

@app.route("/about")
def about_us():
    return render_template("about-us.html")

@app.route("/login")
def login():
    return render_template("login.html")

@app.route("/resources", methods = ['POST', 'GET'])
def resources():
    if request.method == "POST":
        file = request.files['input_file']
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
            file.save(file_path)
            report_html = None
            report_html = generate_eda_report(file_path)
            return render_template("resources.html", report_html=report_html)
        else:
            return "Invalid file format"
    return render_template("resources.html")

def generate_eda_report(file_path):
    dataframe = pd.read_csv(file_path)
    profile = ydp.ProfileReport(dataframe, title="Your RevDar Report")
    report_html = profile.to_html()
    return report_html

@app.route("/Products", methods = ['POST', 'GET'])
def Products():
    data= pd.read_csv("static/Walmart.csv")
    Stores = sorted(data['Store'].unique())
    CPI = 0
    week = 5
    month = [1 ,2,3,4,5,6,7,8,9,10,11,12]

    return render_template("Products.html", Stores=Stores, month=month, week=week, CPI=CPI)

@app.route("/predict", methods = ['POST','GET'])
def prediction():
    Store = request.form.get('st')
    CPI = request.form.get('CPI')
    week = request.form.get('week')
    month = request.form.get('mt')

    prediction = model.predict(pd.DataFrame([[Store,CPI,week,month]], columns=['Store', 'CPI', 'week', 'month']))

    return str(prediction[0])

if __name__ == '__main__':
    app.run(debug = True)