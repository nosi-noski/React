import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux';
import { withRouter }  from 'react-router-dom';
import { getUserProfile, getUserStatusThunkCreator, setUserStatusThunkCreator } from './../../redux/profileReducer'
import { profileAPI } from './../../api/api'
import { Redirect } from 'react-router-dom'
import { withAuthRedirect } from './../../hoc/WithAuthRedirect'
import { compose } from 'redux';
class ProfileContainer extends React.Component {

   
    componentDidMount(){
        debugger
        let match = this.props.match;
        let userId = match && match.params && match.params.userId ;
        
        if( !userId ) {
            
            userId = this.props.authorizedUserId;
            if( !userId ){
                this.props.history.push('/login')
            }
        }
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
        this.props.getUserStatusThunkCreator(userId);
        
    }

    render () { 



        return (
            <div>
                <Profile { ...this.props }  
                         profile={this.props.profile} 
                         status={this.props.statusText}
                         setUserStatusThunkCreator={this.props.setUserStatusThunkCreator}

                />
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    statusText: state.profilePage.statusText,
    authorizedUserId: state.auth.userId
});



export default compose(
    connect( mapStateToProps, {getUserProfile, setUserStatusThunkCreator, getUserStatusThunkCreator} ),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect( ProfileContainer );

// //let WithUrlDataContainerComponent = withRouter(ProfileContainer)
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUserProfile} )(WithUrlDataContainerComponent) ;