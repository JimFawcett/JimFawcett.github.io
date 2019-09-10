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
  if (typeof elem === 'undefined' || elem === null || elem === 'undefined') {
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

