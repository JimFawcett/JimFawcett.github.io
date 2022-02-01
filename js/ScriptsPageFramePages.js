/*
 * ScriptsPageFramePages2.js
 * initialize pages script with small number of pages to avoid overflow in page container
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  if (isDefined(pagesMenu)) {
    pagesMenu.innerHTML = "<div style='height:0.5em;'>&nbsp;</div>\
          <div class='ddItem'><a href='PageFrame1.html'>PageFrame1</a></div>\
          <div class='ddItem'><a href='PageFrame2.html'>PageFrame2&nbsp;</a></div>\
          <div class='ddItem'><a href='PageFrame3.html'>PageFrame3</a></div>\
<<<<<<< HEAD
          <div class='ddItem'><a href='PageFrameTest.html'>PageTest</a></div>\
=======
          <div class='ddItem'><a href='PageFrame4.html'>PageFrame4</a></div>\
>>>>>>> 9d2cd577510568a335e43f021333e531b8308235
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
