const links = [
  {
    title: "מפה מצטברת מתחילת המיזם - 4297 נקודות במפה",
    url: "https://bishvilyael.github.io/FullMap_J_Split/"
  },
  {
    title: "מפה חדשית - ניתן להחליף חודש בתוך המפה",
    url: "https://bishvilyael.github.io/PartialMap_Multi/"
  },
  {
    title: "מפה מצטברת Google Maps",
    url: "https://www.google.com/maps/d/edit?mid=1ZV3wyw_U2qiEHsuJ9LmLKnY8BGG57NU&usp=sharing"
  },
  {
    title: "קישור לאתר - בשביל יעל",
    url: "https://www.beshvilyael.com/"
  }
];

const container = document.getElementById("linksContainer");

links.forEach(item => {
  const link = document.createElement("a");

  link.className = "link-button";
  link.href = item.url;
  link.textContent = item.title;
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  container.appendChild(link);
});

/* כפתור לפתיחת פלייליסט מוטמע */
const playlistButton = document.createElement("button");
playlistButton.className = "link-button";
playlistButton.textContent = "סרטוני תמונות חדשיים ועוד";
container.appendChild(playlistButton);

const videoSection = document.createElement("div");
videoSection.className = "video-section hidden";

videoSection.innerHTML = `
  <div class="video-wrapper">
    <iframe
      src="https://www.youtube.com/embed/videoseries?list=PLEfko1eUSu2Uw5Q22xmRMpzxNR5JFroFE"
      title="YouTube playlist"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>

  <a class="playlist-open-button"
     href="https://www.youtube.com/playlist?list=PLEfko1eUSu2Uw5Q22xmRMpzxNR5JFroFE"
     target="_blank"
     rel="noopener noreferrer">
    פתח את רשימת הסרטונים המלאה ביוטיוב
  </a>
`;

container.appendChild(videoSection);

playlistButton.addEventListener("click", () => {
  videoSection.classList.toggle("hidden");
});