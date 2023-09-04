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
      "<li><a href='JavaScript:;'>sec1</a><li>" +
      "<li><a href='JavaScript:;'>sec2</a><li>" +
      "<li><a href='JavaScript:;'>sec3</a><li>" +
      "<li><a href='JavaScript:;'>sec4</a><li>" +
      "</ul>";
    sec.style = "display:flex; padding:0em;";
    toggleState = 1;
  }
}
