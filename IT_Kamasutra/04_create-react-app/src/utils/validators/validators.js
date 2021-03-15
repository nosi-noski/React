export const required = (value) => {
if ( value ) {
    return undefined;
}
    return 'Field is required';
    
} 


export const maxLength30 = (value) => {
    if ( value && value.length <= 30 ) {
        return undefined;
    }
        return 'Max length for field is 30 symbols';
        
} 

export const maxLengthThunkCreator = (length) => (value) =>  {
    if ( value && value.length <= length ) {
        return undefined;
    }
        return 'Max length for field is 30 symbols';
}