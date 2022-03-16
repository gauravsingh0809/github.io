// import { BrowserRouter as Router } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';
import { MyProvider } from './Context/MyProvider';
import './App.css';
import Routes from './Routes/Routes';
import { useEffect } from 'react';
import History from './Helper/History';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';


const App = () => {
  useEffect(() => {
    document.body.style.zoom = "90%";
  }, []);

  return (
    <Router history={History}>
      {/* <Scrollbars style={{background:"#fff"}}> */}
      <div className="App" id="outer-container">
        <MyProvider>
            <Routes />        { /* Check if div goes after My provider in case of layout problems */}
        </MyProvider>
      </div>
      {/* </Scrollbars> */}
    </Router>
  );
}

export default App;