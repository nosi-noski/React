import React from 'react';
import Loader from './../components/Common/Loader/Loader'




export const WithSuspense = (Component) => {
   
    return (props) => {
        return (
            <React.Suspense fallback={<Loader/>}>
                <Component {...props}/>
            </React.Suspense>
        )
    };
}