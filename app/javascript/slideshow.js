let slideIndices = [1, 1];
let slideShowActive = [false, false];

document.addEventListener("DOMContentLoaded", function () {
  showSlides(1, 0);
  showSlides(1, 1);

  const observer = new IntersectionObserver(onIntersectionChange, {
    threshold: 0.5,
  });

  const slideshows = document.getElementsByClassName("slideshow-container");

  for (let i = 0; i < slideshows.length; i++) {
    const slides = slideshows[i].getElementsByClassName("mySlides");
    for (let j = 0; j < slides.length; j++) {
      observer.observe(slides[j]);
    }
  }
});

function onIntersectionChange(entries) {
  const visibleSlides = entries.filter((entry) => entry.isIntersecting);

  for (let i = 0; i < visibleSlides.length; i++) {
    const slide = visibleSlides[i].target;
    const slideshowIndex = parseInt(slide.getAttribute("data-slideshow"));

    if (!slideShowActive[slideshowIndex]) {
      slideShowActive[slideshowIndex] = true;
    }
  }
}

function plusSlides(n, slideshowIndex) {
  showSlides((slideIndices[slideshowIndex] += n), slideshowIndex);
}

function showSlides(n, slideshowIndex) {
  let i;
  let slideshows = document.getElementsByClassName("slideshow-container");
  let slides = slideshows[slideshowIndex].getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndices[slideshowIndex] = 1;
  }
  if (n < 1) {
    slideIndices[slideshowIndex] = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndices[slideshowIndex] - 1].style.display = "block";
}

let slideShowIntervalId;

function startSlideShow() {
  // Set an interval to automatically change the image every 5 seconds
  slideShowIntervalId = setInterval(function () {
    plusSlides(1);
  }, 7000);
}

function stopSlideShow() {
  clearInterval(slideShowIntervalId);
}
