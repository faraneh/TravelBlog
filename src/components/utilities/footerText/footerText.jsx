import React from 'react';
import './footerText.css';

const footerText = (props) => {

    const post = props.contentTxt;

    return ( 
        <div className="footerText">
            <div className="footerTxtTitle">{post.title} </div>
            <div className="footerTxtdate">{post.date}</div>
        </div>
     );
}
 
export default footerText;