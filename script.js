const hamburger = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");

hamburger.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
  hamburger.classList.toggle("active");
});


document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".video-player");
  const playButton = document.querySelector(".play-btn");
  const info = document.querySelector(".info")

  // Play video, hide play button, and show video controls
  playButton.addEventListener("click", () => {
      video.play();
      info.style.display = "none";
      playButton.style.display = "none";
      video.setAttribute("controls", "controls"); // Add controls attribute to the video
  });

  // Show play button when video ends
  video.addEventListener("ended", () => {
      playButton.style.display = "block";
      video.removeAttribute("controls"); // Remove controls when video ends
  });

});

document.addEventListener("DOMContentLoaded", function () {
  const filterButtons = document.querySelectorAll(".links");
  const newsItems = document.querySelectorAll(".news");

  // Function to hide the news with fade-out and translate-down animation
  function hideNews(item) {
    item.classList.remove("fade-in");
    item.classList.add("fade-out");
    setTimeout(() => {
      item.style.display = "none"; // Set display to none after the animation finishes
    }, 500); // Matches the duration of the animation
  }

  // Function to show the news with fade-in and translate-up animation
  function showNews(item) {
    item.style.display = "block"; // First make it visible
    // Trigger the animation in the next frame
    requestAnimationFrame(() => {
      item.classList.remove("fade-out");
      item.classList.add("fade-in");
    });
  }

  // Add click event to all filter buttons
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = button.getAttribute("data-category");

      // Remove active class from all buttons and add to the clicked one
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter news items based on the category
      newsItems.forEach((item) => {
        if (
          category === "all" ||
          item.getAttribute("data-category") === category
        ) {
          showNews(item);
        } else {
          hideNews(item);
        }
      });
    });
  });

  // Default behavior: Show all news items
  filterButtons[0].click(); // This triggers the "All" button by default
});


const swiper = new Swiper(".swiper-container", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  centeredSlides: true, // Center slides for better preview effect
  slidesPerView: 1.2, // Default to one slide per view
  spaceBetween: 30, // Adjust space between slides
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    1025: {
      slidesPerView: 3,
      spaceBetween: 20, // Adjust space between slides for larger screens
    },
  },
});


