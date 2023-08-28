//Botão de volta para cima

let mybutton = document.getElementById("up-bottom");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }function topFunction() {
    document.documentElement.scrollTop = 0;
  }

  //Menu Hamburguer

  function menuHamburguer() {
    var x = document.getElementById("menu-items");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
