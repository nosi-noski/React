import * as axios from 'axios';



const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    headers: {
        "API-KEY": '281833bb-2ecf-4416-a0dc-dfa4fdba3f29' 
    }
});


export const userAPI = {

    getUsers: (currentPage = 1 , pageSize = 10) => {
        return instance.get( `/users?page=${currentPage}&count=${pageSize}` )
        .then( (response ) => {
            // возвращаем поменьше, чем возвращает API
            return response.data;
        });
    },

    followUser: (userid) => {
        return instance.post(`/follow/${userid}`);
    }, 

    unfollowUser: (userid) => {
        return instance.delete(`/follow/${userid}`);
    }

};


export const profileAPI = {

    getProfile: (userId) => {
        return instance.get(`/profile/${userId}`)
        .then( ( response ) => {
            return response;
        });
    },

    getStatus: (userId) => {
        return instance.get(`/profile/status/${userId}`)
        .then( (response) => {
        
            return response;
        } )
    },

    setStatus: (statusText) => {
        return instance.put(`/profile/status`, { status: statusText })
        .then( (response) => {
            return response;
        } )
    } 

};


export const authAPI = {
    authMe: () => {
        return instance.get(`/auth/me`)
    },
    login: ( email, password, rememberMe = false ) => {
        return instance.post(`/auth/login`, {email, password, rememberMe} );
    },
    logout: ( ) => {
        return instance.delete(`/auth/login`);
    }
}

