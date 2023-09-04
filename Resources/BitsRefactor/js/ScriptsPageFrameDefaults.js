/*
 * ScriptsPageFrameBase.js
 */

function isDefined(elem) {
  if (typeof elem === 'undefined' || elem === null || elem === undefined) {
    return false;
  }
  return true;
}

function goHome() {
  window.location.href = "../../index.html";
}
bottomMenu.top = function () {
  location.hash = "#top";
}

bottomMenu.bottom = function () {
  location.hash = "#bottom";
}

bottomMenu.home = function () {
  window.location.assign("index.html");
}

bottomMenu.siteMap = function () {
  window.location.assign("SiteMap.html");
}
//bottomMenu.top = function () {
//  location.hash = "#top";
//}

//bottomMenu.bottom = function () {
//  location.hash = "#bottom";
//}

//bottomMenu.home = function () {
//  window.location.assign("index.html");
//}

//bottomMenu.siteMap = function () {
//  window.location.assign("SiteMap.html");
//}
