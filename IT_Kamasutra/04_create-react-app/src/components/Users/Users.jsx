import React from 'react';
import classes from './Users.module.css'
import lightbulb from  '../../assets/img/light-bulb-64.png'

let Users = (props) => {

    let pagesCount = Math.ceil( props.usersTotalCount / props.pageSize) ;
    let pages = [];

    for ( let i = 1; i <= pagesCount; i++ ) {
        pages.push(i)
    }
    debugger
    return (
        <div>
            <div>
                { 
                    
                    pages.map( (elem) => {
                        let bold = props.currentPage === elem ?  'selectedPage' : '';
                        return <span 
                                    onClick={ (e)=> { props.setCurrentPage(elem) }}
                                    key={elem}
                                    className={ classes.pageNumber + ' ' + classes[bold] }>{elem}</span>
                    })
                }
            
            </div>  
            {
                props.users.map(u => {
                    
                    return <div key={u.id}>
                        <span>
                            <div src={u.photoUrl}>
                                <img src={u.photos.small != null ? u.photos.small: lightbulb} alt="#" className={classes.photoUrl}/>
                            </div>
                            <div>
                                { u.followed 
                                    ? <button onClick = { () => { props.unfollow ( u.id ) } }> Unfollow </button> 
                                    : <button onClick = { () => { props.follow ( u.id ) } }> Follow </button>}
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
    
   
            
    

export default Users;