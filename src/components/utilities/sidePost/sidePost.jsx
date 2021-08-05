import React from 'react';
import './sidePost.css';

const sidePost = (props) => {
    const sideImage = props.content.image;
    const sideTitle = props.content.title;
    const sideDate = props.content.date;
    return ( 
        <div className="sidePost">
            <div className="sideImage" style={{backgroundImage: sideImage}} />
            <div className="sideTexts">
                <div className="sideHeader">{sideTitle}</div>
                <div className="sideDate" >{sideDate}</div>
            </div>
        </div>
     );
}
 
export default sidePost;