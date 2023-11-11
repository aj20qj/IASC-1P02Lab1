function sumButton(){
  var numb1 = document.getElementById("num1").value;
  var numb2 = document.getElementById("num2").value;
  var sum = Number(numb1) + Number(numb2);
  document.getElementById("resultID").innerHTML = sum;
}
