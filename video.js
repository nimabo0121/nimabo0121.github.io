document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");
  var contentDivs = document.querySelectorAll("#contentDiv .content");
  var aboutDiv = document.getElementById("div-about");

  function handlePlay() {
    video.removeEventListener("play", handlePlay);

    setTimeout(() => {
      contentDivs.forEach((div, index) => {
        setTimeout(() => {
          div.classList.add("show");

          if (index === contentDivs.length - 1) {
            setTimeout(() => {
              aboutDiv.scrollIntoView({ behavior: "smooth" });
            }, 2000);
          }
        }, index * 700);
      });
    }, 1500);
  }

  video.addEventListener("play", handlePlay);
});
