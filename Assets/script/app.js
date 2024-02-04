function smoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
}

function mouseFollower() {}

function sheryjsImageffect() {
  Shery.imageEffect(".elem1 img ", {
    style: 1,
    config: {
      a: { value: 2, range: [0, 30] },
      b: { value: -0.11, range: [-1, 1] },
      zindex: { value: "0", range: [-9999999, 9999999] },
      aspect: { value: 0.7285341444553654 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: false },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: false },
      maskVal: { value: 1, range: [1, 5] },
      scrollType: { value: 0 },
      geoVertex: { range: [1, 64], value: 1 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });

  Shery.imageEffect(".elem3 img ", {
    style: 4,
    config: {
      uColor: { value: true },
      uSpeed: { value: 0.47, range: [0.1, 1], rangep: [1, 10] },
      uAmplitude: { value: 1.5, range: [0, 5] },
      uFrequency: { value: 0.61, range: [0, 10] },
      geoVertex: { range: [1, 64], value: 32 },
      zindex: { value: "0", range: [-9999999, 9999999] },
      aspect: { value: 0.7285341444553654 },
      ignoreShapeAspect: { value: true },
      shapePosition: { value: { x: 0, y: 0 } },
      shapeScale: { value: { x: 0.5, y: 0.5 } },
      shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
      shapeRadius: { value: 0, range: [0, 2] },
      currentScroll: { value: 0 },
      scrollLerp: { value: 0.07 },
      gooey: { value: false },
      infiniteGooey: { value: false },
      growSize: { value: 4, range: [1, 15] },
      durationOut: { value: 1, range: [0.1, 5] },
      durationIn: { value: 1.5, range: [0.1, 5] },
      displaceAmount: { value: 0.5 },
      masker: { value: true },
      maskVal: { value: 1.09, range: [1, 5] },
      scrollType: { value: 0 },
      noEffectGooey: { value: true },
      onMouse: { value: 0 },
      noise_speed: { value: 0.2, range: [0, 10] },
      metaball: { value: 0.2, range: [0, 2] },
      discard_threshold: { value: 0.5, range: [0, 1] },
      antialias_threshold: { value: 0.002, range: [0, 0.1] },
      noise_height: { value: 0.5, range: [0, 2] },
      noise_scale: { value: 10, range: [0, 100] },
    },
  });
}

function bannerDets() {
  document.addEventListener("DOMContentLoaded", function () {
    var banners = document.querySelectorAll(".banners");

    banners.forEach(function (banner, index) {
      banner.addEventListener("click", function () {
        var bannerDataContainers = document.querySelectorAll(".bannerdata");
        bannerDataContainers.forEach(function (dataContainer) {
          dataContainer.style.display = "none";
        });

        var correspondingDataContainer =
          document.querySelectorAll(".bannerdata")[index];
        correspondingDataContainer.style.display = "block";

        correspondingDataContainer.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  });
}

function scrollBtn() {
  document.addEventListener("DOMContentLoaded", function () {
    var banners = document.querySelectorAll(".banners");
    var currentBannerIndex = 0;
    var totalBanners = banners.length;

    // Function to scroll up
    document.getElementById("scrollUp").addEventListener("click", function () {
      if (currentBannerIndex > 0) {
        currentBannerIndex--;
        banners[currentBannerIndex].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });

    // Function to scroll down
    document
      .getElementById("scrollDown")
      .addEventListener("click", function () {
        if (currentBannerIndex < totalBanners - 1) {
          currentBannerIndex++;
          banners[currentBannerIndex].scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          // Scroll to the next page if the last banner is reached
          window.location.href = "#page2"; // Adjust the target URL accordingly
        }
      });
  });
}

smoothScroll();
mouseFollower();
sheryjsImageffect();
bannerDets();
scrollBtn();
