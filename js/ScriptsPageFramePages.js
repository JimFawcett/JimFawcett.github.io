/*
 * ScriptsPageFramePages.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='PageFrame1.html'>PageFrame1</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PageFrame2.html'>PageFrame2&nbsp;</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PageFrame3.html'>PageFrame3</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PageFrame4.html'>PageFrame4</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PageFrameTest.html'>PageFrame Tests</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PageFramePrototype.html'>PageFrame Prototype</a></menu-elem>\
          <menu-elem>&nbsp;</div>\
          <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
