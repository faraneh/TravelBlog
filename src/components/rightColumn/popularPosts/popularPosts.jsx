import React from 'react';
import './popularPosts.css';
import SidePost from '../../utilities/sidePost/sidePost';

const popularPosts = (props) => {
    const posts = [...props.posts];
    return ( 
        <div className={'popularPosts'}>
            <h2 className={'popularHeader'}>POPULAR POSTS</h2>
            <ul className={'popularList'}>
            {posts.map((post, index) => post.popularity === 'popular' ? <li key={index}><SidePost content={post} key={index} /></li> : null )}
            </ul>
            
        </div>
     );
}
 
export default popularPosts;