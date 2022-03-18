import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const Error = () => {
    return (
        <div className='four_o_four'>
            <h1>404</h1>
            <p>Oops! Something is wrong.</p>
            <Link className="button" to="/preface">
                <i className="icon-home">
                </i>
                Go back to Preface
            </Link>
        </div>
    )
}

export default Error;