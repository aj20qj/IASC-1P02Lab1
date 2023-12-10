function bossSelect(){
  var numb2 = document.getElementById("bossList").value;
}


function divButton(){
  var numb1 = document.getElementById("num1").value;
  var numb2 = document.getElementById("bossList").value;
  var midResult = Number(numb2) / Number(numb1);
  let finalResult = midResult.toFixed(2);
  document.getElementById("resultID").innerHTML = finalResult;
}

function theTime() {
  const today = new Date();
  let currentHours = today.getHours();
  let currentMinutes = today.getMinutes();
  let currentSeconds = today.getSeconds();
  currentMinutes = checkTime(currentMinutes);
  currentSeconds = checkTime(currentSeconds);
  document.getElementById('time').innerHTML = currentHours + ":" + currentMinutes + ":" + currentSeconds;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
  var currentWeekDay = days[today.getDay()];
  var currentDay = today.getDate();
  var currentMonth = months[today.getMonth()];
  var currentYear = today.getFullYear();
  var date = currentWeekDay+", "+currentDay+" "+currentMonth+" "+currentYear;
  document.getElementById("date").innerHTML = date;

  setTimeout(theTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
