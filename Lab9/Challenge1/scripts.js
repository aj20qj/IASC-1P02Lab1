var startDate = new Date();

function stopTime() {
  console.log("The button has been clicked");
  var startTime = startDate.getTime();
  var currentDate = new Date();
  var currentTime = currentDate.getTime();
  var currentDifference = currentTime - startTime;
  var inSeconds = currentDifference / 1000;
  window.alert("You have been on this page for: "+inSeconds+" seconds");
}
