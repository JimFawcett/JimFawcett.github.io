/*
 * ScriptsPageFramePagesCsTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='location.reload()'>C# Bites</div>\
          <menu-elem class='ddItems pageElem'><a href='CsBites_Intro.html'>Introduction</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsBites_Execution.html'>Execution</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a class='undef' href='CsBites_Data.html'>Data</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a class='undef' href='CsBites_Operations.html'>Operations</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a class='undef' href='CsBites_Generics.html'>Generics</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
