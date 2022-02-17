/* 
 * ScriptsPageFramePages2.js
 * initialize pages script with enough pages to overflow page container 
 */

function initializePages() {

  var pagesMenu = document.getElementById("pages");
  var pgbtn = document.getElementById("pgbtn");
  if (isDefined(pagesMenu)) {
    pgbtn.style.display = "flex";
    pagesMenu.innerHTML = "<div style='height:0.5em;'>&nbsp;</div>\
          <div class='ddItem'><a href='PageFrame1.html'>PageFrame1</a></div>\
          <div class='ddItem'><a href='PageFrame2.html'>PageFrame2&nbsp;</a></div>\
          <div class='ddItem'><a href='PageFrame3.html'>PageFrame3</a></div>\
          <div class='ddItem'><a href='PageFrame4.html'>PageFrame4</a></div>\
          <div class='ddItem'><a href='PageFrameTest.html'>PageFrameTest</a>&nbsp;&nbsp;&nbsp;</div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #4</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #5</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #6</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #7</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #8</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #9</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #10</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #11</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #12</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #13</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #14</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #15</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #16</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #17</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #18</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #19</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #20</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #21</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #22</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #23</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #24</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #25</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #26</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #27</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #28</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #29</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #30</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #31</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #32</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #33</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #34</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #35</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #36</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #37</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #38</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #39</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #40</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #41</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #42</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #43</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #44</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #45</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #46</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #47</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #48</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #49</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #50</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #51</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #52</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #53</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #54</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #55</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #56</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #57</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #58</a></div>\
          <div class='undef ddItem'><a href='javascript:;'>Page #59</a></div>\
          <div>&nbsp;</div>\
          <div>&nbsp;</div>\
          <div>&nbsp;</div>";
  }
  else {
    var pgbtn = document.getElementById("pgbtn");
    pgbtn.style.display = "none";
  }
}
