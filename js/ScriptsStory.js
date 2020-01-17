// ScriptsStory.js

var storyMenu = new Object();

storyMenu.chaps = function () {
  var menu = document.getElementById("chaps");
  if (isDefined(menu)) {
    if (menu.style.display !== "block")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }
};

storyMenu.sects = function () {
  var menu = document.getElementById("sects");
  if (isDefined(menu)) {
    if (menu.style.display !== "block")
      menu.style.display = "block";
    else
      menu.style.display = "none";
  }
};

storyMenu.closeTOC = function () {
  let toc = document.getElementById("toc");
  toc.style.display = "none";
};
