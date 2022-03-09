// var billam = document.getElementById("bill").value;
// var customer = document.getElementById("customer").value;

preventDefault();
function fip(event) {
  billam = document.getElementById("bill").value;
  customer = document.getElementById("customer").value;
  tipdis = billam * (5 / 100);
  document.getElementById("tip").innerHTML = "$" + tipdis.toFixed(2);
  document.getElementById("tiptotal").innerHTML =
    "$" + (tipdis / customer).toFixed(2);
  event.preventDefault();

  //   console.log(billam);
}
function tep() {
  billam = document.getElementById("bill").value;
  customer = document.getElementById("customer").value;

  tipdis = billam * (10 / 100);
  document.getElementById("tip").innerHTML = "$" + tipdis.toFixed(2);
  document.getElementById("tiptotal").innerHTML =
    "$" + (tipdis / customer).toFixed(2);
}
function fitp() {
  billam = document.getElementById("bill").value;
  customer = document.getElementById("customer").value;
  tipdis = billam * (15 / 100);
  document.getElementById("tip").innerHTML = "$" + tipdis.toFixed(2);
  document.getElementById("tiptotal").innerHTML =
    "$" + (tipdis / customer).toFixed(2);
}
function tfp() {
  billam = document.getElementById("bill").value;
  customer = document.getElementById("customer").value;
  tipdis = billam * (25 / 100);
  document.getElementById("tip").innerHTML = "$" + tipdis.toFixed(2);
  document.getElementById("tiptotal").innerHTML =
    "$" + (tipdis / customer).toFixed(2);
}
function fit() {
  billam = document.getElementById("bill").value;
  customer = document.getElementById("customer").value;
  tipdis = billam * (50 / 100);
  document.getElementById("tip").innerHTML = "$" + tipdis.toFixed(2);
  document.getElementById("tiptotal").innerHTML =
    "$" + (tipdis / customer).toFixed(2);
}
function ft() {
  billam = document.getElementById("bill").value;
  customer = document.getElementById("customer").value;
  custom = document.getElementById("custom").value;
  tipdis = billam * (custom / 100);
  document.getElementById("tip").innerHTML = "$" + tipdis.toFixed(2);
  document.getElementById("tiptotal").innerHTML =
    "$" + (tipdis / customer).toFixed(2);
}
function reset() {
  document.getElementById("tip").innerHTML = "$ 0.0";
  document.getElementById("tiptotal").innerHTML = "$ 0.0";
}
