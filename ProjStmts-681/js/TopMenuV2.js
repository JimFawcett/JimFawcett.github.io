/****************************************************************************
   TopMenu.js - Top level navigation code for website
   ver 1.0
   This javascript file is a single source of navigation code on all
   top-level pages for www.lcs3.syr.edu/faculty/fawctt

   Jim Fawcett, Syracuse University, 08 Aug 2013
 ****************************************************************************/

var top = false;
var keystate = 'up';

function toggleLocation()
{
  if(keystate == 'down')
    location.assign("#top");
  
  //if (top === false) {
  //  location.assign("#top");
  //  top = true;
  //}
  //else {
  //  location.assign("#bottom")
  //  top = false;
  //}
}

$(document).ready(function () {
  $(document).keydown(function (keyEvent) {
    keystate = 'down';
    var key = String.fromCharCode(keyEvent.which);
    if (key === 'T')
      location.assign("#top");
    if (key === 'B')
      location.assign("#bottom");
    if(key === 'N')
    {
      document.getElementById('N').click();
    }
    if(key === 'P')
    {
      document.getElementById('P').click();
    }
    if (key === 'C') {
      document.getElementById('C').click();
    }
    if (key === 'R') {
      document.getElementById('C').click();
    }
  });
  $(document).keyup(function () { keystate = 'up'; });
  $('body').click(toggleLocation);
  $("nav").html(
    "<hr class='menubegin' />\
    <div id='menu'>\
      <ul>\
        <li aria-haspopup='false'><a href='../../Webpages/FawcettHome.htm'>Home</a>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/cse681.htm'>Course</a></li>\
        <li aria-haspopup='false'><a href='../../webpages/cse681.htm#syllabus'>Syllabus</a></li>\
        <li aria-haspopup='true'><a href='#'>Lectures &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='cse681codeL1.htm'>L1: Intro</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL2.htm'>L2: SW Arch</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL3.htm'>L3: SW Arch</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL4.htm'>L4: C# Lang</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL5.htm'>L5: C# Lang</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL6.htm'>L6: C# Lang</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL7.htm'>L7: XML</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL8.htm'>L8: LINQ</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL9.htm'>L9: Threads</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL10.htm'>L10: Threads</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL11.htm'>L11: WCF</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL12.htm'>L12: WCF</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL13.htm'>L13: Win GUIs</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL14.htm'>L14: WPF</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL15.htm'>L15: WPF</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL16.htm'>L16: Projs #3, #4</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL17.htm'>L17: Asynch Systems</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL18.htm'>L18: Test Harness</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL19.htm'>L19: MT Rev</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL20.htm'>L20: MidTrm</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL21.htm'>L21: CLR</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL22.htm'>L22: Interop</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL23.htm'>L23: System Structure</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL24.htm'>L24: MT Rslts</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL26.htm'>L25: Qing</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL26.htm'>L26: Entrpr</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL28.htm'>L27: FP Hlp</a></li>\
            <li aria-haspopup='false'><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Projects &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='Project1-F2017.htm'>Project #1</a></li>\
				    <li aria-haspopup='false'><a href='Project2-F2017.htm'>Project #2</a></li>\
				    <li aria-haspopup='false'><a href='Project3-F2017.htm'>Project #3</a></li>\
				    <li aria-haspopup='false'><a href='Project4-F2017.htm'>Project #4</a></li>\
				    <li aria-haspopup='false'><a href='Project1Sample.htm'>Sample Project #1</a></li>\
				    <li aria-haspopup='false'><a href='Project2Sample.htm'>Sample Project #2</a></li>\
				    <li aria-haspopup='false'><a href='Project3Sample.htm'>Sample Project #3</a></li>\
				    <li aria-haspopup='false'><a href='Project4Sample.htm'>Sample Project #4</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/Videos.htm'>Lecture & Help Session Videos</a></li>\
				    <li aria-haspopup='false'><a href='ProjectHelpers.htm'>Project Helpers</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/GettingStartedProjects.htm'>Getting Started on C++ and C#</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/AdviceProjects.htm'>Advice</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BuildingProjects.htm'>Constructing</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/SubmittingProjects.htm'>Submissions</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/Upload.htm'>Uploading Projects</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/GradingPolicy.htm'>Grading Policy</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/BuildTools/VS2012Help.pdf'>Visual Studio 2012 Help</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/dd831853.aspx'>Visual Studio 2012 - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/kx37x362.aspx'>Visual C# - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='https://msdn.microsoft.com/en-us/library/gg145045(v=vs.110).aspx'>.Net Framework - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/60k1461a.aspx'>Visual C++ - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/cscc687y.aspx'>Std C++ Libraries - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/Presentations.htm'>Presentations</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/Code.htm#Top'>Code</a></li>\
				    <li aria-haspopup='false'><a href='https://sourcemaking.com/refactoring/bad-smells-in-code'>Code Smells</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/SummerProjects.htm'>Summer Projects</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/SummerReading.htm'>Summer Reading</a></li>\
			    </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Code Snaps &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='../Lectures/CodeSnap-HelloWorld.cs.htm'>HelloWorld.cs</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/CodeSnap-Inheritance.cs.htm'>Inheritance.cs</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/CodeSnap-Delegates.cs.htm'>Delegates</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/CodeSnap-LambdaCapture.cs.htm'>Lambdas</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/CodeSnap-List.cs.htm'>.Net Containers</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/CodeSnap-StartingThreads.cs.htm'>Threads</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/CodeSnap-BlockingQueue.cs.htm'>BlockingQueue.cs</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/CodeSnap-BasicHttpProgService.IService.cs.htm'>BasicHttpService</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
          </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Notes &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='../Lectures/CourseSynopsis.htm'>Course Summary</a></li>\
            <li aria-haspopup='false' style='font-size:80%; font-weight:bold;'>--- Basic Concepts ---</li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-WhatIsProgram.htm'>What is a Program?</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-SizeMatters.htm'>Size Matters</a></li>\
            <li aria-haspopup='false' style='font-size:80%; font-weight:bold;'>--- C# Language ---</li>\
            <li aria-haspopup='false'><a href='../Lectures/classes.htm'>Classes</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Inheritance.htm'>Inheritance</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/ThreeTierHierarchy.htm'>Three Tier Hierarchy</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/CompoundObjects.htm'>Compound Objects</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Generics.htm'>Generics</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Delegates.htm'>Delegates</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/lambdas.htm'>Lambdas</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-Inconsistencies.htm'>Inconsistencies</a></li>\
            <li aria-haspopup='false' style='font-size:80%; font-weight:bold;'>--- Design Concepts ---</li>\
            <li aria-haspopup='false'><a href='../Lectures/UML-Diagrams.htm'>UML Diagrams</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-Partitions.htm'>Partitions</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-SngRespPrin.htm'>Sngl Resp Prin</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-Sharing.htm'>Sharing</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-Robust.htm'>Robustness</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-Delegation.htm'>Delegation</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-Components.htm'>Components</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-LooselyCoupled.htm'>Loose Coupling</a></li>\
            <li aria-haspopup='false' style='font-size:80%; font-weight:bold;'>--- Software Systems ---</li>\
            <li aria-haspopup='false'><a href='../Lectures/MessagePassingComm.htm'>Message-Passing Comm</a></li>\
            <li aria-haspopup='false' style='font-size:80%; font-weight:bold;'>--- Implementation ---</li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-GettingStarted.htm'>Get Started in SMA</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-PkgStructMatters.htm'>Pkg Structure</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-TopDown.htm'>Top-Down</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-BottomUp.htm'>Bottoms-Up</a></li>\
            <li aria-haspopup='false'><a href='../Lectures/Note-IncDev.htm'>Increm Dev</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
          </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Study Guides &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='StudyGuideSMA.htm'>SMA Review</a></li>\
            <li aria-haspopup='false'><a href='StudyGuideOCD.htm'>OCD Help</a></li>\
            <li aria-haspopup='false'><a href='StudyGuideNotes.htm'>Arch Notes</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
          </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Directories &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='../../.'>Handouts</a>\
            <li aria-haspopup='false'><a href='../../Courses'>Courses</a></li>\
            <li aria-haspopup='false'><a href='../../CoreTechnologies'>CoreTech</a></li>\
            <li aria-haspopup='false'><a href='../../CSE681'>CSE681</a></li>\
            <li aria-haspopup='false'><a href='../../CSE681/Repository'>CSE681/Repository</a></li>\
            <li aria-haspopup='false'><a href='../../CSE681/Code'>CSE681/Code</a></li>\
            <li aria-haspopup='false'><a href='../../CSE681/Presentations'>CSE681/Presentations</a></li>\
            <li aria-haspopup='false'><a href='../../CSE681/Lectures'>CSE681/Lectures</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
          </ul>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/OfficeHours.htm'>Office Hours</a></li>\
		    <li aria-haspopup='true'>\
          <a href='#'>Blog &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../../webpages/Blog.htm'>First Things</a></li>\
				    <li aria-haspopup='false' style='font-size:80%; font-weight:bold'>--- Design ---</li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogDesign.htm'>SW Design</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogOOD.htm'>OO Design</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogObjectModels.htm'>Object Models</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogGlobals.htm'>Scopes and Global Data</a></li>\
				    <li aria-haspopup='false' style='font-size:80%; font-weight:bold''>--- Engineering Software ---</li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogOCD.htm'>Concept Document</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogTesting.htm'>Software Testing</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/SummerReading.htm'>Summer Reading</a></li>\
				    <li aria-haspopup='false' style='font-size:80%; font-weight:bold''>--- Software Systems ---</li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogStructure.htm'>Software Structure</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogMessagePassingComm.htm'>Msg-Passing Comm</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogActiveObjects.htm'>Active Objects</a></li>\
				    <li aria-haspopup='false' style='font-size:80%; font-weight:bold''>--- Reuseable Packages ---</li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogNoSql.htm'>noSQL Database</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogParser.htm'>Parsing</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogCodeAnalyzer.htm'>Code Analyzer</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogMTree.htm'>M-ary Trees</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogGraph.htm'>Directed Graphs</a></li>\
				    <li aria-haspopup='false'><a href='../../webpages/BlogFileSystem.htm'>C++ FileSystem</a></li>\
			    </ul>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/SiteMap.htm'>Site Map</a></li>\
      </ul>\
    </div>\
    <hr class='menuend' />"
  );
});