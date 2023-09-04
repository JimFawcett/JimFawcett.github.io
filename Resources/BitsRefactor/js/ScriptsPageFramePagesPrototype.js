/*
 * ScriptsPageFramePagesPrototype.js
 * initialize pages script with small number of pages to avoid overflow in page container
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  if (isDefined(pagesMenu)) {
    pagesMenu.innerHTML = "<div style='height:0.5em;'>&nbsp;</div>\
          <div class='ddItem'><a href='PageFramePrototype.html'>PageFramePrototype</a></div>\
          <div>&nbsp;</div>\
          <div>&nbsp;</div>\
          <div>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
