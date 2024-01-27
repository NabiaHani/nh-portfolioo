// (function ($) {
//     "use strict";

//     // loader
//     var loader = function () {
//         setTimeout(function () {
//             if ($('#loader').length > 0) {
//                 $('#loader').removeClass('show');
//             }
//         }, 1);
//     };
//     loader();


// Initiate the wowjs
new WOW().init();


// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
});
$('.back-to-top').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
    return false;
});


// Sticky Navbar
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('nav-sticky');
    } else {
        $('.navbar').removeClass('nav-sticky');
    }
});


// Smooth scrolling on the navbar links
// $(".navbar-nav a").on('click', function (event) {
//     if (this.hash !== "") {
//         event.preventDefault();

//         $('html, body').animate({
//             scrollTop: $(this.hash).offset().top - 45
//         }, 1500, 'easeInOutExpo');

//         if ($(this).parents('.navbar-nav').length) {
//             $('.navbar-nav .active').removeClass('active');
//             $(this).closest('a').addClass('active');
//         }
//     }
// });


// Typed Initiate
if ($('.hero .hero-text h2').length == 1) {
    var typed_strings = $('.hero .hero-text .typed-text').text();
    var typed = new Typed('.hero .hero-text h2', {
        strings: typed_strings.split(', '),
        typeSpeed: 100,
        backSpeed: 20,
        smartBackspace: false,
        loop: true
    });
}


// Skills
// $('.skills').waypoint(function () {
//     $('.container1 .bar').each(function () {
//         $(this).css("width", $(this).attr("aria-valuenow") + '%');
//     });
// }, {offset: '80%'});


// Testimonials carousel
// $(".testimonials-carousel").owlCarousel({
//     center: true,
//     autoplay: true,
//     dots: true,
//     loop: true,
//     responsive: {
//         0:{
//             items:1
//         }
//     }
// });



// Portfolio filter
// var portfolioIsotope = $('.portfolio-container').isotope({
//     itemSelector: '.portfolio-item',
//     layoutMode: 'fitRows'
// });

// $('#portfolio-filter li').on('click', function () {
//     $("#portfolio-filter li").removeClass('filter-active');
//     $(this).addClass('filter-active');
//     portfolioIsotope.isotope({filter: $(this).data('filter')});
// });

(jQuery);




// ============================ SCROLL ANIMATION ============================
// ScrollReveal({
//     //   reset: true,
//     distance: "80px",
//     duration: 2000,
//     delay: 200,
//   });
  
//   ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
//   ScrollReveal().reveal(
//     ".container-box, .services-container, .container-fluid, .contact form",
//     { origin: "bottom" }
//   );
//   ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
//   ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });





// document.addEventListener("DOMContentLoaded", function() {
//     const filterOptions = document.querySelectorAll("#portfolio-filter li"); // Get all filter options
//     const portfolioItems = document.querySelectorAll(".portfolio-item"); // Get all portfolio items

//     filterOptions.forEach(function(option) {
//         option.addEventListener("click", function() {
//             const filterValue = option.getAttribute("data-filter"); // Get the filter value

//             // Remove 'filter-active' class from all options and add it to the clicked option
//             filterOptions.forEach(function(item) {
//                 item.classList.remove("filter-active");
//             });
//             option.classList.add("filter-active");

//             portfolioItems.forEach(function(item) {
//                 if (filterValue === "*" || item.classList.contains(filterValue)) {
//                     item.style.display = "block"; // Show matching items
//                 } else {
//                     item.style.display = "none"; // Hide non-matching items
//                 }
//             });
//         });
//     });
// });













// document.addEventListener("DOMContentLoaded", function() {
//     const filterOptions = document.querySelectorAll("#portfolio-filter li");
//     const portfolioItems = document.querySelectorAll(".portfolio-item");

//     filterOptions.forEach(function(option) {
//         option.addEventListener("click", function() {
//             const filterValue = option.getAttribute("data-filter");

//             filterOptions.forEach(function(item) {
//                 item.classList.remove("filter-active");
//             });
//             option.classList.add("filter-1");
//             option.classList.add("filter-2");
//             option.classList.add("filter-3");

//             portfolioItems.forEach(function(item) {
//                 if (filterValue === "*" || item.classList.contains(filterValue)) {
//                     item.style.display = "block";
//                 } else {
//                     item.style.display = "none";
//                 }
//             });
//         });
//     });
// });



// ============== SETRVICES SECTION READMORE BUTTON ====================
const servicesBtn1 = document.getElementById('serviceBtn1');
const servicesText1 = document.querySelector('.services-box p .moreText1');

servicesBtn1.addEventListener('click', () => {
  servicesText1.classList.toggle('show');
  servicesBtn1.textContent = servicesText1.classList.contains('show') ? 'Read Less' : 'Read More';
});

const servicesBtn2 = document.getElementById('serviceBtn2');
const servicesText2 = document.querySelector('.services-box p .moreText2');

servicesBtn2.addEventListener('click', () => {
  servicesText2.classList.toggle('show');
  servicesBtn2.textContent = servicesText2.classList.contains('show') ? 'Read Less' : 'Read More';
});

const servicesBtn3 = document.getElementById('serviceBtn3');
const servicesText3 = document.querySelector('.services-box p .moreText3');

servicesBtn3.addEventListener('click', () => {
  servicesText3.classList.toggle('show');
  servicesBtn3.textContent = servicesText3.classList.contains('show') ? 'Read Less' : 'Read More';
});