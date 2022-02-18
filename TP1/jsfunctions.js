window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("topnav");

var sticky = navbar.offsetTop;

function stickyFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}