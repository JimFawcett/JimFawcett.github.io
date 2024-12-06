/*
 * ScriptsPageFramePages.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='bottomMenu.pages()'>Design Bites Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='indexDesign.html'>Design&nbsp;Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DesignBites/DesignBites_Intro.html'>Introduction</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DesignBites/Design.html'>Design</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DesignBites/DesignBites_Structure.html'>Structure</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DesignBites/DesignBites_StructureBasic.html'>Basic</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DesignBites/DesignBites_StructureFactored.html'>Factored</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DesignBites/DesignBites_StructureDataFlow.html'>Data-Flow</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DesignBites/DesignBites_StructureTypeErase.html'>Type&nbsp;Erase</a></menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/DesignBites/DesignBites_StructurePlugIn.html'>Plug-In</a></menu-elem>\
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
