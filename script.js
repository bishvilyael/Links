const links = [
  {
    title: "מפה מצטברת מתחילת המיזם 4089 נקודות",
    url: "https://bishvilyael.github.io/FullMap_J_Split/"
  },
{
    title: "מפה חדשית - ניתן להחליף חודש בתוך המפה",
    url: "https://bishvilyael.github.io/PartialMap_Multi/"
  },
 {
    title: "מפה מצטברת  Google Maps",
    url: "https://www.google.com/maps/d/edit?mid=1ZV3wyw_U2qiEHsuJ9LmLKnY8BGG57NU&usp=sharing"
  },
{
    title: "קישור לאתר - בשביל יעל",
    url: "https://https://www.beshvilyael.com/"
  }
  /* {
    title: "מפות אישיות לפי יעל",
    url: "https://bishvilyael.github.io/Badge_Map/"
  } */
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