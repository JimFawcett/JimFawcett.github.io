/*
 * ScriptsPageFramePagesHomeGroup.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div style='margin:0em -1em; text-align:center' class='darkItem'>Pages</div>\
        <menu-elem class='ddItems pageElem'><a href='index.html'>Home</a></menu-elem>\
        <menu-elem class='ddItems pageElem'><a href='SiteMap.html'>SiteMap</a>&nbsp;</menu-elem>\
        <menu-elem class='ddItems pageElem'><a href='SiteDesign.html'>SiteDesign</a>&nbsp;</menu-elem>\
        <menu-elem class='ddItems pageElem'><a href='SiteDemo.html'>SiteDemo</a>&nbsp;</menu-elem>\
        <menu-elem>&nbsp;</div>\
        <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
