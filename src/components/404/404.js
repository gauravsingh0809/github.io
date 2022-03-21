import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const Error = () => {
    return (
        <div className='four_o_four'>
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>

            <i className="icon-home">
            </i>
            <a href='https://digital-sfr.firebaseapp.com/#/overview' className='button'>
                Go back to Overview
            </a>

        </div>
    )
}

export default Error;