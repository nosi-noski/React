import React from 'react';
import classes from './Paginator.module.css'


let Paginator = ({usersTotalCount, pageSize, currentPage, setCurrentPage}) => {
    let pagesCount = Math.ceil( usersTotalCount / pageSize) ;
    let pages = [];

    for ( let i = 1; i <= pagesCount; i++ ) {
        pages.push(i)
    }
    return (
        <div>
            <div className={classes.paginator}>
                { 
                    
                    pages.map( (elem) => {
                        let bold = currentPage === elem ?  'selectedPage' : '';
                        return <span onClick={ (e)=> { setCurrentPage(elem) }}
                                     key={elem}
                                     className={ classes.pageNumber + ' ' + classes[bold] 
                                }>{elem}</span>
                    })
                }
            
            </div>  
        </div>
    )
}
    
   
            
    

export default Paginator;