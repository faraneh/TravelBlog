import React from 'react';
import './navBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'

const navBar = (props) => {
    return ( 
        <React.Fragment>
            <div className={'bannerBody'}>
                <div className="nav">
                    <div className="logo"><FontAwesomeIcon icon={faMapMarker} /><p>My Next Trip !</p></div>
                    <div className="navLinks">
                        <div className="navLink Home"><p>Home</p></div>
                        <div className="navLink About Me"><p>About Me</p></div>
                        <div className="navLink Contact Me"><p>Contact Me</p></div>
                    </div>
                </div>
                <div className="mainBannerText">
                    <h1 className="mainBannerTextMain">SWITZERLAND</h1>
                    <h4 className="mainBannerTextDesc">EXPLORE EUROPE WITH ME</h4>
                    <button className="bannerButton" onClick={props.navBarButtonClicked}>READ MORE</button>
                </div>
            </div>
        </React.Fragment>
        
     );
}
 
export default navBar;