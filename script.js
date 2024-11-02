const link = document.getElementById("nigeteruLink");

link.addEventListener("mouseover", moveLink);

function moveLink() {
  const x = Math.floor(Math.random() * (window.innerWidth - link.offsetWidth));
  const y = Math.floor(
    Math.random() * (window.innerHeight - link.offsetHeight)
  );
  link.style.left = x + "px";
  link.style.top = y + "px";
}
