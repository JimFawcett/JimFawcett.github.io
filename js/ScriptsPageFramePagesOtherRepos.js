/*
 * ScriptsPageFramePagesOtherRepos.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div style='width:100%; text-align:center' class='darkItem'>Other Repositories</div>\
          <menu-elem class='ddItems pageElem'><a href='CommCompare.html'>CommCompare</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BasicBiteByByte.html'>BasicBites</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DesignBites.html'>DesignBites</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BitsRepo.html'>CodeBits</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
