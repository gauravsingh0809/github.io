from flask import Flask

# Flask app creation
app = Flask(__name__)

# Ugly and confusing tangent of in-line config stuff
class Config:
    app.config['TESTING'] = True
    app.config['DEBUG'] = True
    app.config['FLASK_ENV'] = 'production'
    app.config['SECRET_KEY'] = 'GDtfDCFYjD'
    app.config['DEBUG'] = False