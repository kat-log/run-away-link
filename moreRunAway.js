console.log("moreRunAway.js");

const nigeteruLink = document.getElementById("nigeteruLink");

nigeteruLink.addEventListener("mouseover", (e) => {
  console.log("mouseover");
  Object.assign(e.target.style, {
    left: `${Math.random() * (window.innerWidth - e.target.offsetWidth)}px`,
    top: `${Math.random() * (window.innerHeight - e.target.offsetHeight)}px`,
  });
});
