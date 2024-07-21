/*
 * ScriptsPageFramePages.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='location.reload()'>C# Repositories</div>\
          <menu-elem class='ddItems pageElem'><a href='Diff_WPF.html'>Diff_WPF</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsBlockingQueue.html'>CsBlockingQueue</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsNavigator.html'>CsNavigator</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsConcurrentFileAccess.html'>CsConcurrentFileAccess</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsGraph.html'>CsGraph</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsParser.html'>CsParser</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsXDocument.html'>CsXDocument</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsDependencyAnalysis.html'>CsDependencyAnalysis</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsCommPrototype.html'>CsCommPrototype</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsRemotePluggableRepo.html'>CsRemotePluggableRepo</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsBasicDemos.html'>CsBasicDemos</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Cs_WCF_Demos.html'>Cs_WCF_Demos</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Cs_WPF_Demos.html'>Cs_WPF_Demos</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsProcess.html'>CsProcess</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CsPublisherSubscriber.html'>CsPublisherSubscriber</a>&nbsp;</menu-elem>\
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
