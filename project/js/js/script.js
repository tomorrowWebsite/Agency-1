/*jslint plusplus: true, evil: true */
// jslint plusplus: true for error for ++
// evil: true for error document.write
/*global console , alert , prompt , $ , document, write, ADSAFE, report, jslint, bitwise, node*/
/*property charAt, slicexs*/
/*jslint browser: true */
/*global window */

function scrollHeeder() {
  let nav = document.getElementById("navbar");
  if (this.scrollY >= 80) {
    nav.classList.add("scroll-header");
  } else {
    nav.classList.remove("scroll-header");
  }
}
window.addEventListener("scroll", scrollHeeder);

let openMenu1 = document.getElementById("open-menu");
openMenu1.addEventListener("click", function () {
  let navbarLinks = document.getElementById("navbar-links");
  navbarLinks.classList.toggle("show-navbar-nav");
  this.children[0].classList.toggle("uil-multiply");
});
