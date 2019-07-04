/*
  ==================================================================
  JavaScriptDemoScript.js - JavaScript library for JavaScript Demos

  Jim Fawcett, CSE686 - Internet Programming, Spring 2019
  ==================================================================
*/

/* ----------------------------------------------------------
 * write a line break at current document location
 */
function putline() {
  document.write("<br/>");
}
/* ----------------------------------------------------------
 * write n line breaks at current document location
 */
function putlines(n) {
  if (isNaN(n))
    n = 1;
  for (var index = 0; index < n; ++index)
    document.write("<br/>");
}
/* ----------------------------------------------------------
 * write value of script variable
 */
function showvalue(v, showQuotes) {
  var pred1 = typeof (v) === "string";  // used for debugging
  var pred2 = showQuotes === undefined; // used for debugging
  if (typeof (v) === "string" && !(showQuotes === undefined)) {
    document.write('"' + v + '"');
  }
  else
    document.write(v);
  putline();
}
/* ----------------------------------------------------------
 * write value of script variable with newline
 */
function showline(v) {
  showvalue(v);
  putline();
}
/* ----------------------------------------------------------
 * write non-breaking spaces at current document location
 */
function indent(n) {
  var str = "";
  for (var index = 0; index < n; ++index)
    str += "&nbsp;";
  document.write(str);
}
/* ----------------------------------------------------------
 * write array elements on one line separated by spaces
 */
function showArray(array) {
  document.write('[');
  //document.write(array.toString());
  /*
   * array.toString() does this without the spaces between elements
   */
  for (var index = 0; index < array.length; ++index) {
    document.write(array[index]);
    if (index < array.length - 1)
      document.write(", ");
  }
  document.write(']');
  putline();
}
/* ==========================================================
 *  Enumerating object properties can be confusing because:
 *  - They come in two flavors: enumerable and nonenumerable
 *    deteremined by a flag setting in the Object class.
 *  - Each class has a prototype:
 *      - so you may wish to enumerate just this object's 
 *        properties.
 *      - or you want both this object's properties and those
 *        of its prototype.
 *  - This is nicely documented in: 
 *    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Enumerability_and_ownership_of_properties
 *
 *  - You will find, below, several functions to get what you 
 *    may want.
 *
 * ==========================================================
 */
/* ----------------------------------------------------------
 * display JSon key : value pairs
 * - displays own and inherited enumerable properties
 * - it does not display nonenumerable properties
 */
function showJSon(obj) {

  for (var prop in obj) {
    showvalue(prop + ':&nbsp;&nbsp;' + obj[prop]);
  }
}
/* ----------------------------------------------------------
 * display all JSon key : value pairs
 * - displays own and inherited enumerable and 
 *   nonenumerable properites
 */
function showAllJSon(obj) {
  Props = Object.getOwnPropertyNames(obj);
  for (var prop in Props) {
    showvalue(Props[prop] + ':&nbsp;&nbsp;' + obj[Props[prop]]);
  }
  Props = Object.getOwnPropertyNames(obj.__proto__);
  for (var prop in Props) {
    showvalue(Props[prop] + ':&nbsp;&nbsp;' + obj[Props[prop]]);
  }
}
/* ----------------------------------------------------------
 * display all JSon key : value pairs
 * - displays own enumerable and nonenumerable properites
 * - uses table formating to manage big properties and values
 */
function showAllJSonFormatted(target, obj, inherited) {

  // - keyfield sets field width and float:left property
  // - valueField can be used for further styling

  /* show own properties, both enumerable and nonenumerable */

  var elem = document.getElementById(target);

  var found = [];
  var Props = Object.getOwnPropertyNames(obj);

  var table = '<table>';
  for (var prop in Props) {
    found.push(Props[prop]);
    table += 
      '<tr><td class="keyfield">' + Props[prop] +
      '</td><td> : </td><td class="valuefield">' + obj[Props[prop]] + '</td></tr>';
  }
  /* show prototype's properties, both enumerable and nonenumerable */

  if (!(inherited === true)) {
    table += '</table>';
    elem.innerHTML = table;
    return;
  } 
  else {
    var Props2 = Object.getOwnPropertyNames(obj.__proto__);
    for (var prop in Props2) {
      if (!(Props[prop] in found)) {
        table +=
          '<tr><td class="keyfield">' + Props2[prop] +
          '</td><td class="top"> : </td><td class="valuefield">' + obj[Props2[prop]] + '</td></tr>'
      }
    }
  } 
  table += '</table>';

  elem.innerHTML = table;
  //alert('at end');
}
/* ----------------------------------------------------------
 * return document node with specified id
 * - ids should be unique
 */
function find(id) {
  return document.getElementById(id);
}
/* ----------------------------------------------------------
 * click event handler toggles text
 * - this is here to serve as an example
 */
function clickEvent(button_) {
  var node = find("placeholder");
  if (node === "undefined")
    return;
  if (button_ !== "undefined") {
    if (button_.className == "buttonNoPress")
      button_.className = "buttonPress";
    else
      button_.className = "buttonNoPress";
  }
  if (node.innerHTML == "")
    node.innerHTML = "That\'s almost all folks!";
  else
    node.innerHTML = "";
}
/* ----------------------------------------------------------
 * Set event handler
 */
function setHandler(id, event, handler) {
  var elem = find(id);
  if (elem === undefined)
    return;
  elem.addEventListener('click', handler, false /* don't use capture */);
}
