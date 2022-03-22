# Getting Started with Create React App.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

To create build directory run

## `npm run build`

## For running the Flask app

Navigate to Flask directory

### `cd flask`

Upgrade pip (Optional)

### `python -m pip install - upgrade pip`

Install dependencies

### `pip install -r requirements.txt`

and run following command

### `python -m flask run`

Flask server will be running at localhost:5000/

# Deploying to IIS

## React App

Deploying react application is pretty straight forward. 

1. Run npm run build to create a production build

2. Create a new application pool. Application Pools> Add Application Pools

3. Set pool identity as custom account. Right click on Application Pools > Advanced settings > Identity > custom account

4. Add site > Give physical path for the react app build folder and Port

### Note: As the react application we are deploying uses react-router-dom, it needs url-rewrite module for IIS.

## Flask App

Before deploying the flask make sure the python version 3.9 and wfastcgi is installed globally on windows. Prefer separately installing python and wfastcgi over installing wfastcgi bundle from web platform installer as this will come with a prefixed python version of 3.4

1. Create application pool and give a separate pool identity.

2. Add site and give flask application root

3. Click on Handler mappings of this site. Click add module mapping
*  Set request path to *
*  Set module as FastCgiModule
*  Executable file  C:\Python39\Python.exe|C:\your\application\path\wfastcgi.py  - Give the path of these files in server
*  Click “Request Restrictions” adn make sure “Invoke handler only if request is mapped to:” checkbox is unchecked
*  Confirm the module mapping dialog by clicking yes.

4. Go to the root server settings and click on the FastCgi Settings. Double click to open environment variables collection editor.

5. Add python path variable with name: PYTHONPATH and value: C:\your\flask\app\folder\

6. Add WSGI_HANDLER with name: WGSI_HANDLER and value: app.app. Click OK to browse the site.

# Adding Application as directory

## For react

1. Install Application Request Routing

2. Enable proxy at the root level

3. Go to default site

4. Click on url_rewrite

5. Click on add rule. Give name 'ReactApp'

6. Specify pattern as sfrreport22(/)?(.*) Also select ignore case

7. Give the rewrite URL as http://localhost:port_of_react_app/{R:2}

8. Check Append query string, log rewritten url and stop processing of subsequent rules

## For Flask App

1. Follow the above mentioned steps from point 3

2. Specify pattern as sfrdashboard22(/)?(.*) and proxy as http://localhost:port_of_flask_app/{R:2}

* Now, you should be able to access them at cedar.gov.in/sfrreport22 and cedar.gov.in/sfrdashboard22