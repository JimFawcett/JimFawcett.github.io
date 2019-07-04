/************************************************************************* 
 * CSE681-LectNav.js - Lecture page navigation code for SMA
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
            <li aria-haspopup='false'><a href='cse681codeL7.htm'>L7: Pr2</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL8.htm'>L8: XML</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL9.htm'>L9: WinProg</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL10.htm'>L10: WPF</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL11.htm'>L11: WPF</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL12.htm'>L12: Projs</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL13.htm'>L13: Struct</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL14.htm'>L14: WCF</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL15.htm'>L15: WCF</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL16.htm'>L16: Thrds</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL17.htm'>L17: Thrds</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL18.htm'>L18: Asynch</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL19.htm'>L19: MT Rev</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL20.htm'>L20: MidTrm</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL21.htm'>L21: CLR</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL22.htm'>L22: TstHrn</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL23.htm'>L23: Sokts</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL24.htm'>L24: MT Rslts</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL25.htm'>L25: Fnl Prj</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL26.htm'>L26: Qing</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL27.htm'>L27: Entrpr</a></li>\
            <li aria-haspopup='false'><a href='cse681codeL28.htm'>L28: FP Hlp</a></li>\
            <li aria-haspopup='false'><a href='#'></a>&nbsp;</li>\
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
        <li aria-haspopup='true'><a href='#'>Notes &#9662</a>\
          <ul class='active'>\
            <li aria-haspopup='false'><a href='CSE681Note0b.htm'>What is a Program?</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note0.htm'>Get Started in SMA</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note1.htm'>Size Matters</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note2b.htm'>Sngl Resp Prin</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note2.htm'>Pkg Structure</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note3b.htm'>Inconsistencies</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note3.htm'>Sharing</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note4.htm'>Robustness</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note5.htm'>Top-Down</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note6.htm'>Bottoms-Up</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note6b.htm'>Increm Dev</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note7.htm'>Partitions</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note8.htm'>Delegation</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note9.htm'>Asynch Msgs</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note10.htm'>Components</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note11.htm'>Loose Coupl</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note12.htm'>UI - ASP</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note13.htm'>UI - Asp.Net</a></li>\
            <li aria-haspopup='false'><a href='CSE681Note14.htm'>UI - Ajax</a></li>\
            <li aria-haspopup='false'><a href='#'></a></li>\
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
				    <li aria-haspopup='false'><a href='CSE681HelpVideos.htm'>Help Session Videos</a></li>\
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
		    <li aria-haspopup='true' class='left'>\
          <a href='#'>Blog &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='../../Webpages/Blog.htm'>First Things</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogDesign.htm'>SW Design</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogOOD.htm'>OO Design</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogObjectModels.htm'>Object Models</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogOCD.htm'>Concept Document</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogStructure.htm'>Software Structure</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogTesting.htm'>Software Testing</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogGlobals.htm'>Global Data</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogNoSql.htm'>noSQL Database</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogParser.htm'>Parsing</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogMTree.htm'>M-ary Trees</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogGraph.htm'>Directed Graphs</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogFileSystem.htm'>C++ FileSystem</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/BlogMsgPass.htm'>Msg-Passing Comm</a></li>\
				    <li aria-haspopup='false'><a href='../../Webpages/SummerReading.htm'>Summer Reading</a></li>\
			    </ul>\
        </li>\
        <li aria-haspopup='false'><a href='../../webpages/SiteMap.htm'>Site Map</a></li>\
      </ul>\
    </div>\
    <hr class='menuend' />"
  );
});
