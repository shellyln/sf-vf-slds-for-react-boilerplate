import React from 'react';
import { Link } from 'react-router-dom';

const Page1: React.FC = () => (
    <>
        <span style={{display: 'inline-block'}}></span>
        <h1>Page1</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page2">Page2</Link></li>
            </ul>
        </nav>
    </>
);
export default Page1;
