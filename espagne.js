document.querySelectorAll(".video-container").forEach(container => {
    const video = container.querySelector("video");
    const thumbnail = container.querySelector(".thumbnail");

    thumbnail.addEventListener("click", () => {
        thumbnail.style.display = "none";
        video.play();
    });

    video.addEventListener("play", () => {
        thumbnail.style.display = "none";
    });

    video.addEventListener("pause", () => {
        if (video.paused && video.currentTime > 0 && video.currentTime < video.duration) {
            thumbnail.style.display = "flex";
        }
    });

    video.addEventListener("seeked", () => {
        if (video.paused && video.currentTime > 0 && video.currentTime < video.duration) {
            thumbnail.style.display = "flex";
        }
    });
});


