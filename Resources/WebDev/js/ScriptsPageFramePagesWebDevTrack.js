/*
 * ScriptsPageFramePagesBasicTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='ddLabel darkItem popupHeader' onclick='bottomMenu.pages()'>&nbsp;&nbsp;&nbsp;WebDev&nbsp;Bites&nbsp;Thread&nbsp;&nbsp;&nbsp;</div>\
          <menu-elem class='ddItems pageElem'><a href='../../indexWebDev.html'>WebDev Track</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='WebDev_Survey.html'>Survey</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='WebDev_ShowDiag.html'>[show diagram]</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a hrefd='WebDev_Messages.html'>Messages</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a hrefd='WebDev_queryString.html'>queryString</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a hrefd='WebDev_quickStatus.html'>quickStatus</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a hrefd='javascript:;'>more later</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "block";
    }
  }
}
