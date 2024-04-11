/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a class='undefined' href='Javascript:;'>C#&nbsp;Bites&nbsp;Repo&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='indexCs.html'>C#&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a class='undefined' href='Javascript:;'>Introduction</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a class='undefined' href='Javascript:;'>...</a></menu-elem>\
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
