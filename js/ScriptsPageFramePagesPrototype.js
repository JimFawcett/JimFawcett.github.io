/*
 * ScriptsPageFramePagesPrototype.js
 * initialize pages script with small number of pages to avoid overflow in page container
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  if (isDefined(pagesMenu)) {
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='location.reload()'>Pages</div>\
          <menu-elem class='ddItems pageElem'><a href='PageFramePrototype.html'>PageFrame&nbsp;Prototype</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='ThreadPagePrototype.html'>Thread&nbsp;Page&nbsp;Prototype</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='FreePagePrototype.html'>Free&nbsp;Page&nbsp;Prototype</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/Bits/Bits_PrototypeWrapper.html'>Bits&nbsp;Prototype&nbsp;Wrapper</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Resources/Bits/Bits_PrototypeContent.html'>Bits&nbsp;Prototype&nbsp;Content</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PhotoSizerWebComponent.html'>PhotoSizer&nbsp;Web&nbsp;Component</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='HideablePhotoSizerWebComponent.html'>Hideable&nbsp;PhotoSizer&nbsp;Web&nbsp;Component</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='SlideInPanel.html'>Slide&nbsp;In&nbsp;Panel&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='SlideShow.html'>Slide&nbsp;Show&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Draggable.html'>Draggable&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='SplitterBar.html'>Splitter&nbsp;Bar&nbsp;</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='ImageSizer.html'>Image&nbsp;Sizer&nbsp;</a>&nbsp;</menu-elem>\
          <div>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
}
