const links = [
  {
    title: "מפה מצטברת",
    url: "https://bishvilyael.github.io/FullMap/"
  },
  {
    title: "מפה תקופתית",
    url: "https://bishvilyael.github.io/PartialMap_Multi/"
  },
  {
    title: "מפות אישיות לפי יעל",
    url: "https://bishvilyael.github.io/Badge_Map/"
  }
];

const container = document.getElementById("linksContainer");

links.forEach(item => {
  const link = document.createElement("a");

  link.className = "link-button";
  link.href = item.url;
  link.textContent = item.title;

  // פתיחה בלשונית חדשה
  link.target = "_blank";
  link.rel = "noopener noreferrer";

  container.appendChild(link);
});