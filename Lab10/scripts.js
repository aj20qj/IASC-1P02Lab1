function sumButton(){
  var numb1 = document.getElementById("num1").value;
  var numb2 = document.getElementById("num2").value;
  var finalResult = Number(numb1) + Number(numb2);
  document.getElementById("resultID").innerHTML = finalResult;
}

function subButton(){
  var numb1 = document.getElementById("num1").value;
  var numb2 = document.getElementById("num2").value;
  var finalResult = Number(numb1) - Number(numb2);
  document.getElementById("resultID").innerHTML = finalResult;
}

function multiButton(){
  var numb1 = document.getElementById("num1").value;
  var numb2 = document.getElementById("num2").value;
  var finalResult = Number(numb1) * Number(numb2);
  document.getElementById("resultID").innerHTML = finalResult;
}

function divButton(){
  var numb1 = document.getElementById("num1").value;
  var numb2 = document.getElementById("num2").value;
  var finalResult = Number(numb1) / Number(numb2);
  document.getElementById("resultID").innerHTML = finalResult;
}
