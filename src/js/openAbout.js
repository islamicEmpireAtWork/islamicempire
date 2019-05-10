/* Open About */
function openAbout() {
  document.getElementsByClassName("overlay-content")[0].style.transform = "translateX(-20vw)";
  document.getElementById("aboutPane").style.transform = "translateX(-20vw)";
}

/* Close About */
function closeAbout() {
document.getElementsByClassName("overlay-content")[0].style.transform = "translateX(0vw)";
document.getElementById("aboutPane").style.transform = "translate(0vw)";
}
