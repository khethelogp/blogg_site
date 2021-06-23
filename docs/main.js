//getting Scroll to the top  button
const scrollToTop = document.getElementById("scrollToTop");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 ) {
        scrollToTop.style.display = "block";
    }else {
        scrollToTop.style.display = "none";
    }
}

//Scrolls back to top of document 
function topFunction() {
    document.body.scrollTop = 0; // for safari 
    document.documentElement.scrollTop = 0; //for Chrome, Firefox, Opera and IE
}

// hamburger
const hamburger = document.querySelector('.header .navbar .navlinks .hamburger');
const mobile_menu = document.querySelector('.header .navbar .navlinks ul');
const menu_item = document.querySelectorAll('.header .navbar .navlinks a');
const header = document.querySelector('.header.container');

//hamburger function

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});



menu_item.forEach((item) =>{
    item.addEventListener('click', () =>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
});

document.addEventListener('scroll', () =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250 ){
        header.style.backgroundColor = "#000000";
    } else{
        header.style.backgroundColor = "transparent";
    }
});