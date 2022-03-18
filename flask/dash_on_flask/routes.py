"""Routes for parent Flask app."""
from flask import render_template, redirect
from flask import current_app as app
# from dash_on_flask.plotlydash.dashboard import init_dashboard



@app.route('/')
def home():
    """Landing page."""
    return render_template(
        'index.jinja2',
        title='eSamvid',
        description='Digital audit reporting initiative',
        template='home-template',
        body="This is the state finance report of karnataka, 2021-22"
    )

# @app.route('/')
# def dashboard():    
#     return redirect('/sfrdashboard')
