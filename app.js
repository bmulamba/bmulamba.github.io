
var tablinks = document.getElementsByClassName('tab-links');

var tabcontents = document.getElementsByClassName('tab-contents');

var sidemenus = document.getElementById("sidemenu");

var mybutton = document.getElementById("myBtn");

var menuIcon = document.querySelector('#menu-icon');

var navbar = document.querySelector(".sidemenu");

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-times');
    navbar.classList.toggle("active");
}


function opentab(tabname){
    for (tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
};

window.onscroll = () => {
    scrollFunction();
    menuIcon.classList.remove('fa-times');
    navbar.classList.remove("active");
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
