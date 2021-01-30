const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

const initialState = {
    users: [
        // { 
        //     userid: 1,
        //     photourl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-64.png',
        //     name: 'Ivanov Ivan Ivanovich', 
        //     isfollow: true, 
        //     status: 'Hello everyone!',
        //     location: { 
        //         country: 'RU',
        //         city: {
        //             cityid: 100000,
        //             name:'MSK'  
        //         }
        //     } 
        // },
        // { 
        //     userid: 2,
        //     photourl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678128-social-facebook-64.png',
        //     name: 'Sergey', 
        //     isfollow: false, 
        //     status: 'Hi, i am Sergey!',
        //     location: { 
        //         country: 'UA', 
        //         city: {
        //             cityid: 100101,
        //             name:'Kiev'  
        //         } 
        //     } 
        // },
        // { 
        //     userid: 3,
        //     photourl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
        //     name: 'Stas', 
        //     isfollow: true,
        //     status: 'Maybe later.',
        //     location: { 
        //         country: 'US',
        //         city: {
        //             cityid: 100100,
        //             name: 'Washington'   
        //         }
        //     } 
        // },
        // { 
        //     userid: 4, 
        //     photourl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678078-light-bulb-512.png',
        //     name: 'Nataliya', 
        //     isfollow: false,
        //     status: 'Natalia ready to kill))',
        //     location: { 
        //         country: 'UK',
        //         city: {
        //             cityid: 100102,
        //             name: 'London'   
        //         } 
                
        //     } 
        // }
    ]
};

const usersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case FOLLOW:
            
            return {
                ...state,
                users: state.users.map( elem => {
                    
                    if ( elem.id === action.id ){
                        
                        return {...elem, followed: true}
                    }
                    
                    return elem;
                })
            } 

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( elem => {
                    if ( elem.id === action.id ){
                        return { ...elem, followed: false }
                    }
                    return elem;
                })
            }     

        case SET_USERS :
             
            return {
                ...state, 
                users: [...state.users, ...action.users]
            }
            
        default: 
            return state;
    }
}

export const followAC = (id) => { 
    return {
        type: FOLLOW,
        id
    };
}

export const unfollowAC = (id) => { 
    return {
        type: UNFOLLOW,
        id
    };
}

export const serUsersAC = (users) => {
    return {
        type: SET_USERS,
        users
    };
}
export default usersReducer;