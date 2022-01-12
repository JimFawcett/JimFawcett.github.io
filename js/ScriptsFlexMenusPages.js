function initializePages() {

  // create top menu

  var pagesMenu = document.getElementById("pages");
  //alert("pages");
  if (isDefined(pagesMenu)) {
    //alert("found element");
    pagesMenu.innerHTML = "<div class='pages'>\
      <div class='menuItems'>\
        <div class='dropdowns'>\
          <div style='height:0.25em;'></div>\
          <div class='ddItem'><a href='TestFlexMenu.html'>TestFlexMenu</a></div>\
          <div class='ddItem'><a href='TestSiblingFlexMenu.html'>TestSiblingFlexMenu</a></div>\
        </div >\
      </div >\
    </div > ";
  }
//  var flexMenu = new Object();

//  flexMenu.prev = function () {
//    var prv = document.getElementById("Prev");
//    prv.click();
//    // if(isDefined(prv)) {
//    //   prv.click();
//    // }
//  }

//  flexMenu.next = function () {
//    var nxt = document.getElementById("Next");
//    nxt.click();
//    // if(isDefined(nxt)) {
//    //   nxt.click();
//    // }
//  }

//  flexMenu.pages = function () {
//    alert("in pages");
//    var menu = document.getElementById("pages");
//    if (isDefined(menu)) {
//      if (menu.style.display !== "block")
//        menu.style.display = "block";
//      else
//        menu.style.display = "none";
//    }
//  };

//  flexMenu.sects = function () {
//    var menu = document.getElementById("sections");
//    if (isDefined(menu)) {
//      if (menu.style.display !== "block")
//       menu.style.display = "block";
//      else
//        menu.style.display = "none";
//    }
//  }
}
