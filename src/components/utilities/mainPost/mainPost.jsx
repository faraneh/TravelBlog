import React from 'react';
import './mainPost.css';

const mainPost = (props) => {

    return ( 
        <div className={'mainPost'}>
            <div className="postImage" style={{backgroundImage: props.content.image}} />
            <h3>{props.content.title}</h3>
            <p>{props.content.desc}</p>
            <div className="whiteBottom">
                <button className={'readMoreButton'} style={{color: '#628A76'}} onClick={() => props.postClicked()}>READ MORE</button>
            </div>
        </div>
     );
}
 
export default mainPost;