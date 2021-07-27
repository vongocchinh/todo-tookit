import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import './style.css';
import Routers from './../../Router/Router';
import { Link } from 'react-router-dom';
export default function App() {
    return (
        <>
            
            <Router>
                <div className="header">
                    <Link className="p" to="/">Home</Link>
                </div>
                <div className="con">
                    <Routers />
                </div>
            </Router>
        </>

    )
}
