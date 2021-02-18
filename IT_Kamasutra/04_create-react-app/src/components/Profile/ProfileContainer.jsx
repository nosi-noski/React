import React from 'react';
import Profile from './ProfileInfo/ProfileInfo'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { withRouter }  from 'react-router-dom';
import { setUserProfile } from './../../redux/profileReducer'
class ProfileContainer extends React.Component {
    componentDidMount(){
        debugger
        let userId = this.props.match && this.props.match.params && this.props.match.params.userId || 2;
        let users = "https://social-network.samuraijs.com/api/1.0/profile/" + userId;
        axios.get(users).then(response => {
            
            this.props.setUserProfile( response.data );
        });
    }
    render () { 
        debugger
        return (
            <div>
                <Profile { ...this.props }  profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile} )(WithUrlDataContainerComponent) ;