//Menu

function menuResponsivo() {
    var x = document.getElementById("menu-nav");
    if (x.className === "menu") {
      x.className += " responsive";
    } else {
      x.className = "menu";
    }
  }

  //Scroll para cima

let mybutton = document.getElementById("scroll-up");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
} function topFunction() {
    document.documentElement.scrollTop = 0;
}