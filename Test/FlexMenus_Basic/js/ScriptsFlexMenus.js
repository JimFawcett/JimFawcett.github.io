/*---------------------------------------------------------------
*   Note: 
*     This file will work from any directory because
*     all links point to the github site:
*
*       JimFawcett.github.io
*/
function initializeMenu() {

    // create top menu
  
    var topMenu = document.getElementsByTagName("nav");
    topMenu[0].innerHTML = "<div class='navbar'>\
    <div class='menuItem'><a href='https://jimfawcett.github.io/'>Home</a></div>\
    <div class='menuItem'><a href='https://jimfawcett.github.io/SiteMap.html'>SiteMap</a></div>\
    <div class='menuItem'>\
        Tracks&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Code Tracks</div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/indexBasic.html'>Basics</a></div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/indexCpp.html'>C++ Track</a></div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/indexRust.html'>Rust Track</a></div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/indexCs.html'>C# Track</a></div>\
            <div style='height:1em;'></div>\
        </div>\
    </div>\
    <div class='menuItem'>\
        Repos&#9662\
        <div class='dropdown'>\
            <div class='ddLabel darkItem'>Repositories</div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/CppRepositories.html'>C++</a></div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/RsRepositories.html'>Rust</a></div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/CsRepositories.html'>C#</a></div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/JsRepositories.html'>JavaScript</a></div>\
            <div class='ddItem'><a href='https://jimfawcett.github.io/OtherRepositories.html'>Other</a></div>\
            <div style='height:1em;'></div>\
        </div>\
    </div>\
    <div class='menuItem nextprev'>\
        <a id='prevLink' href='#'>Prev</a>\
    </div>\
    <div class='menuItem nextprev'>\
        <a id='nextLink' href='#'>Next</a>\
    </div>\
    <button class='menuItem menuScroll' onclick='scrollMenuLeft()'>&lt;</button>\
    <button class='menuItem menuUnscroll' onclick='scrollMenuRight()'>&gt;</button>\
    </div>\
  </div >\
  <div style='clear:all;'></div>";
}
//----< hide, progressively, menu items on the left >----------------
/*
*  This let's user see menu items that overflow on the right
*  due to page size.
*/
function scrollMenuLeft() {
    var items = document.getElementsByClassName("menuItem");
    var i;
    for (i = 0; i < items.length; ++i) {
      var cpprp = window.getComputedStyle(items[i], null).getPropertyValue("display");
      if (cpprp !== "none") {
        items[i].style.display = "none";
        break;
      }
    }
  }
  //----< restore, progressively, menu items on the left >-------------
  /*
  *  This let's user restore menu items hidden by the previous
  *  function.
  */
  function scrollMenuRight() {
    var items = document.getElementsByClassName("menuItem");
    var len = items.length;
    var i;
    for (i = 0; i < items.length; ++i) {
      var cpprp = window.getComputedStyle(items[len - i - 1], null).getPropertyValue("display");
      if (cpprp !== "flex") {
        items[len-i-1].style.display = "flex";
        break;
      }
    }
  }
  