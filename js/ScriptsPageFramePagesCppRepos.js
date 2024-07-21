/*
 * ScriptsPageFramePagesCppTrack.js
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  /*var pgbtn = document.getElementById("pgbtn");*/
  if (isDefined(pagesMenu)) {
    /*pgbtn.style.display = "flex";*/
    pagesMenu.innerHTML = "<div class='darkItem popupHeader' onclick='location.reload()'>Cpp Repositories</div>\
          <menu-elem class='ddItems pageElem'><a href='CppUtilities.html'>CppUtilities</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='FileUtilities.html'>FileUtilities</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Testing.html'>Testing</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Logger.html'>Logger</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='TextFinder.html'>TextFinder</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Duplicates.html'>Duplicates</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='FileDates.html'>FileDates</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='FileSizes.html'>FileSizes</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='FindFiles.html'>FindFiles</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CodeWebifier.html'>CodeWebifier</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='PrettyPrint.html'>PrettyPrint</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppBlockingQueue.html'>CppBlockingQueue</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='FileManager.html'>FileManager</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppProperties.html'>CppProperties</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='ThreadPool.html'>ThreadPool</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppNoSqlDb.html'>CppNoSqlDb</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Process.html'>Process</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppConcurrentFileAccess.html'>CppConcurrFileAccess</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppLexicalScanner.html'>CppLexicalScanner</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='RetryWrapper.html'>RetryWrapper</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='FileSystem.html'>FileSystem-Win</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a class='undefined' href='Javascript:;'>FileSystem-Linux</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Sockets.html'>Sockets-Win</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a class='undefined' href='Javascript:;'>Sockets-Linux</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='XmlDocument.html'>XmlDocument</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppGraph.html'>CppGraph</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppParser.html'>CppParser</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppCodeAnalyzer.html'>CppCodeAnalyzer</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppCommWithFileXfer.html'>CppCommWithFileXfer</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppHttpClientServer.html'>CppHttpClientServerr</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppMakeDemo.html'>CppMakeDemo</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppBasicDemos.html'>CppBasicDemos</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='STR.html'>STR value type</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CompoundObjects.html'>CompoundObjects</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='ObjectFactories.html'>ObjectFactories</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='TemplateTechniques.html'>TemplateTechniques</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='STL-Containers.html'>STL-Containers</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='IOStreams.html'>IOStreams</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppThreads.html'>CppThreads</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='ProcsAndThreads.html'>ProcsAndThreads</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='Interop.html'>Interop</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppModels.html'>CppModels</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppStoryRepo.html'>CppStoryRepo</a>&nbsp;</menu-elem>\
          <menu-elem class='ddItems pageElem'><a href='CppExamples.html'>More Examples</a>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>\
          <menu-elem>&nbsp;</menu-elem>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    if (isDefined(pgbtn)) {
      pgbtn.style.display = "none";
    }
  }
  }
}
