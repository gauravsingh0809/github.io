import dash
import dash_core_components as dcc
import dash_html_components as html
from dash_on_flask.plotlydash import (utils)

import pandas as pd
import numpy as np
import pathlib
import plotly.express as px
import plotly.graph_objects as go
# import time
import os


assets_path = os.getcwd() + '/dash_on_flask/static/dist/img'
# assets_css = os.getcwd() +'/dash_on_flask/static/dist/css'


def init_dashboard(server):
    """Create a Plotly Dash dashboard."""
    dash_app = dash.Dash(
        server=server,
        routes_pathname_prefix='/sfrdashboard/',
        external_stylesheets=[
            # '/static/dist/css/style3.css',
            '/static/dist/css/base_dashboard.css',
            # '/static/dist/css/styles.css',
            'https://fonts.googleapis.com/css?family=Lato'
        ],
        assets_folder=assets_path,
        title='SFR Dashboard'
    )

    # Load DataFrame
    #df = create_dataframe()

    BASE_PATH = pathlib.Path(__file__).parent.resolve()
    DATA_PATH = BASE_PATH.joinpath("data").resolve()

    bar_colors = ['#F5CDA7', '#FAA381', '#C9DBBA', '#99C5B5', '#899E8B', '#60935D',
                  '#706C61', '#DCDBA8', '#13262F', '#E9E6FF', '#91818A', '#0EB1D2']
    colors = {
        'background': '#eef0a1',
        'text': '#092859'
    }

    tab_e = pd.read_csv(DATA_PATH.joinpath("data.csv"), engine="python")
    summary = pd.read_csv(DATA_PATH.joinpath("summary.csv"), engine="python")
    summary2 = pd.read_csv(DATA_PATH.joinpath("summary2.csv"), engine="python")
    treemapf = pd.read_csv(DATA_PATH.joinpath(
        "treemap_fin.csv"), engine="python")
    ntrpie = pd.read_csv(DATA_PATH.joinpath(
        "nontaxrevpie.csv"), engine="python")

    # Custom HTML layout
    #dash_app.index_string = html_layout

    # Create Layout
    dash_app.layout = html.Div(
        [
            html.Div(
                utils.titlebar(dash_app),
            ),
            html.Button(
                html.A("SFAR",
                       href='https://cedar.gov.in/sfrreport/',
                       target='_blank'
                       ),
                className="sidebarbtn"
            ),
            # Treemap
            html.Div(
                className="twelve columns card",
                children=[
                    html.Div(
                        children=[
                            dcc.Graph(
                                config={
                                    'displaylogo': False,
                                    'responsive': True
                                },
                                figure=px.treemap(
                                    treemapf,
                                    path=['Root', "Type", "Year",
                                          "Sub Type", "Minor Head"],
                                    values="Values",
                                    title="Snapshot of Karnataka finances between 2015-16 and 2019-20",
                                    height=800,

                                    # template="seaborn",
                                    color="Year",
                                    color_discrete_sequence=px.colors.diverging.Tropic[1:3] + [
                                    '#229e8a']
                                ).update_traces(
                                    go.Treemap(
                                        hovertemplate='Rupees in crores: %{value:,.0f}')
                                ).update_layout(
                                    font_family="Roboto",
                                    showlegend=False,
                                    font_size=15,
                                    uniformtext_minsize=15
                                )
                            )
                        ]
                    ),
                    html.Div(
                        children=[

                        ], style={
                            "margin-left": "100px",
                            "margin-right": "100px"
                        }
                    ),
                ]
            ),
            # First Sunburst Graphs
            html.Div([
                html.Div(
                    children=[
                        dcc.Graph(
                            config={
                                'displaylogo': False,
                                'responsive': True},
                            figure=px.sunburst(
                                summary,
                                path=['Type', 'Section', 'Name'],
                                values='Values',
                                title="Summary of Fiscal Transactions 2018-19",
                                height=600,
                                width=600,

                                color="Section",
                                color_discrete_sequence=px.colors.diverging.Tropic[1:3] + [
                                    '#229e8a']
                            ).update_traces(
                                go.Sunburst(
                                    hovertemplate='<b>%{label} </b> ₹ in crores: %{value:,.0f}'),
                            ),
                        ),
                    ],
                    className="six columns card"
                ),
                html.Div(
                    [
                        dcc.Graph(
                            config={
                                'displaylogo': False,
                                'responsive': True
                            },
                            figure=px.sunburst(
                                summary2,
                                path=['Type', 'Section', 'Name'],
                                values='Values',
                                title="Summary of Fiscal Transactions 2019-20",
                                height=600,
                                width=600,
                                color="Section",
                                color_discrete_sequence=px.colors.sequential.Redor[2:],
                                # branchvalues="remainder"
                            ).update_traces(
                                go.Sunburst(
                                    hovertemplate='<b>%{label}</b> ₹ in crores: %{value:,.0f}'),
                            ),
                        ),
                    ],
                    className="six columns card"
                )
            ], className="row",
            ),
            html.Div(
                [
                    html.P(
                        "Total Reciepts for the year 2018-19 is exclusive of Capital Receipts i.e, Rs. -6 Crores")
                ], style={
                    "margin-left": "100px",
                    "margin-right": "100px"
                }
            ),

            # receipts graphs
            # Deleted receipt graphs from here.
            # Non tax revenue pie
            html.Div(
                className="row card",
                children=[
                    html.Div(
                        className="four columns card",
                        children=[
                            dcc.Dropdown(id="types",
                                         options=[
                                             {'label': " " + i, 'value': i} for i in
                                             ntrpie.iloc[0:, 0]
                                         ],
                                         value=ntrpie.iloc[:, 0],
                                         multi=True
                                         ),
                        ],
                        style={
                            "padding": "20px"
                        }
                    ),
                    html.Div(
                        className="seven columns card",
                        children=html.Div(
                            dcc.Graph(id="pie",
                                      config={
                                          'modeBarButtonsToRemove': ['lasso2d'],
                                          'displaylogo': False,
                                          # 'responsive': True
                                      },
                                      )
                        )
                    )
                ]
            ),




            # financial assistance to local bodies

            html.Div(
                className="row",
                children=[
                    html.Div(
                        className="ten columns card",
                        children=[
                            dcc.Dropdown(id="outlay",
                                         options=[{'label': i, 'value': i}
                                                  for i in tab_e.columns[1:]],
                                         value=[
                                             tab_e.columns[1], tab_e.columns[2], tab_e.columns[3]],
                                         multi=True),
                            dcc.Checklist(id="year_list",
                                          options=[
                                            #   {'label': " " + i, 'value': i} for i in
                                            # Deleting 'i' becasue of data type issue. 

                                              {'label': " ", 'value': i} for i in
                                              tab_e.iloc[0:, 0].unique()
                                          ],
                                          value=[
                                              tab_e.iloc[4, 0], tab_e.iloc[3, 0], tab_e.iloc[2, 0]],
                                          labelStyle={
                                              "display": "inline-block",
                                              "margin-right": "20px",
                                              "cursor": "pointer"}
                                          ),
                            dcc.Graph(id="year_vs_everything",
                                      config={
                                          'modeBarButtonsToRemove': ['lasso2d'],
                                          'displaylogo': False,
                                          # 'responsive': True
                                      },
                                      )
                        ],
                        style={"padding": 30}
                    ),
                ]
            ),

        ], className="subpage1",
        id="dash-container"
    )

    init_callbacks(dash_app)
    return dash_app.server


def init_callbacks(dash_app):

    BASE_PATH = pathlib.Path(__file__).parent.resolve()
    DATA_PATH = BASE_PATH.joinpath("data").resolve()

    bar_colors = ['#F5CDA7', '#FAA381', '#C9DBBA', '#99C5B5', '#899E8B', '#60935D',
                  '#706C61', '#DCDBA8', '#13262F', '#E9E6FF', '#91818A', '#0EB1D2']
    colors = {
        'background': '#eef0a1',
        'text': '#092859'
    }

    tab_e = pd.read_csv(DATA_PATH.joinpath("data.csv"), engine="python")

    ntrpie = pd.read_csv(DATA_PATH.joinpath(
        "nontaxrevpie.csv"), engine="python")

    @dash_app.callback(dash.dependencies.Output("year_vs_everything", "figure"),
                       [dash.dependencies.Input("outlay", "value"),
                        dash.dependencies.Input("year_list", "value")])
    def update_graph(olay, lst):
        # time.sleep(2)
        if len(olay) <= 1:
            dat1 = [dict(x=lst,
                         y=tab_e.loc[lst, :].iloc[:][olay[0]],
                         type="bar",
                         name=olay[0])]
            dat2 = []
        else:
            dat1 = [dict(x=lst,
                         y=tab_e.loc[lst, :].iloc[:][olay[0]],
                         type="bar",
                         name=olay[0])]
            dat2 = [dict(x=lst,
                         y=tab_e.loc[lst, :].iloc[:][item],
                         type="bar",
                         marker=go.bar.Marker(
                             color=bar_colors[olay.index(item) - 1]
                         ),
                         name=item)
                    for item in olay[1:]]
        return (
            {"data": dat1 + dat2,
             "layout": go.Layout(
                 title="Financial assistance to local bodies and other institutions",
                 xaxis={
                     'title': 'Years (Expenditure in crs.)',
                     "showgrid": True,
                     "showticklabels": True
                 },
                 yaxis={
                     'title': 'Type of Institution',
                     "showgrid": True,
                     "showticklabels": True,
                     "tickformat": ",g"
                 },
                 legend=dict(
                     y=-0.2,
                     x=0.1,
                     orientation='h'
                 )
             )
             }
        )

    @dash_app.callback(dash.dependencies.Output("pie", "figure"),
                       [dash.dependencies.Input("types", "value")])
    def update_graph(typs):
        data = [
            {
                'labels': typs,
                'values': ntrpie.set_index('column1').loc[typs].iloc[:, 0],
                'type': 'pie',
                # 'hole': 0.4,
                'marker': {
                    'colors': ['#577590', '43aa8b', '90be6d', 'f9c74f', 'f8961e', 'f3722c', 'e07a5f',
                               "#4C3B4D", "#E94F37", "#320A28"]
                },
            }
        ]

        return ({
            "data": data,
            "layout":
                go.Layout(
                    width=800,
                    title="Components of Non tax revenue",
                    margin={
                        "r": 100,
                        "t": 50,
                        "b": 50,
                        "l": 100,
                        "pad": 2,
                    },
                )
        })
