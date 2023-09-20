
var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

var sidemenus = document.getElementById("sidemenu");

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

function openmenu(){
    sidemenus.style.right = "0";
    if(sidemenus.click){
        sidemenus.remove(ul);
    }
    // alert("uuyyghh");
};

function closemenu(){
    sidemenus.style.right = "-200px";
};

