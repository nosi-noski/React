export const updateObjectInArray = (items, itemId, propName, newObjAttr) => {

   return items.map( elem => {
        if ( elem[propName] === itemId ){
            return { ...elem, ...newObjAttr }
        }
        return elem;
    })

}

