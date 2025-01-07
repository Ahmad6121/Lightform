function openNav() {
  document.getElementById("myNav").style.height = "100%";
  document.getElementById("menu-icon").classList.add("hidden");
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
  document.getElementById("menu-icon").classList.remove("hidden");
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 2 || document.documentElement.scrollTop > 2) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
}
// Get the carousel element
const carousel = document.getElementById('demo');

// Add event listener for mouse wheel
carousel.addEventListener('wheel', (event) => {
  // Prevent default scrolling behavior
  event.preventDefault();

  // Determine the scroll direction
  if (event.deltaY > 0) {
    // Scroll down, move to the next slide
    bootstrap.Carousel.getInstance(carousel).next();
  } else {
    // Scroll up, move to the previous slide
    bootstrap.Carousel.getInstance(carousel).prev();
  }
});
