import React from 'react';
import { Link } from 'react-router-dom';

const Page2: React.FC = () => (
    <>
        <span style={{display: 'inline-block'}}></span>
        <h1>Page2</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/page1">Page1</Link></li>
            </ul>
        </nav>
    </>
);
export default Page2;
