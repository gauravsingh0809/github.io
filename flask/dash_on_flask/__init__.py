"""Initializing Flask app."""
from flask import Flask

def init_app():
    """Constructing core Flask application with embedded Dash app."""
    app = Flask(__name__, instance_relative_config=False)
    app.config.from_object('config.Config')

    with app.app_context():
        # Importing parts of our core Flask app
        from . import routes

        # Importing Dash application
        from .plotlydash.dashboard import init_dashboard
        app = init_dashboard(app)

        return app



# from flask import Flask

# def init_app():
#     server = Flask(__name__, instance_relative_config=False)
#     server.config.from_object('config.Config')

#     with server.app_context():
#         from . import routes

#         from .plotlydash.dashboard import init_dashboard
#         server = init_dashboard(server)

#         return server