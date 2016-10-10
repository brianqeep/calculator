function add() {
  var number1 = parseInt(prompt("add number1"));
  var number2 = parseInt(prompt("to number2"));
  result= number1+number2;
  alert("your answer = " +result);
};
function subtract() {
  var number1 = parseInt(prompt("subtract number1"));
  var number2 = parseInt(prompt("to number2"));
  subtract= number1-number2;
  alert("your answer = " +subtract);
};
function multiply() {
  number1 = parseInt(prompt("multiply number1"));
  number2 = parseInt(prompt("to number2"));
  multiply= number1*number2;
  alert("your answer = " + multiply);
};
function divide() {
  number1 = parseInt(prompt("divide number1"));
  number2 = parseInt(prompt("to number2"));
  division= number1/number2;
  alert("your answer = " +division.toFixed(2));
};
