function myfunction() {
  var h1 = document.getElementById("ond");
  var h2 = document.getElementById("ond1");
  var h3 = document.getElementById("ond2");
  var ball = document.getElementsByClassName("ball")[0];
  ball.classList.add("ballclick");
  h1.innerHTML = "&dollar;19.99 ";
  h2.innerHTML = "&dollar;29.99 ";
  h3.innerHTML = "&dollar;39.99 ";
}
function myfunc() {
  var h1 = document.getElementById("ond");
  var h2 = document.getElementById("ond1");
  var h3 = document.getElementById("ond2");
  var ball = document.getElementsByClassName("ball")[0];
  ball.classList.remove("ballclick");
  h1.innerHTML = "&dollar;199.99 ";
  h2.innerHTML = "&dollar;299.99 ";
  h3.innerHTML = "&dollar;399.99 ";
}
