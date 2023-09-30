
/***********************pop**************************** */
//remove element form last
let city:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
console.log(city.pop());

/***************************push*********************** */
//add element in last
let city1:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
console.log(city1.push('Chennai'));
console.log(city1);

/********************************Shift******************** */
//remove element from begining
let city2:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
console.log(city2.shift());
console.log(city2);

/********************************UnShift******************** */
//add element from begining
let city3:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
console.log(city3.unshift('Chennai'));
console.log(city3);

/********************************reverse******************** */
//reverse the array
let city4:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
console.log(city4.reverse());

/********************************sort******************** */
//sorting array
let city5:String[]=['Pune','Mumabai','Delhi','Kolkatta'];
console.log(city5.sort());

/********************************includes******************** */

//let city6:String[]=['Pune','mumbai','Delhi','Kolkatta'];
//console.log(city6.includes('Pune'));

/********************************indexOf******************** */

let city7:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
console.log(city7.indexOf('Mumbai'));

/********************************lastindexOf******************** */

let city8:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
console.log(city8.lastIndexOf('Pune'));

/********************************concat******************** */

let city9:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
let city10:String[]=['Chennai','Jaipur'];
console.log(city9.concat(city10));

/********************************length******************** */

console.log(city10.length);

/********************************splice******************** */

let city11:String[]=['Pune','Mumbai','Delhi','Kolkatta'];
console.log(city11.splice(1,5));

/********************************toString******************** */

let city12:String[]=['Pune','Mumabai','Delhi','Kolkatta'];
console.log(city12.toString());

/********************************Join******************** */