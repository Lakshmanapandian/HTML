import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  // img1 = <HTMLDivElement>document.getElementsByClassName("preview_greyscalebg")[0];
  // img2 = <HTMLDivElement>document.getElementById("preview_content");
  // ans =<HTMLDivElement> document.getElementById("ans");
  number= 0;
  // notify_count = <HTMLDivElement>document.getElementsByClassName("notify_count")[0];
//   decrement:any;
//   notify = document.getElementsByClassName("notify")[0];
//   cart_card = document.getElementsByClassName("cart-card")[0];
//   cardempty = document.getElementById("card-empty");
//   cardfull = document.getElementById("cart-items");
//   evalute = document.getElementById("evalute");
//   imsslider = document.getElementById("preview_image_slider");
//   i = 0;
//     images = [
//    "image-product-1.jpg",
//    "image-product-2.jpg",
//    "image-product-3.jpg",
//    "image-product-4.jpg",
//  ];
 
 
//   display(){
//    this.img1.style.display = "block";
//    this.img2.style.display = "block";
//  }
//   funclose(){
//    this.img1.style.display = "none";
//    this.img2.style.display = "none";
//  }
  decrease() {
   if (this.number > 0) {
        --this.number;
   }
 }
  increase() {
   ++this.number;
 }
//  notifyd() {
//    // cart_card.classList.add("disptog");
 
//    if (this.count > 0) {
//      this.notify.style.display = "block";
//      this.notify_count.innerHTML = this.count;
//    }
//  }
//   displaycart() {
//    cart_card.classList.toggle("disptog");
 
//    if (count == 0) {
//      cardempty.style.display = "block";
//      cardfull.style.display = "none";
//    }
//    if (count > 0) {
//      cardempty.style.display = "none";
//      cardfull.style.display = "block";
//      document.getElementById("quantity").innerHTML = "X" + count;
//      document.getElementById("evalute").innerHTML = "$" + 125 * count + ".00";
//    }
//  }
 
//   display_delete() {
//    if (count == 1) {
//      cardempty.style.display = "block";
//      cardfull.style.display = "none";
//      notify.style.display = "none";
//    }
//    if (count > 0) {
//      notify_count.innerHTML = --count;
//      document.getElementById("quantity").innerHTML = "X" + count;
//      document.getElementById("evalute").innerHTML = "$" + 125 * count + ".00";
//    }
//  }
//   previous() {
//    if (i <= 0) i = images.length;
//    i--;
//    return setImage();
//  }
//   next() {
//    if (i >= images.length - 1) i = -1;
//    i++;
//    return setImage();
//  }
//   setImage() {
//    return imsslider.setAttribute("src", "images/" + images[i]);
//  }
//   displayimg1() {
//    imsslider.setAttribute("src", "images/" + images[0]);
//  }
//   displayimg2() {
//    imsslider.setAttribute("src", "images/" + images[1]);
//  }
//   displayimg3() {
//    imsslider.setAttribute("src", "images/" + images[2]);
//  }
//   displayimg4() {
//    imsslider.setAttribute("src", "images/" + images[3]);
//  }
//   nav() {
//    document.getElementById("desktop_nav").style.display = "block";
//    img1.style.display = "block";
//    img2.style.display = "none";
//  }
//   navclose() {
//    document.getElementById("desktop_nav").style.display = "none";
//    img1.style.display = "none";
//    img2.style.display = "block";
//  }
}
