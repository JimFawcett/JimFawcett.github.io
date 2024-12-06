/*
 * ScriptsPageFramePagesCsTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>C# Bites Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='../../indexCs.html'>Track Summary</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsBites_Intro.html'>Introduction</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsBites_Execution.html'>Execution</a></menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='javascript:;'>more later</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsBites_References.html'>References</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
