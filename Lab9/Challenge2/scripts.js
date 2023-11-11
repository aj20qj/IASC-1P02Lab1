var response = prompt("How old are you?","Enter age here");
var userAge = Number(response);
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var yearDifference = currentYear - userAge;
document.write(yearDifference);

//var todayFullDate = new Date();
//var todayMonth = todayFullDate.getMonth() + 1;
//var todayDate = todayFullDate.getDate();
//var todayDay = todayFullDate.getDay();
//var todayHour = todayFullDate.getHours();
//var todayYear = todayFullDate.getYear();
//var todayFullYear = todayFullDate.getFullYear();

//console.log("Full Date: " + todayFullDate);
//console.log("Time: " + todayTime);
//console.log("Month: " + todayMonth);
//console.log("Date: " + todayDate);
//console.log("Day: " + todayDay);
//console.log("Hour: " + todayHour);
//console.log("Year: " + todayYear);
//console.log("Full Year: " + todayFullYear);
