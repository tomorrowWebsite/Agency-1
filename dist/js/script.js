function scrollHeeder(){let e=document.getElementById("navbar");80<=this.scrollY?e.classList.add("scroll-header"):e.classList.remove("scroll-header")}window.addEventListener("scroll",scrollHeeder);let openMenu1=document.getElementById("open-menu");openMenu1.addEventListener("click",function(){let e=document.getElementById("navbar-links");e.classList.toggle("show-navbar-nav"),this.children[0].classList.toggle("uil-multiply")});
//# sourceMappingURL=script.js.map
