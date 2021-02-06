import React from 'react';
import classes from './Users.module.css'
import * as axios from 'axios';
import lightbulb from  '../../assets/img/light-bulb-64.png'

let Users1 = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            let users = 'https://social-network.samuraijs.com/api/1.0/users'
            axios.get(users).then(response => {
                
                props.setUsers( [...response.data.items] );
            });
        }
    }
   
    
    return <div>
        <button onClick={getUsers}>GetUsers</button> 
           {
        props.users.map(u => {
           return <div key={u.userid}>
               <span>
                   <div src={u.photoUrl}>
                      <img src={u.photos.small != null ? u.photos.small: lightbulb} alt="#" className={classes.photoUrl}/>
                   </div>
                   <div>
                       { u.followed 
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
                       {/* <div>{ u.location.city.name }</div> */}
                       {/* <div>{ u.location.country }</div> */}
                   </span>
               </span>
           </div>
        })
        
    }
    </div>
} 


class Users extends React.Component {
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        let users = `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`;
        axios.get(users).then(response => {
                
            this.props.setUsers( [...response.data.items] );
            
            this.props.setUsersTotalCount( response.data.totalCount );
        });
    }

    setCurrentPage = (currentPage) => { 
        this.props.setCurrentPage(currentPage);
        let users = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`;
        axios.get(users).then(response => {
                
            this.props.setUsers( [...response.data.items] );
        });
    }

    render = () => {
        let pagesCount = Math.ceil( this.props.usersTotalCount / this.props.pageSize) ;
        let pages = [];

        for ( let i = 1; i <= pagesCount; i++ ){
            pages.push(i)
        }
        

        return  (
            <div>
                <div>
                    { pages.map( (elem) => {
                        let bold = this.props.currentPage === elem ?  'selectedPage' : '';
                        return <span onClick={ (e)=> { this.setCurrentPage(elem) }}
                                     key={elem}
                                     className={ classes.pageNumber + ' ' + classes[bold] }>{elem}</span>
                    })
                     }
             
                </div>  
                {
                    this.props.users.map(u => {
                        
                        return <div key={u.id}>
                            <span>
                                <div src={u.photoUrl}>
                                    <img src={u.photos.small != null ? u.photos.small: lightbulb} alt="#" className={classes.photoUrl}/>
                                </div>
                                <div>
                                    { u.followed 
                                        ? <button onClick = { () => { this.props.unfollow ( u.id ) } }> Unfollow </button> 
                                        : <button onClick = { () => { this.props.follow ( u.id ) } }> Follow </button>}
                                </div>
                
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div>
                                    <div>{u.status}</div>
                                </span>
                                <span>
                                    {/* <div>{ u.location.city.name }</div> */}
                                    {/* <div>{ u.location.  }</div> */}
                                </span>
                            </span>
                        </div>
                    })
                }    
            </div>
        )
    }

};

export default Users;