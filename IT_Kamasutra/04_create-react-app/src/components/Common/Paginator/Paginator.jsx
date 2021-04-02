import React, { useState } from 'react';
import classes from './Paginator.module.css'


let Paginator = ({totalCount, pageSize, currentPage, setCurrentPage, portionSize}) => {
    
    let pagesCount = Math.ceil( totalCount / pageSize) ;
    let pages = [];

    for ( let i = 1; i <= pagesCount; i++ ) {
        pages.push(i)
    }
    
    let portionCount = Math.ceil( pagesCount / portionSize );
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = ( portionNumber - 1 ) * portionSize + 1;
    let rightPorionPageNumber = portionNumber * portionSize;

    return (
            <div className={classes.paginator}>
                { portionNumber > 1 && 
                    <button className={classes.button} onClick={ () => {setPortionNumber( portionNumber - 1)}  }>
                        <div className={classes.buttonArrow + ' ' + classes.buttonArrowLeft}></div>
                    </button>
               
                }{
                    pages
                    .filter( (page) => { 
                        return page >= leftPortionPageNumber && page <= rightPorionPageNumber} 
                    )
                    .map( (page) => {
                        let bold = currentPage === page ?  'selectedPage' : '';
                        return (
                            <span onClick={ (e) => { setCurrentPage(page) }}
                                     key={page}
                                     className={ classes.pageNumber + ' ' + classes[bold] 
                                }>{page}</span>
                        )
                         
                    })
                }{
                  portionCount > portionNumber  && 
                    <button className={classes.button} onClick={ () => {setPortionNumber( portionNumber + 1)} }>
                        <div className={classes.buttonArrow + ' ' + classes.buttonArrowRight}></div>
                    </button>
                }
            
            </div>  
    )
}
    
   
            
    

export default Paginator;