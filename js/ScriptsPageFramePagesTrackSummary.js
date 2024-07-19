/*
 * ScriptsPageFramePagesTrackSummary.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='location.reload()'>Pages</div>\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCBasic.html?src=indexBasic.html'>Basic</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCCpp.html?src=indexCpp.html'>C++</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCRust.html?src=indexRust.html'>Rust</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCCSharp.html?src=indexCs.html'>C#</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCBits.html?src=indexBits.html'>Bits</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCWebDev.html?src=indexWebDev.html'>WebDevelopment</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCDesign.html?src=indexDesign.html'>Design</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCDeployment.html?src=indexDeployment.html'>Deployment</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCProjects.html?src=indexProjects.html'>Projects</a>&nbsp;</menu-elem >\
          <menu-elem class='ddItems pageElem'><a target='_parent' href='TOCPrototypes.html?src=indexPrototypes.html'>Prototypes</a>&nbsp;</menu-elem >\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
