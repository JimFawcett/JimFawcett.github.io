function initializePages() {

  // create top menu

  var pagesMenu = document.getElementById("pages");
  //alert("pages");
  if (isDefined(pagesMenu)) {
    //alert("found element");
    pagesMenu.innerHTML = "<div class='pages'>\
      <div class='menuItem'>\
        <div class='dropdowns'>\
          <div style='height:0.25em;'></div>\
          <div class='ddItem'><a href='TestFlexMenu.html'>TestFlexMenu</a></div>\
          <div class='ddItem'><a href='TestSiblingFlexMenu.html'>TestSiblingFlexMenu</a></div>\
        </div >\
      </div >\
    </div > ";
  }
}
