import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { withRouter }  from 'react-router-dom';
import { 
    getUserProfile, 
    getUserStatusThunkCreator, 
    setUserStatusThunkCreator, 
    savePhotoThunkCreator 
} from './../../redux/profileReducer'
import { profileAPI } from './../../api/api'
import { Redirect } from 'react-router-dom'
import { withAuthRedirect } from './../../hoc/WithAuthRedirect'
import { compose } from 'redux';
class ProfileContainer extends React.Component {

    refreshProfile (){
        let match = this.props.match;
        let userId = match && match.params && match.params.userId ;
        
        if( !userId ) {
            
            userId = this.props.authorizedUserId;
            if( !userId ){
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId);
        this.props.getUserStatusThunkCreator(userId);
    }
   
    componentDidMount() {   
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.match.params.userId !== this.props.match.params.userId ){
            this.refreshProfile();
        }
    }

    render () { 

        return (
            <div>
                <Profile { ...this.props }  
                         profile={this.props.profile} 
                         status={this.props.statusText}
                         setUserStatusThunkCreator={this.props.setUserStatusThunkCreator}
                         isOwner={ !this.props.match.params.userId }
                         savePhoto={this.props.savePhotoThunkCreator}
                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    statusText: state.profilePage.statusText,
    authorizedUserId: state.auth.userId,
});



export default compose(
    connect( 
        mapStateToProps, 
        {
            getUserProfile, 
            setUserStatusThunkCreator, 
            getUserStatusThunkCreator,
            savePhotoThunkCreator
        } 
        ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect( ProfileContainer );

// //let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUserProfile} )(WithUrlDataContainerComponent) ;