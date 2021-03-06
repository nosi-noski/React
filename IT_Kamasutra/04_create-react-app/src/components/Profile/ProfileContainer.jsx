import React from 'react';
import Profile from './ProfileInfo/ProfileInfo'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { withRouter }  from 'react-router-dom';
import { setUserProfile, getUserProfile } from './../../redux/profileReducer'
import { profileAPI } from './../../api/api'
import {Redirect} from 'react-router-dom'
class ProfileContainer extends React.Component {

    componentDidMount(){
        
        let match = this.props.match;
        let userId = match && match.params && ( match.params.userId ||  15264 );
        
        // --====== 1 Step =======
        // let users = "https://social-network.samuraijs.com/api/1.0/profile/" + userId;
        // axios.get(users).then(response => {
        //     this.props.setUserProfile( response.data );
        // });

        // --====== 2 Step =======
        // profileAPI.getProfile(userId)
        // .then( (response) => {
        //     this.props.setUserProfile( response.data );
        // })

        // --====== 3 Step =======
        this.props.getUserProfile(userId);
        
    }

    render () { 

        if ( this.props.isAuth === false ) {
            return <Redirect to={"/login"} />
        }

        return (
            <div>
                <Profile { ...this.props }  profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile} )(WithUrlDataContainerComponent) ;