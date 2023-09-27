/*********************Substr********************** */
let day1:String="Have A Nice Day";
console.log(day1.substr(5,5));

/*********************length****************** */
let day2:String="My name is Vaishali";
console.log(day2.length);

/*********************indexOf******************* */
let day3:String="Have a nice day";
console.log(day3.indexOf('n'));

/***************************slice***************** */
let day4:String="Have a NIce day";
console.log(day4.slice(5,9));

/**************************lastIndexOf******************** */
let day5:String="Have a Nice day";
console.log(day5.lastIndexOf('y'));

/*****************************splite***************** */
let day6:String="Have a Nice day";
let ans=day6.split(" ");
console.log(ans[2]);

/*******************************toUpperCase********************** */
let day7:String="have a nice day";
console.log(day7.toUpperCase());

/***********************************toLowerCase************************* */
let day8:String="HAVE A NICE DAY";
console.log(day8.toLowerCase());

/***********************************charAt************************* */
let day9:String="have a nice day";
console.log(day9.charAt(3));

/***********************************trim************************* */
let day10:String="have a                  nice day";
console.log(day10.trim( ));

/***********************************replace************************* */
let day11:String="have a nice day";
console.log(day11.replace('nice','good'));

/***********************************search************************* */
let day12:String="have a nice day";
console.log(day12.search('nice'));

/***********************************include************************* */
    //let day13:String="have a nice day";
    //console.log(day13.includes('day'));

/***********************************charCodeAt************************* */
let day14:String="have a nice day";
console.log(day14.charCodeAt(1));

/***********************************repeate************************* */
    //let day15:String="have a nice day";
    //console.log(day15.repeat(3));

/***********************************match************************* */
let day16:String="have a nice day";
console.log(day16.match('ice'));

/*****************************concat*********************** */
let day17:String="have a nice day.";
console.log(day17.concat(" thank you"));