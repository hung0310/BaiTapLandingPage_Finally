var para_section3 = document.getElementsByClassName("para_section3");
var title_section2 = document.getElementsByClassName("title_section2");
var para_section2 = document.getElementsByClassName("para_section2");
var para_section4 = document.getElementsByClassName("para_section4");
var para_section5 = document.getElementsByClassName("para_section5");
var para_content_hide_section4 = document.getElementsByClassName("para_content_hide_section4");
var title_section8 = document.getElementsByClassName("title_section8");
var para_content2_section9 = document.getElementsByClassName("para_content2_section9");
var para_section10 = document.getElementsByClassName("para_section10");
var title_section6 = document.getElementsByClassName("title_section6");

function checkWindowSize() {
    if (window.innerWidth >= 375 && window.innerWidth <= 1300) { 
        for (var i = 0; i < para_section3.length; i++) {
            para_section3[i].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Faucibus in libero risus<br>semper habitant arcu eget.";
        }
        for (var i = 0; i < para_section4.length; i++) {
            para_section4[i].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Faucibus in libero risus<br>semper habitant arcu eget.";
        }
        for (var i = 0; i < para_content_hide_section4.length; i++) {
            para_content_hide_section4[i].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br>Faucibus in libero risus<br>semper habitant arcu eget.";
        }
        for (var i = 0; i < title_section2.length; i++) {
            title_section2[i].innerHTML = "Discover the beauty around<br>the world";
        }
        for (var i = 0; i < para_section2.length; i++) {
            para_section2[i].innerHTML = "Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit.<br>Faucibus in libero risus semper habitant arcu.";
        }
        for (var i = 0; i < para_section5.length; i++) {
            para_section5[i].innerHTML = "Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit. Faucibus in libero<br>risus semper habitant arcu eget.<br>Et integer facilisi eget.";
        }
        for (var i = 0; i < title_section8.length; i++) {
            title_section8[i].innerHTML = "Take your designs to the next level";
        }
        for (var i = 0; i < para_content2_section9.length; i++) {
            para_content2_section9[i].innerHTML = "Lorem ipsum dolor sit<br>amet";
        }
        for (var i = 0; i < para_section10.length; i++) {
            para_section10[i].innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
        }
        for (var i = 0; i < title_section6.length; i++) {
            title_section6[i].innerHTML = "THE eWatch with the newest microchip technology";
        }
    }
    // if (window.innerWidth >= 375) {
    //     for (var i = 0; i < para_section5.length; i++) {
    //         para_section5[i].innerHTML = "Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit. Faucibus in libero<br>risus semper habitant arcu eget.<br>Et integer facilisi eget.";
    //     } 
    // }
}
window.onload = checkWindowSize;
window.addEventListener("resize", checkWindowSize);
