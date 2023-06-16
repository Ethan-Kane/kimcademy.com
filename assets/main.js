
// When the user scrolls the page, execute myFunction
// $(document.body).on('touchmove', stickyNav()); // for mobile
window.onscroll = function() {stickyNav()};

// Get the navbar
var navbar = document.getElementById("navbar");
var titlelogo = document.getElementById("titlelogo");
var mobilenav = document.getElementById("mobilenav");
var mobilenavtog = document.getElementById("mobilenav-tog");

// Get the offset position of the navbar
var startsticky = navbar.offsetHeight/2;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
  if (window.pageYOffset >= startsticky) {
    navbar.classList.add("active");
    mobilenav.classList.add("active");
    mobilenavtog.classList.add("active");
    titlelogo.querySelector('img').src = 'img/titlelogo_w.png';
  } else {
    navbar.classList.remove("active");
    mobilenav.classList.remove("active");
    mobilenavtog.classList.remove("active");
    titlelogo.querySelector('img').src = 'img/titlelogo.png';
  }
  console.log("Scroll sticky nav");
}

// Show/hide mobile menu
function openMobileNav() {
  var mobilenav = document.getElementById("mobilenav");
  var icon = document.getElementById("mobilenav-tog-icon");
  // Show
  if (mobilenav.style.display === "none" || window.getComputedStyle(mobilenav, null).display === "none") {
    mobilenav.style.display = "block";
    icon.style.transform = "rotate(90deg)";
  // Close
  } else {
    mobilenav.style.display = "none";
    icon.style.transform = "rotate(0deg)";
  }
  return false;
}

$(document).ready(function () {
  var width = $(window).width();
  if (width <= 768) {
    $('.fa-arrow-right').addClass('fa-rotate-90');
  }
  else{
    $('.fa-arrow-right').removeClass('fa-rotate-90');
  }

  // var InputTrialdate = document.getElementById("InputTrialdate");
  // InputTrialdate.min = new Date().toLocaleDateString('en-ca');
  // InputTrialdate.value = new Date().toLocaleDateString('en-ca');
  today = new Date();
  maxdate = today;
  maxdate.setDate(today.getDate() + 21);
  document.getElementById('InputTrialdate').setAttribute('value',new Date().toLocaleDateString('en-ca'));
  document.getElementById('InputTrialdate').setAttribute('max',maxdate.toLocaleDateString('en-ca'));
  document.getElementById('InputTrialdate').setAttribute('min',new Date().toLocaleDateString('en-ca'));
});