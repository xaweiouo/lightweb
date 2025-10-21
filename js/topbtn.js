// Get the button:
let topbtn = document.querySelector(".topbtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    topbtn.style.display = "block";
    } else {
    topbtn.style.display = "none";
};
  document.querySelector('html').style="scroll-behavior: smooth";
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}