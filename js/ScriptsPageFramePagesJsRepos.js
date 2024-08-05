/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>JavaScript Repos</div>\
          <menu-elem class='ddItems pageElem'><a href='WebComponents.html'>WebComponents</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='WebLibraries.html'>WebLibraries</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='SitePages.html'>SitePages</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='StoryTeller.html'>StoryTeller</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='WebComponentTests.html'>WebComponentTests</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
