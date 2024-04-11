/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem undefined'><a href='CppBiteByByte.html'>Cpp&nbsp;Bites&nbsp;Repo&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='indexCpp.html'>Cpp&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/CppBites/CppBites_Intro.html'>Introduction</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/CppBites/CppBites_Survey.html'>Survey</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Core&nbsp;Model</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Core&nbsp;Memory</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Core&nbsp;Types</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Core&nbsp;Classes</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/CppBites/CppBites_STR.html'>Class&nbsp;Anatomy&nbsp;Examples&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Core&nbsp;Templates</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Core&nbsp;STL</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Modern&nbsp;Model</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Modern&nbsp;C++11</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Modern&nbsp;C++14</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Modern&nbsp;C++17</a></menu-elem>\
          <menu-elem class='ddItems pageElem undefined'><a href='#'>Modern&nbsp;C++20</a></menu-elem>\
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
