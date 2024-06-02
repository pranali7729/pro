// document.addEventListener('DOMContentLoaded', function() {
//     var learnMoreBtn = document.getElementById('learn-more-btn');
//     var featureText = document.getElementById('feature-text');
    
//     learnMoreBtn.addEventListener('click', function() {
//         if (featureText.style.display === 'none' || featureText.style.display === '') {
//             featureText.style.display = 'block';
//             learnMoreBtn.textContent = 'Show Less';
//         } else {
//             featureText.style.display = 'none';
//             learnMoreBtn.textContent = 'Learn More';
//         }
//     });
// });
'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

/**
 * close navbar when click on any navbar link
 */

for (let i = 0; i < navbarLinks.length; i++) { navElemArr.push(navbarLinks[i]); }

/**
 * addd event on all elements for toggling navbar
 */

for (let i = 0; i < navElemArr.length; i++) {
  navElemArr[i].addEventListener("click", function () {
    elemToggleFunc(navbar);
    elemToggleFunc(overlay);
  });
}



/**
 * header active state
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 400 ? header.classList.add("active")
    : header.classList.remove("active");
}); 