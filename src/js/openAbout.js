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

/* Open Mental Maps div */
function openMMDiv() {
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "150px";
}

function closeMMDiv() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function openAMDiv() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "150px";
}

function closeAMDiv() {
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}

/* Open Admin Maps div */
function closeMenuDivs() {
  document.getElementsByClassName("mental-maps-menu")[0].style.width = "0vw";
  document.getElementsByClassName("admin-maps-menu")[0].style.width = "0vw";
}
