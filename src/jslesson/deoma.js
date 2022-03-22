function addition() {
  const x = 100;
  const y = 50;
  var result = document.getElementById("result");
  result.innerHTML = x + y;
}
function sum() {
  const x = parseInt(document.getElementById("firstvalue").value);
  const y = parseInt(document.getElementById("secondvalue").value);
  var result = document.getElementById("result");
  result.innerHTML = x + y;
}
function add(x, y) {
  result.innerHTML = x + y;
}
function problem1() {
  let i = 0;
  var result = document.getElementById("result");
  for (i = 0; i < 100; i++) {
    result.innerHTML += i + "<br>";
  }
}
function problem2() {
  let i = 0;
  var result = document.getElementById("result");
  for (i = 10; i > 0; i--) {
    result.innerHTML += i + "<br>";
  }
}
function problem3() {
  let i = 0;
  var result = document.getElementById("result");
  for (i = 0; i <= 100; i++) {
    if (i % 2 === 0) result.innerHTML += i + "<br>";
  }
}
function reverse(x) {
  let num = x;
  let reminder = 0;
  var result = document.getElementById("result");
  while (num > 0) {
    reminder = parseInt(num % 10);
    if (reminder % 2 === 0) {
      result.innerHTML += reminder;
    }
    num = parseInt(num / 10);
  }
}
