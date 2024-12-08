/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div style='padding:0em 1.25em;' class='darkItem popupHeader' onclick='bottomMenu.pages()'>Projects Bites Thread</div>\
          <menu-elem class='ddItems pageElem'><a href='indexProjects.html'>Track&nbsp;Summary</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PageFramePrototype.html'>PageFramePrototype</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='ThreadPagePrototype.html'>ThreadPagePrototype</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='FreePagePrototype.html'>FreePagePrototype</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BitsPrototypeWrapper.html'>BitsPrototypeWrapper</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='BitsPrototypeContent.html'>BitsPrototypeContent</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PhotoSizerWebComponent.html'>PhotoSizerWebComponent</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='HideablePhotoSizerWebComponent.html'>HideablePhotoSizerWebComponent</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='SlideInPanel.html'>SlideInPanel</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='SlideShow.html'>SlideShow</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Draggable.html'>Draggable</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='SplitterBar.html'>SplitterBar</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='ImageSizer.html'>ImageSizer</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem undef'><a href='javascript:;'>more&nbsp;later</a></menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
