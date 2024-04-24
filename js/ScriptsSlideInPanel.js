/* ------------------------------------------------------------------
 *  ScriptsSlideInPanel.js 
 *    - code for slide-in info panel
 *  
 *  Jim Fawcett, Emeritus Teaching Professor, Syracuse University
 * ------------------------------------------------------------------
 */

var slideIn = new Object;
slideIn.state = "closed";

slideIn.toggleSlideIn = function () {
  let cont = document.getElementById("slideInPanel");
  //console.log('cont = ' + cont);
  //console.log('state = ' + slideIn.state);
  if (slideIn.state === "closed") {
    slideIn.state = "open";
    slideIn.openPanel(cont);
  }
  else {
    slideIn.state = "closed";
    slideIn.closePanel(cont);
  }
};

slideIn.openPanel = function (cont) {
  cont.style.right = "0";
  cont.style.padding = "15px 25px";
  cont.style.overflowY = "auto";
  cont.style.border = "1px solid black";
};

slideIn.closePanel = function (cont) {
  cont.style.right = "-60%";
  cont.style.padding = "0";
  cont.style.overflowY = "hidden";
  cont.style.border = "none";
};

//slideIn.openPanelEdge = function (cont) {
//  console.log('Edge cont = ' + cont);
//  cont.style.position = "fixed";
//  cont.style.top = "150px";
//  cont.style.right = "0";
//  cont.style.width = "50%";
//  cont.style.maxHeight = "250px";
//  cont.style.padding = "15px 25px";
//  cont.style.border = "1px solid black";
//  cont.style.overflowY = "auto";
//  cont.style.zIndex = 1;
//  cont.style.backgroundColor = "white";
//};

slideIn.closePanelEdge = function (cont) {
  console.log('Edge cont = ' + cont);
  cont.style.position = "fixed";
  cont.style.right = "0";
  cont.style.width = "0";
  cont.style.padding = "0";
  cont.style.border = "none";
  cont.style.overflowY = "hidden";
  cont.style.zIndex = "0";
};
