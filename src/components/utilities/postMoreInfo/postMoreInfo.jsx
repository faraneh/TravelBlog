import React from 'react';
import './postMoreInfo.css';

const postMoreInfo = (props) => {

    const posts = [...props.posts];
    const post = posts[parseInt(props.index)];
    const commentList = post.comments;
    const images = [...props.posts[props.index].imageList];

    return ( 
        <div className={"postMoreInfo"} style={{display : props.display}}>
            <div className="moreInfoButtons">
            <div className="goBackButton" onClick={() => props.goBack()}>BACK</div>
            <div className="moreInfoArrows">
                <div className={props.postDisplayed === 0 ? "goBackButtonDisactive" : "goBackButton"} onClick={() => props.moreInfoGoPrev(props.postDisplayed)}>PREVIOUS</div>
                <div className={props.postDisplayed === posts.length - 1 ? "goBackButtonDisactive" : "goBackButton"} onClick={() => props.moreInfoGoNext(props.postDisplayed)}>NEXT</div>
            </div>
            </div>
            <div className="moreInfoImage" style={{backgroundImage : post.image}} />
            <div className="moreInfoTitle">{post.title}</div>
            <div className="moreInfoText">{post.desc}</div>
            <h4 className="moreInfoCommentTitle" style={{textAlign: 'left', marginLeft: 10}}>Images I took there:</h4>
            <div className="imageGallery" onMouseDown={props.onMouseDown} onMouseUp={props.onMouseUp} onMouseMove={props.onMouseMove} ref={props.ref} >
                {images.map((el, index) => <div className="imageBoxImageGallery" style={{backgroundImage : 'url(' +el + ')'}} key={index} />)}
            </div>
            <div className="moreInfoComment">
                <div className="moreInfoCommentTitle"> Add Comment:</div>
                <div className="nameQ"><p className="yourName">Your Name:</p> <input className="nameInput" type="name" value={props.commentName} onChange={props.commentNameAdded} /></div>
                <textarea className="moreInfoCommentArea" id="comment" rows="5" cols="86" maxLength="250" value={props.commentValue} onChange={props.commentTextAdd} />
                <div className="goBackButton" onClick={props.commentConfirmed}>CONFIRM</div>
                <div className="commentsbox">
                    {commentList.map((el, index) => <p className="commentBox" key={index}>{el}</p>)}
                </div>
            </div>
        </div>
     );
}
 
export default postMoreInfo;