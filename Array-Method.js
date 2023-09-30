/***********************pop**************************** */
//remove element form last
var city = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
console.log(city.pop());
/***************************push*********************** */
//add element in last
var city1 = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
console.log(city1.push('Chennai'));
console.log(city1);
/********************************Shift******************** */
//remove element from begining
var city2 = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
console.log(city2.shift());
console.log(city2);
/********************************UnShift******************** */
//add element from begining
var city3 = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
console.log(city3.unshift('Chennai'));
console.log(city3);
/********************************reverse******************** */
//reverse the array
var city4 = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
console.log(city4.reverse());
/********************************sort******************** */
//sorting array
var city5 = ['Pune', 'Mumabai', 'Delhi', 'Kolkatta'];
console.log(city5.sort());
/********************************includes******************** */
//let city6:String[]=['Pune','mumbai','Delhi','Kolkatta'];
//console.log(city6.includes('Pune'));
/********************************indexOf******************** */
var city7 = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
console.log(city7.indexOf('Mumbai'));
/********************************lastindexOf******************** */
var city8 = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
console.log(city8.lastIndexOf('Pune'));
/********************************concat******************** */
var city9 = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
var city10 = ['Chennai', 'Jaipur'];
console.log(city9.concat(city10));
/********************************length******************** */
console.log(city10.length);
/********************************splice******************** */
var city11 = ['Pune', 'Mumbai', 'Delhi', 'Kolkatta'];
console.log(city11.splice(1, 5));
/********************************toString******************** */
var city12 = ['Pune', 'Mumabai', 'Delhi', 'Kolkatta'];
console.log(city12.toString());
