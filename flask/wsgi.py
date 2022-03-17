"""Application entry point."""
from dash_on_flask import init_app

app = init_app()

if __name__ == "__main__":
    app.run()