const videoList = [
  "https://www.youtube.com/embed/WBdQnhwO4gQ",
  "https://www.youtube.com/embed/tVYSrwBW1tQ",
  "https://www.youtube.com/embed/eB8Gwc_SfKA",
  "https://www.youtube.com/embed/7WHnlZuIY2U",
  "https://www.youtube.com/embed/1rXL-Qi502k",
  "https://www.youtube.com/embed/Bn-2aJONSb4",
  "https://www.youtube.com/embed/XrIaJayElnw",
  "https://www.youtube.com/embed/1pDj6Z6cDZ8",
  "https://www.youtube.com/embed/Spp7sNhTKQo",
  "https://www.youtube.com/embed/rfbggUOs7EA",
  "https://www.youtube.com/embed/tECX4Ty9wrs",
  "https://www.youtube.com/embed/pvNy3hU6v6k"
];

const watchedVideos = JSON.parse(localStorage.getItem("watched") || "[]");
const grid = document.getElementById("videoGrid");

videoList.forEach((url, index) => {
  const box = document.createElement("div");
  box.className = "video-box";
  box.dataset.index = index;

  if (watchedVideos.includes(index)) {
    box.classList.add("watched");
  }

  box.onclick = () => playVideo(box, url, index);
  grid.appendChild(box);
});

function playVideo(el, url, index) {
  el.innerHTML = `
    <iframe width="100%" height="100%" 
      src="${url}?autoplay=1&modestbranding=1&rel=0"
      frameborder="0" allowfullscreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
    </iframe>`;
  el.classList.remove("video-box");
  el.classList.add("watched");

  if (!watchedVideos.includes(index)) {
    watchedVideos.push(index);
    localStorage.setItem("watched", JSON.stringify(watchedVideos));
  }
}