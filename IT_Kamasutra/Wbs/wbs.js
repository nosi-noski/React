var map = {} // id, children
var objLevels = {}
var onlyBranch = {};

var arr = [
    { id: 7,    name: "Задача 3",       start: '03.01.2020', finish: '13.01.2020', parent: 44,  level: null, order: null },
    { id: 3,    name: "Этап 1.2",       start: '02.01.2020', finish: '10.01.2020', parent: 100, level: null, order: null },
    { id: 5,    name: "Задача 1",       start: '01.01.2020', finish: '10.01.2020', parent: 20,  level: null, order: null },
    { id: 6,    name: "Задача 2",       start: '02.01.2020', finish: '12.01.2020', parent: 3,   level: null, order: null },
    { id: 8,    name: "Задача 4",       start: '04.01.2020', finish: '14.01.2020', parent: 44,  level: null, order: null },
    { id: 100,  name: "Этап 1",         start: '01.01.2020', finish: '10.01.2020', parent: null, level: null, order: null },
    { id: 20,   name: "Этап 1.1",       start: '01.01.2020', finish: '10.01.2020', parent: 100, level: null, order: null },
    { id: 9,    name: "Задача 5",       start: '05.01.2020', finish: '15.01.2020', parent: 44,  level: null, order: null },
    { id: 10,   name: "Задача 6",       start: '06.01.2020', finish: '16.01.2020', parent: 44,  level: null, order: null },
    { id: 11,   name: "Задача 7",       start: '07.01.2020', finish: '17.01.2020', parent: 44,  level: null, order: null },
    { id: 12,   name: "Задача 8",       start: '08.01.2020', finish: '18.01.2020', parent: 44,  level: null, order: null },
    { id: 16,   name: "Задача 10",      start: '10.01.2020', finish: '19.01.2020', parent: 150, level: null, order: null },
    { id: 13,   name: "Этап 1.4",       start: '04.01.2020', finish: '20.01.2020', parent: 20,  level: null, order: null },
    { id: 140,  name: "Этап 1.4.1",     start: '01.01.2020', finish: '01.01.2020', parent: 13,  level: null, order: null },
    { id: 14,   name: "Этап 1.4.1.1",   start: '01.01.2020', finish: '01.01.2020', parent: 140, level: null, order: null },
    { id: 150,  name: "Этап 1.4.1.1.1", start: '01.01.2020', finish: '01.01.2020', parent: 140, level: null, order: null },
    { id: 44,   name: "Этап 1.3",       start: '03.01.2020', finish: '10.01.2020', parent: 20,  level: null, order: null },
];

// Задача с дочерними эжлементами только на 1 уровень ниже.
arr.forEach(function(obj){
    var key = obj.parent
    if (map[key] ) {
        map[key].push(obj.id)
    } else {
         map[key] = [obj.id]
    }
})

// var arr = {
//     3: [6],
//     13: [140],
//     20: [44, 5, 13],
//     44: [7, 8, 9, 10, 11, 12],
//     100: [20, 3],
//     140: [14, 150],
//     150: [16],
//     null: [100],
// }

// Перебираем задачи ставим начальный уровень, для новых, для дочерних уровень увеличиваем (вложеннее чем родитель)
for (var parentId in map){
    if( !objLevels[parentId] ){
        objLevels[parentId] = 1;
    } 
  
    map[parentId].forEach(function(childId){
        if(objLevels[childId]) {
            objLevels[childId]++;
        }else{
            objLevels[childId] = objLevels[parentId] + 1;
        }
    });

    // Если родителю изменили уровень вложенности, то его детям также меняем уровень
    for(var lv in objLevels){
        Array.isArray(map[lv]) && map[lv].forEach(function(el){     
            if(objLevels[lv] === objLevels[el]){
                objLevels[el]++;
            }
        });
    }
}

//Задать уровни
arr.forEach(function(elem){
    elem.level = objLevels[elem.id]
})


var arrObj = {}
arr.forEach(function(elem){  arrObj[elem.id]=elem})



// Отсортировать по уровню
arr.sort(function( a, b ){

    if( a.level > b.level ) return 1;
    if( a.level < b.level ) return -1;
    if( a.level === b.level ){
        if( new Date([a.start]).getTime() > new Date([b.start]).getTime() ) return 1;
        if( new Date([a.start]).getTime() < new Date([b.start]).getTime() ) return -1;
    } else { 
        return 0;
    }
})









var orderCount = 0
for ( var i = 0; i < arr.length; i++ ){
    arr[i].order = orderCount;
    arr[i].added = true;
    orderCount++;

    for ( var parentKey in map ){
        if(parentKey === arr[i][id]){
            map[parentKey].forEach(function(childId){

            })
        }
    }
     

}