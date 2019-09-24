/* 
 * ScriptsStoryTeller_LocalStorage.js
 */

/* -------------------------------------------------------------
 *  StoryTeller data - pages array, numItems, current index
 * --------------------------------------------------------------
 *  pages is an array which holds page information for a story
 *  - Each element of the array is a JavaScript object with
 *    attributes:
 *    - url:
 *      Address of a page to load, taken from the src attribute
 *      of a story TOC link.
 *    - name:
 *      Value of the link, e.g., the text displayed by the link.
 *    - note:
 *      A string that is the innerHTML of a div just below the link.
 *      This will be used for pages notes which slide out on hover.
 *
 *  numItems is the number of links collected from the story TOC page,
 *  e.g., the number of pages in the story.
 *  
 *  Use of storyTeller object avoids clashes with other JavaScript library
 *  definitions.
 */

var storyTeller = new Object;
storyTeller.storyName = "";   // name displayed in footer
storyTeller.pages = [];       // array holding page objects
storyTeller.numItems = 0;     // number of story pages
storyTeller.curr = 1;         // current page index
storyTeller.src = null;       // iframe src url

/* --------------------------------------------------------------
 *  render(si) - si is story index
 * --------------------------------------------------------------
 *  Show story pages in iframe
 *  - si == -1 shows blank page
 *  - si ==  0 shows story list
 *  - si >=  1 shows first story page
 */
storyTeller.render = function (si) {
  storyTeller.curr = si;

  // get locations to show current page and number of pages
  let index = document.getElementById("pageIndex");
  index.innerHTML = si.toString();
  let count = document.getElementById("numItems");
  //count.innerHTML = numItems.toString();
  count.innerHTML = storyTeller.numItems.toString();

  // get location to show page address
  let pageField = document.getElementById('pageField');

  // get story teller iframe
  let slider = document.getElementById("slideShow");

  switch (si) {
    case -1:  // Refreshing story teller loads blank page
      slider.setAttribute("src", "blank.html");
      storyTeller.disableButtons();
      storyTeller.disableButton('retrieveBtn');
      storyTeller.disableButton('clrStorage');

      // I left this here to show how to use activeStyle(..)
      //-----------------------------------------------------
      //console.log('pageField.tagname = ' + pageField.tagName);
      //let styleObj = activeStyle(pageField);
      //let val = styleObj.getPropertyValue('display');
      //console.log('pageField.style.display = ' + val);

      if (isDefined(pageField))
        pageField.style.display = "none";
      break;

    case 0:  // load story list
      //removed redundant calls - already called in retrieve
      //storyTeller.clearPages();
      //storyTeller.clearLocalStorage();
      slider.setAttribute("src", "StoryList.html");
      storyTeller.disableButtons();
      storyTeller.enableButton('retrieveBtn');
      if (isDefined(pageField))
        pageField.style.display = "none";
      break;

    default: // render story pages
      if (si < -1 || storyTeller.numItems < si) {
        return;
      }
      //storyTeller.enableButton('clrStorage');  // button hidden, will probably remove

      // set iframe source to page indexed by si
      slider.setAttribute("src", storyTeller.pages[si - 1].url);
      // set note text for this page
      let noteElem = document.getElementById("pageNoteId");
      noteElem.innerHTML = storyTeller.pages[si - 1].note;

      // show page index and number of pages
      if (isDefined(pageField)) {
        pageField.style.display = "inline";
      }
      break;
  }
  // show page url in footer
  let addr = document.getElementById("pageAddress");
  if (addr && storyTeller.pages) {
    if (storyTeller.pages[si - 1])
      addr.innerHTML = storyTeller.pages[si - 1].url;
  }
  // force iframe to change location
  //document.getElementById("slideShow").src = document.getElementById("slideShow").src;
};
/* ------------------------------------------------------------
 *  Empty page information held in localStorage
 */
storyTeller.clearLocalStorage = function () {
  if (!isDefined(localStorage))
    return;
  localStorage.clear();
};
/* --------------------------------------------------------------
 *  Empty pages array
 */
storyTeller.clearPages = function () {
  if (storyTeller.pages && storyTeller.numItems) {
    storyTeller.pages.length = 0;
    storyTeller.numItems = 0;
  }
};
/* --------------------------------------------------------------
 *  retrieve(id)
 * --------------------------------------------------------------
 *  Retrieve story page information from local storage placed
 *  there by a story TOC page.
 *  - For each story page create JavaScript object from stored JSON
 *    and push into pages array.
 *  - Also display page data in placeholder div so we can see
 *    what was processed.
 */
storyTeller.retrieve = function (id) {

  storyTeller.clearPages();
  if ('numItems' in localStorage) {
    let numItemsStr = localStorage.getItem('numItems');
    storyTeller.numItems = parseInt(numItemsStr, 10);
  }
  else {
    alert('please select story');
    return;
  }

  storyTeller.enableButtons();
  storyTeller.disableButton('retrieveBtn');

  // push page objects into pages array
  for (var i = 0; i < storyTeller.numItems; ++i) {
    let key = "page-" + i.toString();
    let value = localStorage.getItem(key);
    var obj = JSON.parse(value);
    storyTeller.pages.push(obj);
  }
  // set number of pages in display field and show it
  let item = document.getElementById(id);
  item.innerHTML = storyTeller.numItems.toString();

  if (isDefined(pageField)) {
    pageField.style.display = "inline";
  }

  storyTeller.loadTOC();
  storyTeller.render(1);             // display first page
  storyTeller.clearLocalStorage();   // inserted 9/20/2019
};
/* --------------------------------------------------------------
 *  Render first page
 */
storyTeller.first = function () {
  storyTeller.curr = 1;
  storyTeller.render(storyTeller.curr);
};
/* --------------------------------------------------------------
 *  Render last page
 */
storyTeller.last = function () {
  storyTeller.curr = storyTeller.numItems;
  storyTeller.render(storyTeller.curr);
};
/* --------------------------------------------------------------
 *  Increment page count and render it
 */
storyTeller.next = function () {
  if (!isDefined(storyTeller.curr))
    storyTeller.curr = 1;
  else
    ++(storyTeller.curr);
  if (storyTeller.curr > storyTeller.numItems)  // wrap-around
    storyTeller.curr = 1;
  storyTeller.render(storyTeller.curr);
};
/* --------------------------------------------------------------
 *  Return to story after navigating away in displayed page
 */
storyTeller.returnToCurr = function () {
  storyTeller.render(storyTeller.curr);
};
/* --------------------------------------------------------------
 *  Render previous page
 */
storyTeller.prev = function () {
  --(storyTeller.curr);
  if (storyTeller.curr < 1)       // wrap-around
    storyTeller.curr = storyTeller.numItems;
  storyTeller.render(storyTeller.curr);
};
/* --------------------------------------------------------------
 *  Open page-note (specific to each page)
 */
storyTeller.openNote = function () {
  let tBtn = document.getElementById("toggleBtn");
  let note = document.getElementById("pageNoteContainer");
  let styleObj = activeStyle(note);
  let noteWidth = styleObj.getPropertyValue('width');
  if (noteWidth === '0' || noteWidth === '0px') {
    note.style.width = "600px";  // this makes note visible
    note.style.padding = "10px 15px 20px 15px";
    note.style.border = "2px solid saddlebrown";
    tBtn.innerHTML = "<del>&nbsp;?&nbsp;</del>";
  }
  else {
    note.style.width = "0px";
    note.style.padding = "0px";
    note.style.border = "none";
    tBtn.innerHTML = "?";
  }
};
/* --------------------------------------------------------------
 *  Close page-note by setting width to 0px
 */
storyTeller.closeNote = function () {
  let note = document.getElementById("pageNoteContainer");
  let tBtn = document.getElementById("toggleBtn");
  tBtn.innerHTML = '?';
  note.style.width = "0px";
  note.style.padding = "0px";
  note.style.border = "none";
};
/* ------------------------------------------------------------------
 *  Open help window
 */
storyTeller.openHelp = function () {
  window.open('StHelp.html', 'target=_blank', 'location=yes, width=1000, height=650, resizable');
};
/* ------------------------------------------------------------------
 *  Was this file loaded from file system instead of web server?
 */
storyTeller.isLocalFile = function () {
  return window.location.protocol === "file:";
};
/* ------------------------------------------------------------------
 *  isChrome
 * ------------------------------------------------------------------
 *  Chrome and FireFox have different behavior when using local storage
 *  with file: protocol (loaded from local file system) so we need to
 *  test.
 */
storyTeller.isChrome = function () {
  var isChromium = window.chrome;
  var winNav = window.navigator;
  var vendorName = winNav.vendor;
  var isOpera = typeof window.opr !== "undefined";
  var isIEedge = winNav.userAgent.indexOf("Edge") > -1;
  var isIOSChrome = winNav.userAgent.match("CriOS");

  if (isIOSChrome) {
    // is Google Chrome on IOS
    return true;
  } else if (
    isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  ) {
    // is Google Chrome
    return true;
  } else {
    // not Google Chrome
    return false;
  }
};

/* ------------------------------------------------------------------
 *  browsing with edge?
 */
storyTeller.isEdge = function () {
  if (/Edge/.test(navigator.userAgent))
    return true;
  return false;
};
/* --------------------------------------------------------------
 *  iframe onload event handler
 *  - Checks to see if loadStory should be called so user
 *    doesn't have to do that with a load button.
 *  - This is here because FireFox does not send localStorage
 *    change events when using file: protocol.
 */
storyTeller.srcChange = function () {

  let signal = localStorage.getItem('storySaved');
  if (!isDefined(signal)) {
    return;
  }

  let storyNamePlace = document.getElementById("storyNameId");
  if (isDefined(storyNamePlace)) {
    let name = localStorage.getItem('storySaved');
    if (isDefined(name)) {
      storyNamePlace.innerHTML = name + " : ";
      storyTeller.storyName = name;
    }
  }

  signal = localStorage.getItem('storySaved');
  if (isDefined(signal)) {
    storyTeller.loadStory();
    localStorage.removeItem('storySaved');
  }
};

/* --------------------------------------------------------------
 *  Loads story list by calling render(0)
 */
storyTeller.loadStoryList = function () {
  storyTeller.clearLocalStorage();
  storyTeller.closeNote();
  storyTeller.render(0);
};
/* --------------------------------------------------------------
 *  Loads story by calling retrieve to read story details
 *  from localStorage
 *  'numItems' is id of element that holds and displays page count
 */
storyTeller.loadStory = function () {
  let storyKey = localStorage.getItem('storySaved');
  if (!isDefined(storyKey)) {
    return;
  }
  storyTeller.closeNote();
  storyTeller.retrieve('numItems');
  localStorage.removeItem('storySaved');
};
/* --------------------------------------------------------------
 *  Loads Table of Contents by indexing through pages array
 *  and using pages[i].url and pages[i].name to build table of links
 */
storyTeller.loadTOC = function () {
  let itemList = document.getElementById('dropDownItems');
  removeChildren(itemList);

  // place label at top of TOC
  let topItem = document.createElement('div');
  topItem.setAttribute('style', 'background-color:saddlebrown; color:white; padding-left:5px;');
  topItem.innerHTML = 'Story Pages';
  itemList.appendChild(topItem);

  // create links and append to TOC
  for (i = 1; i <= storyTeller.numItems; ++i) {
    let item = document.createElement('a');
    item.setAttribute('href', '#');
    item.setAttribute('onclick', 'storyTeller.render(' + i.toString() + ')');
    item.innerHTML = i.toString() + '&nbsp;&nbsp;' + storyTeller.pages[i - 1].name;
    itemList.appendChild(item);
  }
  // leave blank line at end of TOC
  let item = document.createElement('a');
  item.setAttribute('href', '#');
  item.innerHTML = '&nbsp;';
  itemList.appendChild(item);
};
/* --------------------------------------------------------------
 *  Enable a single button
 */
storyTeller.enableButton = function (id) {
  let button = document.getElementById(id);
  if (button)
    button.disabled = false;
};
/* --------------------------------------------------------------
 *  Enable all of the page control buttons
 */
storyTeller.enableButtons = function () {
  storyTeller.enableButton('firstBtn');
  storyTeller.enableButton('lastBtn');
  storyTeller.enableButton('nextBtn');
  storyTeller.enableButton('currBtn');
  storyTeller.enableButton('prevBtn');
  storyTeller.enableButton('toggleBtn');
}
/* --------------------------------------------------------------
 *  Disable a single button
 */
storyTeller.disableButton = function (id) {
  let button = document.getElementById(id);
  if (button)
    button.disabled = true;
}
/* --------------------------------------------------------------
 *  Disable all of the page control buttons
 */
storyTeller.disableButtons = function () {
  storyTeller.disableButton('firstBtn');
  storyTeller.disableButton('lastBtn');
  storyTeller.disableButton('nextBtn');
  storyTeller.disableButton('currBtn');
  storyTeller.disableButton('prevBtn');
  storyTeller.disableButton('toggleBtn');
};
/* --------------------------------------------------------------
 *  Define key actions when StoryTeller has focus
 */
storyTeller.keyAction = function (keyEvent) {
  keystate = 'down';
  var key = String.fromCharCode(keyEvent.which);
  //if (key === 'R') {
  //  location.reload();
  //}
  if (key === 'C') {
    storyTeller.returnToCurr();
  }
  if (key === 'N') {
    storyTeller.next();
  }
  if (key === 'P') {
    storyTeller.prev();
  }
  if (key === 'E') {
    window.location = 'index.html';
  }
  if (key === 'H') {
    storyTeller.openHelp();
  }
  if (key === 'O') {
    storyTeller.openNote();
  }
  if (key === 'S') {
    toggleStSwipeEvents();
  }
};
/* --------------------------------------------------------------
 *  Add event listener for key events
 */
storyTeller.addKeys = function () {

  // listen for keyboard events:
  // - key actions are defined in ScriptsKeyboard.js
  document.addEventListener('keydown', (event) => { storyTeller.keyAction(event); }, false);
};
/* --------------------------------------------------------------
 *  Add key event listener and load the Story List
 *  - called by body.onLoad
 */
storyTeller.initialize = function () {
  storyTeller.addKeys();
  //console.log('adding storage event listener');
  storyTeller.render(0);
};

storyTellerSwipe = new Object;
storyTellerSwipe.xst0 = null;
//storyTellerSwipe.cont = document.getElementsByTagName('grid-container')[0];
//storyTellerSwipe.tBtn = document.getElementById('toggleBtn');

storyTellerSwipe.sTlock = function (e) {
  storyTellerSwipe.xst0 = unify(e).clientX;
};

storyTellerSwipe.i = 0;

storyTellerSwipe.sTmove = function (e) {
  if (storyTellerSwipe.xst0 || storyTellerSwipe.xst0 === 0) {
    let dx = storyTellerSwipe.unify(e).clientX - storyTellerSwipe.xst0, s = Math.sign(dx);
    if (dx > 50)
      storyTeller.prev();
    else if (dx < -50)
      storyTeller.next();
    storyTellerSwipe.xst0 = null;
  }
};

storyTellerSwipe.unify = function (e) {
  return e.changedTouches ? e.changedTouches[0] : e;
};

storyTellerSwipe.addStSwipeListeners = function () {
  localStorage.setItem('StSwipeEvents', 'true');
  let tBtn = document.getElementById('tBtn');
  tBtn.innerHTML = 'Swp'
  let cont = document.getElementsByTagName('grid-container')[0];
  cont.addEventListener('touchstart', storyTellerSwipe.sTlock, false);
  cont.addEventListener('mousedown', storyTellerSwipe.sTlock, false);
  cont.addEventListener('touchend', storyTellerSwipe.sTmove, false);
  cont.addEventListener('mouseup', storyTellerSwipe.sTmove, false);
};

storyTellerSwipe.removeStSwipeListeners = function () {
  localStorage.setItem('StSwipeEvents', 'false');
  let tBtn = document.getElementById('tBtn');
  tBtn.innerHTML = '<del>Swp</del>'
  let cont = document.getElementsByTagName('grid-container')[0];
  cont.removeEventListener('touchstart', storyTellerSwipe.sTlock, false);
  cont.removeEventListener('mousedown', storyTellerSwipe.sTlock, false);
  cont.removeEventListener('touchend', storyTellerSwipe.sTmove, false);
  cont.removeEventListener('mouseup', storyTellerSwipe.sTmove, false);
};

storyTellerSwipe.toggleStSwipeEvents = function () {
  let StSwipeState = storyTellerSwipe.getStSwipeEvents();
  if (StSwipeState === 'true' || !isDefined(StSwipeState)) {
    storyTellerSwipe.removeStSwipeListeners();
  }
  else {
    storyTellerSwipe.addStSwipeListeners();
  }
};

storyTellerSwipe.getStSwipeEvents = function () {
  if (!isDefined(localStorage))
    return false;
  let StSwipeEvents = localStorage.getItem('StSwipeEvents');
  return StSwipeEvents;
};

storyTellerSwipe.StInitialize = function () {
  let tBtn = document.getElementById('tBtn');
  if (storyTellerSwipe.getStSwipeEvents() === 'true') {
    storyTellerSwipe.addStSwipeListeners();
    tBtn.innerHTML = 'Swp';
  }
  else {
    tBtn.innerHTML = '<del>Swp</del>';
  }
};
