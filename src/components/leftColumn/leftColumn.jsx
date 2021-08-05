import React from 'react';
import './leftColumn.css';
import MainPost from '../utilities/mainPost/mainPost';

const leftColumn = (props) => {

    const posts = [...props.posts];
    const currentPage = props.currentPage;

    return ( 
        <div className={'leftPart'} style={{display: props.leftColumnDisplay}} >
            <div className={'LeftColumn'} >
            {posts.map((post, index) => (Math.floor(index / 3) + 1) === currentPage ? <MainPost content={post} key={index} postClicked={() => props.postClicked(index)} /> : null)}
            </div>
            <div className="leftColumnPagination">
                <ul className={'paginationList'} >
                    <li className={'paginationItem'} onClick={() => props.onPrev()} style={{width: 100}}  key={'prevv'} >Previous</li>
                    {posts.map((el, index) => index % 3 === 0 ? <li className={(index/3 + 1) === currentPage ? 'paginationItem activePag' : 'paginationItem'} key={index} onClick={() => props.onClick(index / 3)} >{index/3 + 1}</li> : null )}
                    <li className={'paginationItem'} key={'nextt'} onClick={() => props.onNext()} style={{width: 100}} >Next</li>
                </ul>
            </div>
        </div>
     );
}
 
export default leftColumn;