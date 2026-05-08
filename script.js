const nameButton = document.getElementById("nameButton");
const sideMenu = document.getElementById("sideMenu");

if (nameButton && sideMenu) {
  nameButton.addEventListener("click", () => {
    sideMenu.classList.toggle("open");
  });
}