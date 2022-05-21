import React, { Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import App from './App';

// Lazy load chunks
const Page1 = React.lazy(() => import('./Page1'));
const Page2 = React.lazy(() => import('./Page2'));

const RouterConfig: React.FC = () => {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route index element={<App />} />
                    <Route path="/page1" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Page1 />
                        </Suspense>
                    } />
                    <Route path="/page2" element={
                        <Suspense fallback={<div>Loading...</div>}>
                            <Page2 />
                        </Suspense>
                    } />
                    <Route path="*" element={<App />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default RouterConfig;
