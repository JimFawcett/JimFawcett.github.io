// Scripts_StoryPageMenu.js

function init() {
  togglemenus();
  document.addEventListener('keydown', (event) => { keyAction(event); }, false);
}

let toggleState = 0;
function togglemenus() {
  let nav = document.getElementById("nav");
  if (toggleState === 1) {
    nav.style = "display:none";
    toggleState = 0;
  }
  else {
    nav.style = "display:block";
    toggleState = 1;
  }
}
