/*
 * ScriptsPageFramePagesBasicTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>C++ Bites Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='../../indexCpp.html'>C++&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppBites_Intro.html'>Introduction</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppBites_Survey.html'>Survey</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppBites_STR.html'>STR class</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppBites_Refs.html'>References</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='javascript:;'>more later</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
