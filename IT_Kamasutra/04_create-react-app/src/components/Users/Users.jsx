import React from 'react';
import classes from './Users.module.css'

let Users = (props) => {
    debugger
    if (props.users.length === 0) {
        let  usersArr = [
            { 
                userid: 1,
                photourl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/user-alt-64.png',
                name: 'Ivanov Ivan Ivanovich', 
                isfollow: true, 
                status: 'Hello everyone!',
                location: { 
                    country: 'RU',
                    city: {
                        cityid: 100000,
                        name:'MSK'  
                    }
                } 
            },
            { 
                userid: 2,
                photourl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678128-social-facebook-64.png',
                name: 'Sergey', 
                isfollow: false, 
                status: 'Hi, i am Sergey!',
                location: { 
                    country: 'UA', 
                    city: {
                        cityid: 100101,
                        name:'Kiev'  
                    } 
                } 
            },
            { 
                userid: 3,
                photourl: 'https://cdn4.iconfinder.com/data/icons/small-n-flat/24/map-marker-512.png',
                name: 'Stas', 
                isfollow: true,
                status: 'Maybe later.',
                location: { 
                    country: 'US',
                    city: {
                        cityid: 100100,
                        name: 'Washington'   
                    }
                } 
            },
            { 
                userid: 4, 
                photourl: 'https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678078-light-bulb-512.png',
                name: 'Nataliya', 
                isfollow: false,
                status: 'Natalia ready to kill))',
                location: { 
                    country: 'UK',
                    city: {
                        cityid: 100102,
                        name: 'London'   
                    } 
                    
                } 
            }
        ];
        props.setUsers( usersArr );
    }
    
    return (
        props.users.map(u => {
           return <div key={u.userid}>
               <span>
                   <div src={u.photoUrl}>
                      <img src={u.photourl} alt="#" className={classes.photoUrl}/>
                   </div>
                   <div>
                       { u.isfollow 
                        ? <button onClick = { () => { props.unfollow ( u.userid ) } }> Unfollow </button> 
                        : <button onClick = { () => { props.follow ( u.userid ) } }> Follow </button>}
                   </div>
   
               </span>
               <span>
                   <span>
                       <div>{u.name}</div>
                       <div>{u.status}</div>
                   </span>
                   <span>
                       <div>{ u.location.city.name }</div>
                       <div>{ u.location.country }</div>
                   </span>
               </span>
           </div>
        })
        
    )
} 

export default Users;