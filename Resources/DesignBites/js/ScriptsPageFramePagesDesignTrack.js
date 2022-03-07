/*
 * ScriptsPageFramePages.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<menu-elem class='ddItems pageElem'><a href='../../DesignBites.html'>Design&nbsp;Bites&nbsp;Repo</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='../../indexDesign.html'>Design&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DesignBites_Intro.html'>Intro</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><span>&nbsp;&nbsp;</span><a href='Design.html'>Design</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DesignBites_Structure.html'>Structure</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DesignBites_StructureBasic.html'>Basic</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DesignBites_StructureFactored.html'>Factored</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DesignBites_StructureDataFlow.html'>Data-Flow</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DesignBites_StructureTypeErase.html'>Type&nbsp;Erase</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='DesignBites_StructurePlugIn.html'>Plug-In</a></menu-elem>\
          <menu-elem>&nbsp;</div>\
          <menu-elem>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
