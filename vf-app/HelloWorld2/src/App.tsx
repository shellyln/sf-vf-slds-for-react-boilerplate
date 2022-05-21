import React, { Suspense, useState } from 'react';
import { Link } from 'react-router-dom';

// Lightning Design System for React components
import BrandBand from '@salesforce/design-system-react/components/brand-band'; 
import Alert from '@salesforce/design-system-react/components/alert'; 
import AlertContainer from '@salesforce/design-system-react/components/alert/container'; 
import Icon from '@salesforce/design-system-react/components/icon'; 
import IconSettings from '@salesforce/design-system-react/components/icon-settings';
import Avatar from '@salesforce/design-system-react/components/avatar';

// App components and styles
import logo from './logo.svg';
import './App.css';

// Resource paths
declare const _SLDS_REACT_ICON_PATH: string, _SLDS_REACT_IMAGE_PATH: string;

// Type alias
type DispatchSetStateAction<T> = React.Dispatch<React.SetStateAction<T>>;

// Lazy load chunk
const Comp = React.lazy(() => import('./Comp'));

const MyAlert: React.FC<{showAlert: boolean, setShowAlert: DispatchSetStateAction<boolean>}> = ({showAlert, setShowAlert}) => {
    return (
        <>
            {showAlert ?
                <AlertContainer>
                    <Alert
                        variant="info"
                        icon={<Icon category="utility" name="user" />}
                        labels={{
                            heading: 'Logged in as John Smith (johnsmith@acme.com).',
                            headingLink: 'Log out',
                        }}
                        onClickHeadingLink={() => {
                            console.log('onClickHeadingLink');
                            setShowAlert(false);
                        }}
                    />
                </AlertContainer> : <></>
            }
        </>
    );
}

const App: React.FC = () => {
    const [showAlert, setShowAlert] = useState(true);

    // Patch the lightning-blue theme style
    const css = `
    .App .slds-brand-band.dsr-brand-band_lightning-blue:before {
        background-image:
            url(/_slds/images/themes/lightning_blue/lightning_blue_background.png),
            linear-gradient(to top, rgba(175, 197, 222, 0) 0, #1B5F9E);
    }`;

    return (
        <>
            <div className="slds-scope App">
                <IconSettings iconPath={_SLDS_REACT_ICON_PATH}>
                    <>
                        <MyAlert showAlert={showAlert} setShowAlert={setShowAlert}/>

                        {/* Patch the lightning-blue theme style */}
                        <div style={{background: 'rgb(176, 196, 223)', height: '100%', position: 'relative', width: '100%', zIndex: 1}}>
                            <style>{css}</style>
                            <BrandBand size="medium" className="dsr-brand-band_lightning-blue slds-p-around_small">
                                {showAlert ? <div style={{ height: '39px' }}></div> : <></>}
                                <div className="slds-box slds-theme_default">
                                    <h3 className="slds-text-heading_label slds-truncate">My App</h3>
                                    <Avatar
                                        assistiveText={{ icon: 'Avatar image' }}
                                        imgSrc={_SLDS_REACT_IMAGE_PATH + '/profile_avatar_96.png'}
                                        imgAlt="Person Name"
                                        variant="user"
                                        size="medium"
                                    />
                                    <nav>
                                        <ul>
                                            <li><Link to="/page1">Page1</Link></li>
                                            <li><Link to="/page2">Page2</Link></li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="App-inner">
                                    <header className="App-header">
                                        <img src={logo} className="App-logo" alt="logo" style={{height: 100}} />
                                        <p>
                                            Edit <code>src/App.tsx</code> and save to reload.
                                        </p>
                                        <a
                                            className="App-link"
                                            href="https://reactjs.org"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <Suspense fallback={<div>Loading...</div>}>
                                                <Comp />
                                            </Suspense>! Learn React
                                        </a>
                                    </header>
                                </div>
                            </BrandBand>
                        </div>
                    </>
                </IconSettings>
            </div>
        </>
    );
}

export default App;
