const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  // Main Slider Configuration
  var main = new Splide("#main-slider", {
    type: "fade",
    heightRatio: 0.5,
    pagination: false,
    arrows: false,
    cover: true,
  });

  // Thumbnail Slider Configuration
  var thumbnails = new Splide("#thumbnail-slider", {
    rewind: true,
    fixedWidth: 143,
    fixedHeight: 143,
    isNavigation: true,
    gap: 10,
    focus: "left",
    pagination: false,
    cover: true,
    dragMinThreshold: {
      mouse: 4,
      touch: 10,
    },
    breakpoints: {
      640: {
        fixedWidth: 100,
        fixedHeight: 100,
      },
    },
  });

  // Sync main slider with thumbnails
  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});

const options = document.querySelectorAll(".option-label");
const inputs = document.querySelectorAll('input[name="offer"]');

inputs.forEach((input) => {
  input.addEventListener("change", function () {
    // Remove active class from all labels
    options.forEach((option) => {
      option.classList.remove("active-option");
    });

    // Add active class to the clicked option's label
    this.closest(".option-label").classList.add("active-option");
  });
});

 const toggleBtn = document.getElementById('shipping-toggle');
  const content   = document.getElementById('shipping-content');
  const iconWrap  = document.getElementById('shipping-icon');

  let open = false; // start CLOSED

  toggleBtn.addEventListener('click', () => {
    open = !open;

    if (open) {
      content.classList.remove('grid-rows-[0fr]', 'opacity-0');
      content.classList.add('grid-rows-[1fr]', 'opacity-100');
      iconWrap.classList.remove('rotate-180');
    } else {
      content.classList.remove('grid-rows-[1fr]', 'opacity-100');
      content.classList.add('grid-rows-[0fr]', 'opacity-0');
      iconWrap.classList.add('rotate-180');
    }
  });
