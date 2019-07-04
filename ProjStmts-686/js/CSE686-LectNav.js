/************************************************************************* 
 * CSE686-LectNav.js - Lecture page navigation code for SMA
 * ver 1.1 - 15 Aug 2011
 * Jim Fawcett, Syracuse University
 *************************************************************************/

$(document).ready(function() {
  $("nav").html(
    "<hr class='menubegin' />\
    <div id='menu'>\
      <ul>\
        <li aria-haspopup='false'><a href='../../Webpages/FawcettHome.htm'>Home</a>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/cse686.htm'>Course</a></li>\
        <li aria-haspopup='false'><a href='../../webpages/cse686.htm#syllabus'>Syllabus</a></li>\
        <li aria-haspopup='true'><a href='#'>Lectures &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='cse686codeL1.htm'>L1: Intro</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL2.htm'>L2: Classic</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL3.htm'>L3: Scripts</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL4.htm'>L4: Asp.Net</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL5.htm'>L5: MVC1</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL6.htm'>L6: MVC2</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL7.htm'>L7: LINQ</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL8.htm'>L8: RelData</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL9.htm'>L9: WebSrv</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL10.htm'>L10: Clnts</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL11.htm'>L11: WPF</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL12.htm'>L12: State</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL13.htm'>L13: ADO</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL14.htm'>L14: FnlPrj</a></li>\
            <li aria-haspopup='false'><a href='cse686codeL15.htm'>L15: FnlPrj</a></li>\
            <li aria-haspopup='false'><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Labs &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='../assignments/assignment1.htm'>L1: Home</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment2.htm'>L2: Nav</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment3.htm'>L3: Asp.Net</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment4.htm'>L4: Design</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment5.htm'>L5: MVC</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment6.htm'>L6: Site</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment7.htm'>L7: SQL</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment8.htm'>L8: Data</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment9.htm'>L9: WSer</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment10.htm'>L10: Clnts</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment11.htm'>L11: WPF</a></li>\
            <li aria-haspopup='false'><a href='../assignments/assignment12.htm'>L12: State</a></li>\
            <li aria-haspopup='false'><a href='#'></a>&nbsp;</li>\
          </ul>\
        </li>\
        <li aria-haspopup='true'><a href='#'>Directories &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='../../.'>Handouts</a>\
            <li aria-haspopup='false'><a href='../../CoreTechnologies'>CoreTech</a></li>\
            <li aria-haspopup='false'><a href='../../CSE681'>CSE681</a></li>\
            <li aria-haspopup='false'><a href='../../CSE686'>CSE686</a></li>\
            <li aria-haspopup='false'><a href='../../CSE687'>CSE687</a></li>\
            <li aria-haspopup='false'><a href='../../CSE775'>CSE775</a></li>\
            <li aria-haspopup='false'><a href='../../CSE776'>CSE776</a></li>\
            <li aria-haspopup='false'><a href='../../CSE784'>CSE784</a></li>\
            <li aria-haspopup='false'><a href='../../SummerProjects'>Summer Proj</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
          </ul>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/TechnicalLinks.htm'>Tech Links</a></li>\
        <li aria-haspopup='false'><a href='../../webpages/OfficeHours.htm'>Office Hours</a></li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Projects &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../../WebPages/GettingStartedProjects.htm'>Getting Started</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/AdviceProjects.htm'>Advice</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/BuildingProjects.htm'>Constructing</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/SubmittingProjects.htm'>Submissions</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/Upload.htm'>Uploading Projects</a></li>\
				    <li aria-haspopup='false'><a href='../../WebPages/GradingPolicy.htm'>Grading Policy</a></li>\
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
		    <li aria-haspopup='true' class='left'><a href='#'>Blog &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../../Webpages/Blog.htm'>First Things</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogDesign.htm'>SW Design</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogOOD.htm'>OO Design</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogObjectModels.htm'>Object Models</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogOCD.htm'>Concept Document</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogNoSql.htm'>noSQL Database</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogParser.htm'>Parsing</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogMTree.htm'>M-ary Trees</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogGraph.htm'>Directed Graphs</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogFileSystem.htm'>C++ FileSystem</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogMsgPass.htm'>Msg-Passing Comm</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogGlobals.htm'>Global Data</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/SummerReading.htm'>Summer Reading</a></li>\
			    </ul>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/SiteMap.htm'>Site Map</a></li>\
      </ul>\
    </div>\
    <hr class='menuend' />"
  );
});
