var img1 = document.getElementsByClassName("preview_greyscalebg")[0];
var img2 = document.getElementById("preview_content");
var ans = document.getElementsByClassName("ans")[0];
var notify_count = document.getElementsByClassName("notify_count")[0];
var count = 0;
var notify = document.getElementsByClassName("notify")[0];
var cart_card = document.getElementsByClassName("cart-card")[0];
var cardempty = document.getElementById("card-empty");
var cardfull = document.getElementById("cart-items");
var evalute = document.getElementById("evalute");
var imsslider = document.getElementById("preview_image_slider");
var i = 0;
var images = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];
function display() {
  img1.style.display = "block";
  img2.style.display = "block";
}
function funclose() {
  img1.style.display = "none";
  img2.style.display = "none";
}
function decrease() {
  if (count > 0) {
    document.getElementsByClassName("ans")[0].innerHTML = --count;
  }
}
function increase() {
  document.getElementsByClassName("ans")[0].innerHTML = ++count;
}
function notifyd() {
  // cart_card.classList.add("disptog");

  if (count > 0) {
    notify.style.display = "block";
    notify_count.innerHTML = count;
  }
}
function displaycart() {
  cart_card.classList.toggle("disptog");

  if (count == 0) {
    cardempty.style.display = "block";
    cardfull.style.display = "none";
  }
  if (count > 0) {
    cardempty.style.display = "none";
    cardfull.style.display = "block";
    document.getElementById("quantity").innerHTML = "X" + count;
    document.getElementById("evalute").innerHTML = "$" + 125 * count + ".00";
  }
}

function display_delete() {
  if (count == 1) {
    cardempty.style.display = "block";
    cardfull.style.display = "none";
    notify.style.display = "none";
  }
  if (count > 0) {
    notify_count.innerHTML = --count;
    document.getElementById("quantity").innerHTML = "X" + count;
    document.getElementById("evalute").innerHTML = "$" + 125 * count + ".00";
  }
}
function previous() {
  if (i <= 0) i = images.length;
  i--;
  return setImage();
}
function next() {
  if (i >= images.length - 1) i = -1;
  i++;
  return setImage();
}
function setImage() {
  return imsslider.setAttribute("src", "images/" + images[i]);
}
function displayimg1() {
  imsslider.setAttribute("src", "images/" + images[0]);
}
function displayimg2() {
  imsslider.setAttribute("src", "images/" + images[1]);
}
function displayimg3() {
  imsslider.setAttribute("src", "images/" + images[2]);
}
function displayimg4() {
  imsslider.setAttribute("src", "images/" + images[3]);
}
function nav() {
  document.getElementById("desktop_nav").style.display = "block";
  img1.style.display = "block";
  img2.style.display = "none";
}
function navclose() {
  document.getElementById("desktop_nav").style.display = "none";
  img1.style.display = "none";
  img2.style.display = "block";
}
