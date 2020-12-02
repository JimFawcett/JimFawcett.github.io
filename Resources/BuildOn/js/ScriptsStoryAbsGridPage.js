// JavaScript source code
function init() {
  togglemenus();
}
let toggleState = 0;
function togglemenus() {
  let nav = document.getElementById("nav");
  let sec = document.getElementById("sects");
  if (toggleState === 1) {
    nav.style = "display:none";
    sec.innerHTML = "Jim Fawcett &copy; 2020";
    sec.style = "text-align:center; padding: 0.25em 0em;";
    toggleState = 0;
  }
  else {
    nav.style = "display:block";
    sec.innerHTML =
      "<div class='left' style='width:1em;'>&nbsp;</div>" +
      "<ul>" +
      "<li><a href='JavaScript:;'>Top</a></li>" +
      "<li><a href='JavaScript:;'>What is BuildOn?</a></li>" +
      "<li><a href='JavaScript:;'>Why TextFinder?</a></li>" +
      "<li><a href='JavaScript:;'>Why Rust?</a></li>" +
      "<li><a href='JavaScript:;'>Tooling</a></li>" +
      "<li><a href='JavaScript:;'>Code Starter</a></li>" +
      "<li><a href='JavaScript:;'>Bottom</a></li>" +
      "</ul>";
    sec.style = "display:flex; padding:0em;";
    toggleState = 1;
  }
}
