document.addEventListener("DOMContentLoaded", function () {
    var video = document.getElementById("myVideo");
    var contentDivs = document.querySelectorAll("#contentDiv .content");
    video.addEventListener("ended", function () {
        contentDivs.forEach((div, index) => {
            setTimeout(() => {
                div.classList.add("show"); 
            }, index * 600); 
        });
    });
});