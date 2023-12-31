import dash_core_components as dcc
import dash_html_components as html
import dash_bootstrap_components as dbc


def titlebar(app):
    return html.Div(
        [
            get_header_dashboard(app)
        ],
        className="titleheader"
    )



def Header(app):
    return html.Div(
        [
            get_header(app)
        ],
        className="titleheader",
        style={"border-radius": "0px",
               "box-shadow": "1px" "1px" "3px" "rgba(0, 0, 0, 0.1)",
               "margin-right": "15px"
               }
    )
def get_header_dashboard(app):
    header = html.Div(
        [
            html.Div(
                [
                    html.Div(
                        html.A(
                            html.Img(
                                src=app.get_asset_url("IAADLogo.jpg"),
                                style={
                                    'height': '46%',
                                    'width': '46%',
                                    # "margin-left": "160px"
                                    'textAlign':'center'
                                }
                            ),
                            className="two columns",
                            href="https://cag.gov.in",
                            target="_blank"),
                    ),
                    html.Div(
                        [
                            html.H5("STATE FINANCE AUDIT REPORT FOR THE YEAR ENDED MARCH 2022, KARNATAKA",
                                    style={"fontWeight": "bold"}
                                    )
                        ],
                        className="nine columns main-title",
                        style={
                            "margin-left": "30px",
                            "margin-top": "30px"
                        }
                    ),
                    html.Div(
                        html.A(
                            html.Img(
                                src=app.get_asset_url("emblem.png"),
                                style={
                                    'height': '76%',
                                    'width': '76%',
                                    'justifyItems':"right"
                                }
                            ),
                            className="one columns",
                            href="https://cag.gov.in",
                            target="_blank")
                    )
                ],
                className="twelve columns",
                style={"padding-left": "0px"
                       },
            ),
        ],
        className="row",
    )
    return header



def get_header(app):
    header = html.Div(
        [
            html.Div(
                [
                    html.Div(
                        html.A(
                            html.Img(
                                src=app.get_asset_url("IAAD Logo.jpg"),
                                style={
                                    'height': '23%',
                                    'width': '23%',
                                    "margin-left": "160px"
                                }
                            ),
                            className="four columns",
                            href="https://cag.gov.in",
                            target="_blank"),
                    ),
                    html.Div(
                        [
                            html.H4("State Financial Report, Karnataka 2022",
                                    style={"fontWeight": "bold"}
                                    ),
                            get_menu()
                        ],
                        className="six columns main-title",
                        style={
                            "margin-left": "50px"
                        }
                    ),
                    html.Div(
                        html.A(
                            html.Img(
                                src=app.get_asset_url("emblem.png"),
                                style={
                                    'height': '95px',
                                    'width': '45%',
                                    'textAlign': 'center'
                                }
                            ),
                            className="two columns",
                            href="https://cag.gov.in",
                            target="_blank")
                    )
                ],
                className="twelve columns",
                style={"padding-left": "0px"
                       },
            ),
        ],
        className="row",
    )
    return header


def get_menu():
    menu = html.Div(
        [
            dcc.Link(
                "State profile",
                href="/stateprofile",
                className="tab first",
            ),
            dcc.Link(
                "Preface",
                href="/preface",
                className="tab",
            ),
            dcc.Link(
                "Executive summary",
                href="/executivesummary",
                className="tab",
            ),
            dcc.Link(
                "Recommendations",
                href="/recommendations",
                className="tab"
            )
        ],
        className="row all-tabs",
        style={
            "textAlign": "center",
            "margin-left": "0px",
            "padding-bottom": "0px",
        }
    )
    return menu
