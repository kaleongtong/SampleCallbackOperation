const profiles = [{
    firstname: 'john',
    lastname: 'peters',
    age: 30
 },
 {
    firstname: 'david',
    lastname: 'lerry',
    age: 20
 }, {
    firstname: 'raju',
    lastname: 'kale',
    age: 40
 }, {
     firstname: 'Sanson',
 lastname: 'Avil',
 age: 25
 },
 
 ];
 //sort object by firstname, lastname, or age. Can also sort by ascend or descend order
 /*let compareVal = (order, key) => {
     return function(a, b) {
    const keyA = a[key].toString().toUpperCase();
    const keyB = b[key].toString().toUpperCase();
    
    let compare = 0;
    if(keyA > keyB){
       compare = 1;
    }else{
       compare = -1;
    }
    
    if(order == 'desc'){
       return compare * -1;
    }else if(order == 'asc'){
       return compare;
    }
    return compare;
    };
 }*/
 
 let sortArr = (profile, order, key) => profiles.sort((a,b) => { 
    if(order == 'desc'){
        return a.key < b.key;
    }
    else if(order == 'asc'){
        return a.key > b.key;
    }
    return 0;
 });
 //let sortArr = (profile, order, key) => profiles.sort(compareVal(order, key));
 
 sortArr(profiles,'asc', 'firstname');
 sortArr(profiles, 'desc', 'lastname');
 sortArr(profiles, 'asc', 'age');

 let calcu = (operator = '+', ...arr) => {
     let defaultNum = arr.reduce((a,b) => a + b);
    if(operator == '+'){
       return defaultNum;
    }else if(operator == '-'){
        return arr.reduce((a,b) => a - b);
    }else if(operator == '*'){
        return arr.reduce((a,b) => a * b);
    }else if(operator == '/'){
        return arr.reduce((a,b) => a / b);
    }
    return 'you are ' + defaultNum + ' crazy';
 }
 
 calcu('+', 3, 5, -5, 4);
 calcu('-', 3, 3);
 calcu('*', 20, 3, 2);
 calcu('/', 50, 5, 2);
 calcu('help', 1, 1, 3, 10);


let addFunc = (...arr) => arr.reduce((a,b) => a + b);

let subFunc = (...arr) => arr.reduce((a,b) => a - b);
let multFunc = (...arr) => arr.reduce((a,b) => a * b);
let divFunc = (...arr) => arr.reduce((a,b) => a / b);

 function calcuCallback(func){
    //return func(arr);
    return func.apply(null, Array.prototype.slice.call(arguments, 1));
    
 }
 

calcuCallback(addFunc, 50, 25, 5);
calcuCallback(subFunc, 100, 10, 3); 
calcuCallback(multFunc, 3, 3, 3);
calcuCallback(divFunc, 40, 2, 2);

let mergeObj =(a,b,c) => {
    return {...a, ...b, ...c};
}
