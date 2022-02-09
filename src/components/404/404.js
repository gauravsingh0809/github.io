import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

 const four_o_four = () => {
     return (
         <div className='four_o_four'>
        <h1>404</h1>
        <p>Oops! Something is wrong.</p>
        <Link className="button" to="/overview"><i className="icon-home"></i> Go back to Overview</Link>
        </div>
     )
 }

 export default four_o_four;