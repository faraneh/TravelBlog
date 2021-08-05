import React from 'react';
import './subscribtion.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHiking } from '@fortawesome/free-solid-svg-icons'

const subscribtion = (props) => {

    return ( 
        <div className={'subscribtion'}>
            <FontAwesomeIcon icon={faHiking} className={'fa-5x '} style={{color: '#91AFA0', marginBottom: '10px'}} />
            <h4 className={'subTitle'} style={{display: props.confirmationBtn === "THANK YOU !" ? 'none' : 'flex'}}>JOIN ME ON MY NEXT TRIP</h4>
            <input className={props.confirmationBtn !== "THANK YOU !" ? 'emailInput' : 'emailInputCon'} onChange={props.emailVerification} disabled = {props.confirmationBtn === "THANK YOU !"? "disabled" : ""}/>
            <button className={props.confirmationBtn !== "THANK YOU !" ? "subConfirm" : "subConfirmed"} onClick={props.emailConfirmation} >{props.confirmationBtn}</button>
            <p style={{fontSize: '0.9rem', display: props.confirmationBtn !== "THANK YOU !" ? 'none' : 'block'}}>Hooray ! you are now a member ! <br />You can check your email for more information</p>
        </div>
     );
}
 
export default subscribtion;