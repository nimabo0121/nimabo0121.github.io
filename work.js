document
        .getElementById("fullscreenToggle")
        .addEventListener("click", function () {
          const carousel = document.getElementById("carouselExampleControls");
          if (!document.fullscreenElement) {
            carousel.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
        });