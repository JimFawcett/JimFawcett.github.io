/* ScriptsStoryTeller.js
 */

/* -------------------------------------------------------------
 *  Global data - pages array, numItems, current index
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
 */
var storyName = "";        // name displayed in footer
//var storyLoaded = 'false'; // don't load more than once
var pages = [];            // array to hold page objects
var numItems = 0;          // number of story pages
var curr = 1;              // current page index
var src = null;            // holds iframe src url
var prevSrc = null;        // used to detect no change in src on page load
                           // needed to avoid user needing to explicitly load
                           // story after selecting story link in story list

/* --------------------------------------------------------------
 *  render(si) - si is story index
 * --------------------------------------------------------------
 *  Show story pages in iframe
 *  - si == -1 shows blank page
 *  - si ==  0 shows story list
 *  - si >=  1 shows first story page
 */
function render(si) {
  curr = si;
  console.log('entering render:\ncurr = ', curr);

  // get locations to show current page and number of pages
  let index = document.getElementById("pageIndex");
  index.innerHTML = si.toString();
  let count = document.getElementById("numItems");
  count.innerHTML = numItems.toString();

  // get location to show page address
  let pageField = document.getElementById('pageField');

  // get story teller iframe
  let slider = document.getElementById("slideShow");

  switch (si) {
    case -1:  // Refreshing story teller loads blank page
      slider.setAttribute("src", "blank.html");
      disableButtons();
      disableButton('retrieveBtn');
      disableButton('clrStorage');

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
      clearPages();
      clearLocalStorage();
      slider.setAttribute("src", "StoryList.html");
      disableButtons();
      enableButton('retrieveBtn');
      //curr = 1;
      if (isDefined(pageField))
        pageField.style.display = "none";
      break;

    default: // render story pages
      if (si < -1 || numItems < si) {
        console.log('leaving render: bad si:\ncurr = ', curr);
        return;
      }
      //enableButton('clrStorage');  // button hidden, will probably remove

      // set iframe source to page indexed by si
      slider.setAttribute("src", pages[si - 1].url);
      // set note text for this page
      let noteElem = document.getElementById("pageNoteId");
      noteElem.innerHTML = pages[si - 1].note;

      // show page index and number of pages
      if (isDefined(pageField)) {
        pageField.style.display = "inline";
      }
      break;
  }
  // show page url in footer
  let addr = document.getElementById("pageAddress");
  if (addr && pages) {
    if (pages[si - 1])
      addr.innerHTML = pages[si - 1].url;
  }
  // force iframe to change location
  //document.getElementById("slideShow").src = document.getElementById("slideShow").src;

  console.log('leaving render(curr):\ncurr = ', curr);
}
/* ------------------------------------------------------------
 *  Empty page information held in localStorage
 */
function clearLocalStorage() {
  console.log('clearing localStorage');
  if (!isDefined(localStorage))
    return;
  localStorage.clear();
}
/* --------------------------------------------------------------
 *  Empty pages array
 */
function clearPages() {
  if (pages && numItems) {
    pages.length = 0;
    numItems = 0;
  }
}
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
function retrieve(id) {
  console.log('entering retrieve(id):\ncurr = ', curr);

  clearPages();
  if ('numItems' in localStorage) {
    let numItemsStr = localStorage.getItem('numItems');
    numItems = parseInt(numItemsStr, 10);
  }
  else {
    alert('please select story');

    console.log('leaving retrieve(id) - no data in localStorage:\ncurr = ', curr);
    return;
  }

  enableButtons();
  disableButton('retrieveBtn');
  console.log('loading ' + numItems + ' items into pages');

  // push page objects into pages array
  for (var i = 0; i < numItems; ++i) {
    let key = "page-" + i.toString();
    let value = localStorage.getItem(key);
    var obj = JSON.parse(value);
    pages.push(obj);
  }
  // set number of pages in display field and show it
  let item = document.getElementById(id);
  item.innerHTML = numItems.toString();

  //console.log('pageField.tagname = ' + pageField.tagName);
  if (isDefined(pageField)) {
    pageField.style.display = "inline";
  }

  loadTOC();
  //console.log('retrieve(id) calling render(1):\ncurr = ', curr);
  render(1);  // display first page
  //clearLocalStorage();
  //console.log('leaving retrieve(id):\ncurr = ', curr);
}
/* --------------------------------------------------------------
 *  Render first page
 */
function first() {
  curr = 1;

  //console.log('first() calling render(curr):\ncurr = ', curr);
  render(curr);
}
/* --------------------------------------------------------------
 *  Render last page
 */
function last() {
  curr = numItems;

  //console.log('last() calling render(curr):\ncurr = ', curr);
  render(curr);
}
/* --------------------------------------------------------------
 *  Increment page count and render it
 */
function next() {
  if (!isDefined(curr))
    curr = 1;
  else
    ++curr;
  if (curr > numItems)  // wrap-around
    curr = 1;

  //console.log('next() calling render(curr):\ncurr = ', curr);
  render(curr);
}
/* --------------------------------------------------------------
 *  Return to story after navigating away in displayed page
 */
function returnToCurr() {

  //console.log('returnToCurr() calling render(curr):\ncurr = ', curr);
  render(curr);
}
/* --------------------------------------------------------------
 *  Render previous page
 */
function prev() {
  --curr;
  if (curr < 1)       // wrap-around
    curr = numItems;

  //console.log('prev() calling render(curr):\ncurr = ', curr);
  render(curr);
}
/* --------------------------------------------------------------
 *  Open page-note (specific to each page)
 */
function openNote() {
  let tBtn = document.getElementById("toggleBtn");
  let note = document.getElementById("pageNoteContainer");
  let styleObj = activeStyle(note);
  let noteWidth = styleObj.getPropertyValue('width');
  if (noteWidth === '0' || noteWidth === '0px') {
    note.style.width = "600px";  // this makes note visible
    note.style.padding = "10px 15px 20px 15px";
    note.style.border = "2px solid saddlebrown";
    tBtn.innerHTML = "<del>&nbsp;?&nbsp;</del>";
    //if(isEdge())
    //  note.style.display = "block";
  }
  else {
    note.style.width = "0px";
    note.style.padding = "0px";
    note.style.border = "none";
    //if(isEdge())
    //  note.style.display = "none";
    tBtn.innerHTML = "?";
  }
}
/* --------------------------------------------------------------
 *  Close page-note by setting width to 0px
 */
function closeNote() {
  let note = document.getElementById("pageNoteContainer");
  let tBtn = document.getElementById("toggleBtn");
  tBtn.innerHTML = '?';
  note.style.width = "0px";
  note.style.padding = "0px";
  note.style.border = "none";
  //if(isEdge())
  //  note.style.display = "none";
}
/* --------------------------------------------------------------
 *  Open help window
 */
function openHelp() {
  window.open('StHelp.html', 'target=_blank', 'location=yes, width=1000, height=650, resizable');
}
/*
 *  Was this file loaded from file system instead of web server?
 */
function isLocalFile() {
  return window.location.protocol === "file:";
}
/* ------------------------------------------------------------------
 *  isChrome
 * ------------------------------------------------------------------
 *  Chrome and FireFox have different behavior when using local storage
 *  with file: protocol (loaded from local file system) so we need to
 *  test.
 */
function isChrome() {
  //if (isEdge())
  //  return false;
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
}

function isEdge() {
  if (/Edge/.test(navigator.userAgent))
    return true;
  return false;
  //var uA = window.navigator.userAgent,
  //  isIE = /msie\s|trident\/|edge\//i.test(uA) && !!(document.uniqueID || document.documentMode || window.ActiveXObject || window.MSInputMethodContext),
  //  checkVersion = (isIE && +(/(edge\/|rv:|msie\s)([\d.]+)/i.exec(uA)[2])) || NaN;
  //if (checkVersion)
  //  return true;
  //return false;
  //if (document.documentMode || /Edge/.test(navigator.userAgent))
  //  return true;
  //return false;
}
/* --------------------------------------------------------------
 *  iframe onload event handler
 *  - Checks to see if loadStory should be called so user
 *    doesn't have to do that with a load button.
 *  - This is here because FireFox does not send localStorage
 *    change events when using file: protocol.
 */
function srcChange() {
  console.log('entered srcChange');
  //if (!isLocalFile()) {
  //  console.log('leaving srcChange - not local file');
  //  return;
  //}
  //if (isChrome()) {
  //  console.log('leaving srcChange - isChrome');
  //  return;
  //}
  showStorage();
  let signal = localStorage.getItem('storySaved');
  console.log('signal = ' + signal);
  console.log(localStorage.length);
  if (!isDefined(signal)) {
    console.log('story not saved - returning');
    return;
  }

  let storyNamePlace = document.getElementById("storyNameId");
  if (isDefined(storyNamePlace)) {
    let name = localStorage.getItem('storySaved');
    if (isDefined(name)) {
      storyNamePlace.innerHTML = name + " : ";
      storyName = name;
    }
  }

  showStorage();
  signal = localStorage.getItem('storySaved');
  console.log('signal = ' + signal);
  console.log(localStorage.length);
  if (isDefined(signal)) {
    loadStory();
    console.log('---------- removing storySaved item -----------------');
    localStorage.removeItem('storySaved');  // prevent infinite recursion
  }
  console.log('leaving srcChange at end');
}
/* --------------------------------------------------------------
 *  localStorage changed event handler
 *  - Checks to see if loadStory should be called so user
 *    doesn't have to do that with a load button.
 */
function storageChange(event) {
  var storyName;
  console.log('entered storageChange with event.key = ' + event.key);
  showStorage();

  //if (event.key !== 'numItems') {
  //  return;
  //}
  if (event.key !== 'storySaved') {
    return;
  }
  else {
    storyName = localStorage.getItem('storySaved');
    //storyName = event.newValue;
    console.log('event.key = ' + event.key + ' : ' + 'event.newValue = ' + event.NewValue);
  }

  console.log('localStorage.length = ' + localStorage.length);
  showStorage();

  let numItemsStr = localStorage.getItem('numItems');
  numItems = parseInt(numItemsStr);
  console.log('numItems = ' + numItems);
  if (numItems > 0) {
    //-----------------------------------------------------
    // storyName is undefined unless these are uncommented
    let signal = localStorage.getItem('storySaved');
    storyName = signal;
    console.log('storyName = ' + storyName);
    let storyNamePlace = document.getElementById("storyNameId");
    storyNamePlace.innerHTML = storyName;
    loadStory();
    console.log('---------- removing storySaved item -----------------');
    localStorage.removeItem('storySaved');  // added 9/6/2019
  }
  else {
    console.log('numItems === 0');
  }
}

function addStorageEvent() {
  //alert('addStorageEvent called');
  //window.addEventListener("storage", function (e) { storageChange(e); }, false);
}

/* --------------------------------------------------------------
 *  Loads story list by calling render(0)
 */
function loadStoryList() {
  console.log('entering loadStoryList()');
  clearLocalStorage();
  closeNote();
  //console.log('LoadStoryList() calling render(0):\ncurr = ', curr);
  render(0);
}
/* --------------------------------------------------------------
 *  Loads story by calling retrieve to read story details
 *  from localStorage
 *  'numItems' is id of element that holds and displays page count
 */
function loadStory() {
  let storyKey = localStorage.getItem('storySaved');
  if (!isDefined(storyKey)) {
    console.log('story already loaded - leaving loadStory()');
    return;
  }
  closeNote();
  console.log('loadStory calling retrieve("numItems"):\ncurr = ', curr);
  retrieve('numItems');
  localStorage.removeItem('storySaved');
}
/* --------------------------------------------------------------
 *  Loads Table of Contents by indexing through pages array
 *  and using pages[i].url and pages[i].name to build table of links
 */
function loadTOC() {
  let itemList = document.getElementById('dropDownItems');
  removeChildren(itemList);

  // place label at top of TOC
  let topItem = document.createElement('div');
  topItem.setAttribute('style', 'background-color:saddlebrown; color:white; padding-left:5px;');
  topItem.innerHTML = 'Story Pages';
  itemList.appendChild(topItem);

  // create links and append to TOC
  for (i = 1; i <= numItems; ++i) {
    let item = document.createElement('a');
    item.setAttribute('href', '#');
    item.setAttribute('onclick', 'render(' + i.toString() + ')');
    item.innerHTML = i.toString() + '&nbsp;&nbsp;' + pages[i - 1].name;
    itemList.appendChild(item);
  }
  // leave blank line at end of TOC
  let item = document.createElement('a');
  item.setAttribute('href', '#');
  item.innerHTML = '&nbsp;';
  itemList.appendChild(item);
}
/* --------------------------------------------------------------
 *  Enable a single button
 */
function enableButton(id) {
  let button = document.getElementById(id);
  if (button)
    button.disabled = false;
}
/* --------------------------------------------------------------
 *  Enable all of the page control buttons
 */
function enableButtons() {
  enableButton('firstBtn');
  enableButton('lastBtn');
  enableButton('nextBtn');
  enableButton('currBtn');
  enableButton('prevBtn');
  enableButton('toggleBtn');
}
/* --------------------------------------------------------------
 *  Disable a single button
 */
function disableButton(id) {
  let button = document.getElementById(id);
  if (button)
    button.disabled = true;
}
/* --------------------------------------------------------------
 *  Disable all of the page control buttons
 */
function disableButtons() {
  disableButton('firstBtn');
  disableButton('lastBtn');
  disableButton('nextBtn');
  disableButton('currBtn');
  disableButton('prevBtn');
  disableButton('toggleBtn');
}
/* --------------------------------------------------------------
 *  Define key actions when StoryTeller has focus
 */
function keyAction(keyEvent) {
  keystate = 'down';
  var key = String.fromCharCode(keyEvent.which);
  //if (key === 'R') {
  //  location.reload();
  //}
  if (key === 'C') {
    returnToCurr();
  }
  if (key === 'N') {
    next();
  }
  if (key === 'P') {
    prev();
  }
  if (key === 'E') {
    window.location = 'index.html';
  }
  if (key === 'H') {
    openHelp();
  }
  if (key === 'O') {
    openNote();
  }
  if (key === 'S') {
    toggleStSwipeEvents();
  }
}
/* --------------------------------------------------------------
 *  Add event listener for key events
 */
function addKeys() {

  // listen for keyboard events:
  // - key actions are defined in ScriptsKeyboard.js
  document.addEventListener('keydown', (event) => { keyAction(event); }, false);
}
/* --------------------------------------------------------------
 *  Add key event listener and load the Story List
 *  - called at end of document
 */
function initialize() {
  addKeys();
  console.log('adding storage event listener');
  addStorageEvent();
  //localStorage.clear();
  //console.log('initialize() calling render(0):\ncurr = ', curr);
  render(0);
}
/* --------------------------------------------------------------
 *  Add wheel event listener to change width of page note.
 *  - no longer used.  Will move to tests repository
 */
//function pageNoteScroll() {
//  var item = document.getElementById('pageNoteContainer');
//  window.addEventListener('wheel', function (e) {
//    if (e.deltaY > 0)
//      item.style.width = (parseInt(item.style.width) + 50) + 'px';
//    else
//      item.style.width = (parseInt(item.style.width) - 50) + 'px';
//  });
//}
/* ------------------------------------------------------------
 *  showPages(id) - this is no longer used, may add to an
 *                  admin dropdown
 * ------------------------------------------------------------
 *  - Step throught pages array and display their contents
 *    in placeholder
 *  - No longer used.  May decide to add an admin menu that
 *    uses this display
 */
//function showPages(id) {
//  if (!isDefined(numItems))
//    return;
//  place = document.getElementById(id);
//  let underline = "---------------------------------";
//  let title = "<br />Pages read from pages array<br />" + underline + "<br />";
//  let titleElem = document.createElement("div");
//  titleElem.innerHTML = title;
//  place.appendChild(titleElem);
//  for (i = 0; i < numItems; ++i) {
//    let displayStr = i.toString() + " : ";
//    displayStr += pages[i].url + ", " + pages[i].name + ",<br />" + pages[i].note;
//    displayStr += "<br />" + underline;
//    let pageDisplay = document.createElement("div");
//    pageDisplay.innerHTML = displayStr;
//    place.appendChild(pageDisplay);
//  }
//}
/* ------------------------------------------------------------
 *  Empty localStorage display placeholder contents
 *  - not currently used
 *  - saved for possible demo mode later
 */
//function clearDisplay(id) {
//  //console.log('clearDisplay(id) calling render(-1):\ncurr = ', curr);
//  render(-1);
//  let place = document.getElementById(id);
//  removeChildren(place);
//}
