// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

// Event listeners for "About Me" buttons
var aboutButtons = document.querySelectorAll(".aboutMe");

aboutButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    window.location.href = "about.html"; // Redirect to about page (create about.html)
  });
});

// Event listeners for "Hire Me" buttons
var hireButtons = document.querySelectorAll(".hireMe");

hireButtons.forEach(function(button) {
  button.addEventListener("click", function() {
    window.location.href = "hire.html"; // Redirect to hire page (create hire.html)
  });
});
