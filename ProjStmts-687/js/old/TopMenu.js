/****************************************************************************
   TopMenu.js - Top level navigation code for website
   ver 1.0
   This javascript file is a single source of navigation code on all
   top-level pages for www.lcs3.syr.edu/faculty/fawctt

   Jim Fawcett, Syracuse University, 08 Aug 2013
 ****************************************************************************/

$(document).ready(function () {
  $("#nav").html(
    "<hr class='menubegin' />\
     <div id='menu'>\
	    <ul>\
		    <li><a href='fawcettHome.htm'>Home</a></li>\
		    <li aria-haspopup='true'><a href='#'>Courses &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='Courses.htm'>Courses</a></li>\
				    <li aria-haspopup='false'><a href='CSE681.htm'>CSE681-SMA</a></li>\
				    <li aria-haspopup='false'><a href='CSE686.htm'>CSE686-IP</a></li>\
				    <li aria-haspopup='false'><a href='CSE687.htm'>CSE687-OOD</a></li>\
				    <li aria-haspopup='false'><a href='CSE775.htm'>CSE775-DO</a></li>\
				    <li aria-haspopup='false'><a href='CSE776.htm'>CSE776-DP</a></li>\
				    <li aria-haspopup='false'><a href='CSE784.htm'>CSE784-SS</a></li>\
				    <li aria-haspopup='false'><a href='../ShortCourse/SummerCourse.htm'>Short Course</a></li>\
				    <li aria-haspopup='false'><a href='Code.htm'>Sample Code</a></li>\
				    <li aria-haspopup='false'><a href='Presentations.htm'>Presentations</a></li>\
				    <li aria-haspopup='false'><a href='OfficeHours.htm'>Office Hours</a></li>\
				    <li aria-haspopup='false'><a href='Courses.htm'>Program Plan</a></li>\
				    <li aria-haspopup='false'><a href='SoftwareTrack.htm'>SW Track</a></li>\
				    <li aria-haspopup='false'><a href='Notices.htm'>Notices</a></li>\
				    <li aria-haspopup='false'><a href='StudentProjects.htm'>Student Projects</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true'><a href='#'>Core Tech &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='CoreTechnologies.htm'>Core Technologies</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/Cpp.htm'>C++</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/Cpp.htm'>C++/CLI</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/CSharp.htm'>C#, .Net</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/Sockets.htm'>Network Prog</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/ThreadsAndSynch.htm'>Threads</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/Win32SystemProgramming.htm'>Win32 Sys</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/WindowsProgramming.htm'>Win GUI</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/XML.htm'>XML</a></li>\
				    <li aria-haspopup='false'><a href='Mathematics.htm'>Math</a></li>\
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
		    <li><a href='../ShortCourse/SummerCourse.htm'>Short Course</a></li>\
		    <li aria-haspopup='true'><a href='#'>Research &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='Research.htm'>Research</a></li>\
				    <li aria-haspopup='false'><a href='ResearchStatement.htm'>Research Statment</a></li>\
				    <li aria-haspopup='false'><a href='ResearchCode.htm'>Research Code</a></li>\
				    <li aria-haspopup='false'><a href='SWMatrixCrossPlatformDev.htm'>V.Appaduri</a></li>\
				    <li aria-haspopup='false'><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/research/bolazar/main/index.html'>K.Bolazar</a></li>\
				    <li aria-haspopup='false'><a href='SoftwareMatrix.htm'>R.Ghosh</a></li>\
				    <li aria-haspopup='false'><a href='VoiceActivatedRecording.htm'>J.Goddard</a></li>\
				    <li aria-haspopup='false'><a href='http://www.lcs3.syr.edu/faculty/fawcett/handouts/research/MuratsResearch/MuratsDefense/StructuralModelsForLargeSoftwareSystems.htm'>M.Gungor</a></li>\
				    <li aria-haspopup='false'><a href='KayaDefense.htm'>M.Kaya</a></li>\
				    <li aria-haspopup='false'><a href='AspectOrientedProgramming.htm'>R.Krishnan-Chittur</a></li>\
				    <li aria-haspopup='false'><a href='SelfHealingSoftwareMatrix.htm'>A.Krishna</a></li>\
				    <li aria-haspopup='false'><a href='Test2.html'>M.Mohammed</a></li>\
				    <li aria-haspopup='false'><a href='SWMatrixModelDrivenDev.htm'>T.Patel</a></li>\
				    <li aria-haspopup='false'><a href='ComputingWithGPUs.htm'>P.Pratt-Szeliga</a></li>\
				    <li aria-haspopup='false'><a href='SoftwareRestructuring.htm'>S.Singh</a></li>\
				    <li aria-haspopup='false'><a href='EnhancedDebuggingThruVirtualization.htm'>R.Wilson</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>EECS &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='GradOrientation.htm'>Orientation</a></li>\
				    <li aria-haspopup='false'><a href='StudentPictures.htm'>Student Pictures</a></li>\
				    <li aria-haspopup='false'><a href='StudentCultures.htm'>Student Cultures</a></li>\
				    <li aria-haspopup='false'><a href='Graduates.htm'>Graduates</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Resources &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='SiteMap.htm'>Site Map</a></li>\
				    <li aria-haspopup='false'><a href='TechnicalLinks.htm'>Tech Links</a></li>\
				    <li aria-haspopup='false'><a href='http://www.syr.edu/registrar/forms'>University Forms</a></li>\
				    <li aria-haspopup='false'><a href='http://eng-cs.syr.edu/our-departments/electrical-engineering-and-computer-science/department-resources/'>Department Forms</a></li>\
				    <li aria-haspopup='false'><a href='Interviews.htm'>Interviews</a></li>\
				    <li aria-haspopup='false'><a href='CPT.htm'>Internships and CPTs</a></li>\
				    <li aria-haspopup='false'><a href='OPT.htm'>Unfunded OPTs</a></li>\
				    <li aria-haspopup='false'><a href='Books.htm'>Books</a></li>\
				    <li aria-haspopup='false'><a href='Articles.htm'>Articles</a></li>\
				    <li aria-haspopup='false'><a href='Mathematics.htm'>Math</a></li>\
				    <li aria-haspopup='false'><a href='BrownBagSeminar.htm'>Seminars</a></li>\
				    <li aria-haspopup='false'><a href='SWDev.htm'>SW Development</a></li>\
            <li aria-haspopup='false'><a href='WebDev.htm'>Web Development</a></li>\
				    <li aria-haspopup='false'><a href='SiteDesign.htm'>Site Design</a></li>\
				    <li aria-haspopup='false'><a href='TestPage.htm'>Test HTML5</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Projects &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='GettingStartedProjects.htm'>Getting Started</a></li>\
				    <li aria-haspopup='false'><a href='AdviceProjects.htm'>Advice</a></li>\
				    <li aria-haspopup='false'><a href='BuildingProjects.htm'>Constructing</a></li>\
				    <li aria-haspopup='false'><a href='SubmittingProjects.htm'>Submissions</a></li>\
				    <li aria-haspopup='false'><a href='Upload.htm'>Upload Projects</a></li>\
				    <li aria-haspopup='false'><a href='GradingPolicy.htm'>Grading Policy</a></li>\
				    <li aria-haspopup='false'><a href='HelpSessions.htm'>Help Sessions</a></li>\
				    <li aria-haspopup='false'><a href='../CoreTechnologies/BuildTools/VS2012Help.pdf'>Visual Studio 2012 Help</a></li>\
				    <li aria-haspopup='false'><a href='dreamspark.htm'>Get Visual Studio &amp; Visio</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/dd831853.aspx'>Visual Studio 2015 - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/kx37x362.aspx'>Visual C# - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='https://msdn.microsoft.com/en-us/library/gg145045(v=vs.110).aspx'>.Net Framework - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/60k1461a.aspx'>Visual C++ - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='http://msdn.microsoft.com/en-us/library/cscc687y.aspx'>Std C++ Libraries - MSDN</a></li>\
				    <li aria-haspopup='false'><a href='Code.htm'>Code</a></li>\
				    <li aria-haspopup='false'><a href='Presentations.htm'>Presentations</a></li>\
				    <li aria-haspopup='false'><a href='http://sourcemaking.com/refactoring/bad-smells-in-code'>Code Smells</a></li>\
				    <li aria-haspopup='false'><a href='SummerProjects.htm'>Summer Projects</a></li>\
				    <li aria-haspopup='false'><a href='SummerReading.htm'>Summer Reading</a></li>\
				    <li aria-haspopup='false'><a href='StudentProjects.htm'>Student Projects</a></li>\
			    </ul>\
		    </li>\
		    <li aria-haspopup='true' class='left'><a href='#'>Blog &#9662;</a>\
			    <ul>\
				    <li aria-haspopup='false'><a href='Blog.htm'>First Things</a></li>\
				    <li aria-haspopup='false'><a href='BlogDesign.htm'>SW Design</a></li>\
				    <li aria-haspopup='false'><a href='BlogOOD.htm'>OO Design</a></li>\
				    <li aria-haspopup='false'><a href='BlogObjectModels.htm'>Object Models</a></li>\
				    <li aria-haspopup='false'><a href='BlogOCD.htm'>Concept Document</a></li>\
				    <li aria-haspopup='false'><a href='BlogNoSql.htm'>noSQL Database</a></li>\
				    <li aria-haspopup='false'><a href='BlogParser.htm'>Parsing</a></li>\
				    <li aria-haspopup='false'><a href='BlogMTree.htm'>M-ary Trees</a></li>\
				    <li aria-haspopup='false'><a href='BlogGraph.htm'>Directed Graphs</a></li>\
				    <li aria-haspopup='false'><a href='BlogFileSystem.htm'>C++ FileSystem</a></li>\
				    <li aria-haspopup='false'><a href='BlogMsgPass.htm'>Msg-Passing Comm</a></li>\
				    <li aria-haspopup='false'><a href='BlogGlobals.htm'>Global Data</a></li>\
				    <li aria-haspopup='false'><a href='SummerReading.htm'>Summer Reading</a></li>\
			    </ul>\
		    </li>\
		    <li class='left' aria-haspopup='false'><a href='SiteMap.htm'>Site Map</a></li>\
	    </ul>\
    </div>\
    <hr class='menuend' />"
  );
});