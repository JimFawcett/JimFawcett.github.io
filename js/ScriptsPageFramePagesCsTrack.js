/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>C# Bites Pages</div>\
          <menu-elem class='ddItems pageElem'><a href='indexCs.html'>C#&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/CsBites/CsBites_Intro.html'>Introduction</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/CsBites/CsBites_Execution.html'>Execution</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a class='undefined' href='Javascript:;'>more later</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/CsBites/CsBites_References.html'>References</a></menu-elem>\
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
