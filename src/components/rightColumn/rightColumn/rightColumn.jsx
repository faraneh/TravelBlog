import React from 'react';
import './rightColumn.css';
import AboutMe from '../../rightColumn/aboutMe/aboutMe';
import Advertisement from '../advertisement/advertisement';
import PopularPosts from '../popularPosts/popularPosts';
import Subscribtion from '../subscribtion/subscribtion';

const rightColumn = (props) => {

    return ( 
        <div className={'RightColumn'}>
            <AboutMe />
            <PopularPosts posts={props.posts} />
            <Advertisement />
            <Subscribtion emailVerification={props.emailVerification} inputValue={props.inputValue} emailConfirmation={props.emailConfirmation} confirmationBtn={props.confirmationBtn} />
        </div>
     );
}
 
export default rightColumn;