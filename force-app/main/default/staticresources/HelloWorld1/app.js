/* eslint-disable react/prop-types */
/* global _SLDS_REACT_ICON_PATH, _SLDS_REACT_IMAGE_PATH */

import React, { Fragment, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrandBand } from '@salesforce/design-system-react/components';
import { Alert } from '@salesforce/design-system-react/components';
import { Icon } from '@salesforce/design-system-react/components';
import { IconSettings } from '@salesforce/design-system-react/components';
import { Avatar } from '@salesforce/design-system-react/components';
import MyComp from 'comp';


// https://react.lightningdesignsystem.com/components/alerts/
const MyAlert = ({ showAlert, setShowAlert }) => {
    return (
        <Fragment>{showAlert ?
            <div className="slds-notify-container" style={{position: 'fixed'}}>
                <Alert
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
            </div>: <Fragment></Fragment>
        }</Fragment>
    );
}


// https://react.lightningdesignsystem.com/components/brand-band/
const App = () => {
    const [showAlert, setShowAlert] = useState(true);

    // Fix theme image path
    const css = `
    .slds-brand-band.dsr-brand-band_lightning-blue.MyApp:before {
        background-image:
            url(/_slds/images/themes/lightning_blue/lightning_blue_background.png),
            linear-gradient(to top, rgba(175, 197, 222, 0) 0, #1B5F9E);
    }`;

    return (
        <div className="slds-scope">
            <IconSettings iconPath={_SLDS_REACT_ICON_PATH}>
                <MyAlert showAlert={showAlert} setShowAlert={setShowAlert} />
                <style>{css}</style>
                <BrandBand
                        id="brand-band-lightning-blue"
                        className="slds-p-around_small MyApp"
                        theme="lightning-blue"
                    >
                    {showAlert ? <div style={{ height: '39px' }}></div> : <Fragment></Fragment>}
                    <div className="slds-box slds-theme_default">
                        <h3 className="slds-text-heading_label slds-truncate">My App</h3>
                        <Avatar
                            assistiveText={{ icon: 'Avatar image' }}
                            imgSrc={_SLDS_REACT_IMAGE_PATH + '/profile_avatar_96.png'}
                            imgAlt="Person Name"
                        />
                        <MyComp />
                    </div>
                </BrandBand>
            </IconSettings>
        </div>
    );
}


ReactDOM.render(<App />, document.querySelector('#app-root'));
