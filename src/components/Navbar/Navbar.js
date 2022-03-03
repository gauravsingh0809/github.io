import React, { useEffect, useContext } from 'react';
import './Navbar.css';
import {
  Link
} from "react-router-dom";
import { MyContext } from '../../Context/MyProvider';
import { IoColorFillOutline, IoColorFill } from "react-icons/io5";


const Navbar = () => {
  const ctx = useContext(MyContext)

  useEffect(() => {
    let header = document.querySelector("h2");
    let text = header.textContent.toLowerCase();
    let color;
    switch (text) {
      case 'about':
        color = "#16A085";
        break;
      case 'home':
        color = "#E74C3C";
        break;
      case 'dashboard':
        color = "#2980B9";
        break;
      default:
        color = "#F1C40F";
        break;
    }
    // update the custom property for the root element and have it cascade on the header as well
    let root = document.querySelector(":root");
    root.style.setProperty("--color-home", color);
  }, []);


  /* render 
  - a nav with a header and three anchor links elements
    in the nav, include Links from the routing library, directing toward differents paths
  - a header displaying the path of the application
    through a switch
  */

  return (
    <div className="App">
      <nav className="Navbar">
        <h2>eSFAR</h2>
        <ul>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <a href='https://cedar.gov.in/sfrdashboard/' target="_blank" rel="noreferrer">
              {/* Dashboard */}
            </a>
          </li>
          <div className="dropdown">
            {ctx.langPref
              ? <p onClick={ctx.langChange} title="Switch Language" style={{ fontSize: "20px", fontWeight: "450", margin: "0px 10px 0 -30px", borderStyle: "solid" }}>ಕಖ</p>
              : <p onClick={ctx.langChange} title="Switch Language" style={{ fontSize: "20px", margin: "0px 10px 0 -30px", borderStyle: "solid" }}>ABC</p>
            }
            <div className="dropdown-content">
              <li>
                {ctx.langPref
                  ? <span onClick={ctx.langChange} title="Switch to English" style={{ fontSize: "12px", fontWeight: "bold" }}>ಕನ್ನಡ</span>
                  : <span onClick={ctx.langChange} title="Switch to Kannada" style={{ fontSize: "12px", fontWeight: "bold" }}>English</span>
                }
              </li>
            </div>
          </div>
          <div className="dropdown">
            {ctx.themeChanger
              ? <IoColorFillOutline onClick={ctx.changeTheme} title="Switch Color Theme" size="30px" />
              : <IoColorFill onClick={ctx.changeTheme} title="Switch Color Theme" size="30px" />
            }
            <div className="dropdown-content">
              <li>
                {ctx.themeChanger
                  ? <span onClick={ctx.changeTheme} title="Switch to Plain Theme" style={{ fontSize: "12px", fontWeight: "bold" }}>Theme-White</span>
                  : <span onClick={ctx.changeTheme} title="Switch to Colored Theme" style={{ fontSize: "12px", fontWeight: "bold" }}>Theme-Green</span>
                }
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  )
};


// render the single component responsible for the navigation bar, wrapped in the router element
export default Navbar;
