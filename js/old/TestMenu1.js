/****************************************************************************
   TopMenu.js - Top level navigation code for website
   ver 2.0
   This javascript file is a single source of navigation code on all
   top-level pages for www.ecs.syr.edu/faculty/fawctt

   Jim Fawcett, Syracuse University, 25 June 2016
 ****************************************************************************/
var count = 0;
function goLeft() {
  var nodes = [];
  var node = document.getElementById("menuList");
  var items = node.childNodes;
  for (var i = 1; i < items.length; ++i) {
    if (items[i].nodeName == "LI") {
      nodes.push(items[i]);
    }
  }
  if (count < nodes.length - 2) {
    nodes[++count].style.display = "none";
  }
}
function getChildLis(node)
{
  var nodes = [];
  parnode = node.parentNode;
  var items = parnode.childNodes;
  for (var i = 0; i < items.length; ++i) {
    if (items[i].nodeName == "UL") {
      var children = items[i].childNodes;
      for (var j = 1; j < children.length; ++j) {
        if (children[j].nodeName == "LI") {
          nodes.push(children[j]);
        }
      }
    }
  }
  return nodes;
}
function getStyle(node, prop)
{
  var style;
  if (getComputedStyle != "undefined") {
    style = getComputedStyle(node, null).getPropertyValue(prop);
    //alert(style.toString());
  }
  else {
    if (node.currentStyle != "undefined") {
      style = node.currentStyle[prop];
      //alert(style.toString());
    }
  }
  return style;
}
function goUp(node) {
  //alert(node.toString());
  var nodes = getChildLis(node);
  //alert(nodes.length);
  for (var i = 0; i < nodes.length - 1; ++i) {
    if (nodes[i].style.display == "none") {
      continue;
    }
    else {
      upCount = i;
      nodes[i].style.display = "none";
      break;
    }
  }
}
function goDown(node) {
  //alert(node.toString());
  var nodes = getChildLis(node);
  //alert(nodes.length);
  nodes[nodes.length-2].style.display = "inline";
  for (var i = 0; i < nodes.length - 1; ++i) {
    if (getStyle(nodes[i], "display") != "none") {
      nodes[i - 1].style.display = "inline";
      break;
    }
  }
}
function scroll(event)
{
  //alert(event.toString());
  //alert(event.deltaY);
  event.preventDefault();
  var node = document.getElementById("scrollMenu");
  if (event.deltaY > 0) {
    goUp(node);
    //alert("scrolling up");
  }
  else {
    goDown(node);
    //alert("scrolling down");
  }
  return false;
}
function doPrint() {
  var nodes = [];
  var node = document.getElementById("nav");
  node.style.display = "none";
  var node2 = document.getElementById("title");
  node2.style.marginTop = "0px";
  var nodes = document.getElementsByTagName("footer");
  nodes[0].style.display = "none";
}
function init()
{
  //alert("init");
  var node = document.getElementById("scrollMenu");
  node.addEventListener("wheel", scroll, false);
  node.addEventListener("contextmenu", function (ev) {
    ev.preventDefault();
    goDown(node);
    return false;
  }, false);
}

if (window.addEventListener) {
  window.addEventListener("load", init, false);
}
else {
  if (window.attachEvent) {
    window.attachEvent("onload", init);
  } else {
    if (window.onload) {
      window.onload = init;
    }
  }
}

$(document).ready(function () {
  $("#nav").html(
     "<div id='menu'>\
      <div class='menubegin' />\
	    <ul id='menuList'>\
        <li style='width:30px;'><a href='#' onclick='goLeft()'> &lt; </a></li>\
		    <li id='home'><a href='../Webpages/fawcettHome.htm'>Home</a></li>\
		    <li aria-haspopup='true'><a href='#'>Courses &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../Webpages/Courses.htm'>Courses</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/CSE681.htm'>CSE681-SMA</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/CSE686.htm'>CSE686-IP</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/CSE687.htm'>CSE687-OOD</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/CSE775.htm'>CSE775-DO</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/CSE776.htm'>CSE776-DP</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/CSE784.htm'>CSE784-SS</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Code.htm'>Sample Code</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Presentations.htm'>Presentations</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/OfficeHours.htm'>Office Hours</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Courses.htm'>Program Plan</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SoftwareTrack.htm'>SW Track</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Notices.htm'>Notices</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/StudentProjects.htm'>Student Projects</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true'><a href='#'>Core Tech &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../Webpages/CoreTechnologies.htm'>Core Technologies</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/Cpp.htm'>C++</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/Cpp.htm'>C++/CLI</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/CSharp.htm'>C#, .Net</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/Sockets.htm'>Network Prog</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/ThreadsAndSynch.htm'>Threads</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/Win32SystemProgramming.htm'>Win32 Sys</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/WindowsProgramming.htm'>Win GUI</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/XML.htm'>XML</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Mathematics.htm'>Math</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true'><a href='#'>Directories &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../'>Handouts</a></li>\
				    <li aria-haspopup='false'><a href='../Coretechnologies/'>CoreTech</a></li>\
				    <li aria-haspopup='false'><a href='../CSE681/'>CSE681-SMA</a></li>\
				    <li aria-haspopup='false'><a href='../CSE686/'>CSE686-IP</a></li>\
				    <li aria-haspopup='false'><a href='../CSE687/'>CSE687-OOD</a></li>\
				    <li aria-haspopup='false'><a href='../CSE775/'>CSE775-DO</a></li>\
				    <li aria-haspopup='false'><a href='../CSE776/'>CSE776-DP</a></li>\
				    <li aria-haspopup='false'><a href='../CSE784/'>CSE784-SS</a></li>\
				    <li aria-haspopup='false'><a href='../SummerProjects/'>Summer Prj</a></li>\
				    <li aria-haspopup='false'><a href='../ShortCourse/'>Short Course</a></li>\
			    </ul>\
		    </li>\
		    <!-- <li aria-haspopup='true'><a href='#' onclick='goUp(this)' oncontextmenu='goDown(this); return false' onwheel='goUp(this)'>ShortCourse &#9662;</a>\ -->\
		    <!-- <li aria-haspopup='true'><a id='scrollMenu' href='#' onclick='goUp(this)' onwheel='scroll(); return false'>ShortCourse &#9662;</a>\ -->\
		    <li aria-haspopup='true'><a id='scrollMenu' href='#' onclick='goUp(this)'>ShortCourse &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='SummerCourse.htm'>SC Home</a></li>\
				    <li aria-haspopup='false'><a href='Repository.htm'>Repository</a></li>\
				    <li aria-haspopup='false'><a href='Platform.htm'>Platform</a></li>\
				    <li aria-haspopup='false'><a href='LangComp.htm'>Lang Comp</a></li>\
				    <li aria-haspopup='false'><a href='PackageLayout.htm'>Pkg Layout</a></li>\
				    <li aria-haspopup='false'><a href='ClassAnatomy.htm'>Class Anatomy</a></li>\
				    <li aria-haspopup='false'><a href='Inheritance.htm'>Inheritance</a></li>\
				    <li aria-haspopup='false'><a href='CompoundObjects.htm'>Compound Objs</a></li>\
				    <li aria-haspopup='false'><a href='Containers.htm'>Containers</a></li>\
				    <li aria-haspopup='false'><a href='SystemCalls.htm'>System Calls</a></li>\
				    <li aria-haspopup='false'><a href='Plugins.htm'>Plugins</a></li>\
				    <li aria-haspopup='false'><a href='Streams.htm'>Streams</a></li>\
				    <li aria-haspopup='false'><a href='Templates.htm'>Templates</a></li>\
				    <li aria-haspopup='false'><a href='Threads.htm'>Threads</a></li>\
				    <li aria-haspopup='false'><a href='JavaScript.htm'>JavaScript</a></li>\
				    <li aria-haspopup='false'><a href='HTML5.htm'>HTML5</a></li>\
				    <li aria-haspopup='false'><a href='OtherTopics.htm'>Other Topics</a></li>\
				    <li aria-haspopup='false'><a href='CheckList.htm'>C++ Check List</a></li>\
				    <li aria-haspopup='false'><a href='Exercises.htm'>Exercises</a></li>\
			    </ul>\
        </li>\
		    <li aria-haspopup='true'><a href='#'>Research &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../Webpages/Research.htm'>Research</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/ResearchStatement.htm'>Research Statment</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/ResearchCode.htm'>Research Code</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SWMatrixCrossPlatformDev.htm'>V.Appaduri</a></li>\
				    <li aria-haspopup='false'><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/research/bolazar/main/index.html'>K.Bolazar</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SoftwareMatrix.htm'>R.Ghosh</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/VoiceActivatedRecording.htm'>J.Goddard</a></li>\
				    <li aria-haspopup='false'><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/research/MuratsResearch/MuratsDefense/StructuralModelsForLargeSoftwareSystems.htm'>M.Gungor</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/KayaDefense.htm'>M.Kaya</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/AspectOrientedProgramming.htm'>R.Krishnan-Chittur</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SelfHealingSoftwareMatrix.htm'>A.Krishna</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Test2.html'>M.Mohammed</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SWMatrixModelDrivenDev.htm'>T.Patel</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/ComputingWithGPUs.htm'>P.Pratt-Szeliga</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SoftwareRestructuring.htm'>S.Singh</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/EnhancedDebuggingThruVirtualization.htm'>R.Wilson</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>EECS &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../Webpages/GradOrientation.htm'>Orientation</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/StudentPictures.htm'>Student Pictures</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/StudentCultures.htm'>Student Cultures</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Graduates.htm'>Graduates</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Resources &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../Webpages/SiteMap.htm'>Site Map</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/TechnicalLinks.htm'>Tech Links</a></li>\
				    <li aria-haspopup='false'><a href='http://www.syr.edu/registrar/forms'>University Forms</a></li>\
				    <li aria-haspopup='false'><a href='http://eng-cs.syr.edu/our-departments/electrical-engineering-and-computer-science/department-resources/'>Department Forms</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Interviews.htm'>Interviews</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/CPT.htm'>Internships and CPTs</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/OPT.htm'>Unfunded OPTs</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Books.htm'>Books</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Articles.htm'>Articles</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Mathematics.htm'>Math</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BrownBagSeminar.htm'>Seminars</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SWDev.htm'>SW Development</a></li>\
            <li aria-haspopup='false'><a href='../Webpages/WebDev.htm'>Web Development</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SiteDesign.htm'>Site Design</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/TestPage.htm'>Test HTML5</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Projects &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../Webpages/GettingStartedProjects.htm'>Getting Started</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/AdviceProjects.htm'>Advice</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BuildingProjects.htm'>Constructing</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SubmittingProjects.htm'>Submissions</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Upload.htm'>Upload Projects</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/GradingPolicy.htm'>Grading Policy</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/HelpSessions.htm'>Help Sessions</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/BuildTools/VS2012Help.pdf'>Visual Studio 2012 Help</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/dreamspark.htm'>Get Visual Studio &amp; Visio</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/dd831853.aspx'>Visual Studio 2015 - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/kx37x362.aspx'>Visual C# - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='https://msdn.microsoft.com/en-us/library/gg145045(v=vs.110).aspx'>.Net Framework - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/60k1461a.aspx'>Visual C++ - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/cscc687y.aspx'>Std C++ Libraries - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Code.htm'>Code</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/Presentations.htm'>Presentations</a></li>\
				    <li aria-haspopup='false'><a href='http://sourcemaking.com/refactoring/bad-smells-in-code'>Code Smells</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SummerProjects.htm'>Summer Projects</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SummerReading.htm'>Summer Reading</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/StudentProjects.htm'>Student Projects</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Blog &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../Webpages/Blog.htm'>First Things</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogDesign.htm'>SW Design</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogOOD.htm'>OO Design</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogObjectModels.htm'>Object Models</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogOCD.htm'>Concept Document</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogNoSql.htm'>noSQL Database</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogParser.htm'>Parsing</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogMTree.htm'>M-ary Trees</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogGraph.htm'>Directed Graphs</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogFileSystem.htm'>C++ FileSystem</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogMsgPass.htm'>Msg-Passing Comm</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/BlogGlobals.htm'>Global Data</a></li>\
				    <li aria-haspopup='false'><a href='../Webpages/SummerReading.htm'>Summer Reading</a></li>\
			    </ul>\
		    </li>\
		    <li class='left' aria-haspopup='false'><a href='SiteMap.htm'>Site Map</a></li>\
        <li style='width:30px;'><a href='#' onclick='doPrint()'>Print</a></li>\
	    </ul>\
    <div class='menuend' />\
    </div>"
  );
  var node = document.getElementById("scrollMenu");
  node.addEventListener("wheel", scroll, false);
});