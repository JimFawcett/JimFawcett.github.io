/*
 * ScriptsPageFramePagesHomeResrc.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    pagesMenu.style.overflowX = "hidden";
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='location.reload()'>Pages</div>\
        <menu-elem class='ddItems pageElem'><a href='SiteGlossary.html'>Glossary</a></menu-elem>\
        <menu-elem class='ddItems pageElem'><a href='SiteReferences.html'>References</a>&nbsp;</menu-elem>\
        <menu-elem class='ddItems pageElem'><a href='SiteAdditions.html'>Additions</a>&nbsp;</menu-elem>\
        <menu-elem class='ddItems pageElem'><a href='help.html'>Help</a>&nbsp;</menu-elem>\
        <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
