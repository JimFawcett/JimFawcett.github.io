// ScriptsUtilities.js

/* --------------------------------------------------------------
 *  window.onerror
 * --------------------------------------------------------------
 * This code binds a display function to window error events.
 * - Each JavaScript execution error causes an alert to popup
 *   with useful information.
 * - Combining this with use of the JavaScript console to spot
 *   compilation errors and log values makes debugging much
 *   easier.
 */
window.onerror = function (msg, url, linenumber) {
  alert('Error message: ' + msg + '\nURL: ' + url + '\nLine Number: ' + linenumber);
  return true;
}
/* --------------------------------------------------------------
 *  isDefined(elem)
 * --------------------------------------------------------------
 *  Checks to see if a JavaScript variable has been declared and
 *  initialized
 */
function isDefined(elem) {
  //if (typeof elem === 'function')
  //  return true;
  if (typeof elem === 'undefined' || elem === null || elem === undefined) {
    return false;
  }
  return true;
}
/* ------------------------------------------------------------
 *  Helper function to remove all child elements for a
 *  specified parent element.
 */
function removeChildren(elem) {
  while (elem.firstChild) {
    elem.removeChild(elem.firstChild);
  }
}
/* --------------------------------------------------------------
 *  activeStyle(elem) - returns the current style, not what
 *                      was defined at load time.
 * --------------------------------------------------------------
 *  Returns a style object - interrogate with getPropertyValue()
 */
function activeStyle(elem) {
  return window.getComputedStyle(elem);
}

function showStorage() {
  console.log('showStorage:');
  console.log('------------');
  Object.keys(localStorage).forEach(function (key) {
    console.log(key + ' : ' + localStorage.getItem(key));
  });
}

function isLocalFile() {
  return window.location.protocol === "file:";
}

function isChrome() {
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
}
