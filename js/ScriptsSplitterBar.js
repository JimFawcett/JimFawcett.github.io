/* ------------------------------------------------------------------
 *  ScriptsSplitterBar.js 
 *    - code for draggin splitter and resizing panes on either side
 *  
 *  Jim Fawcett, Emeritus Teaching Professor, Syracuse University
 * ------------------------------------------------------------------
 */

function onLoadSplitter(figStr) {
  dragElement(document.getElementById(figStr + "-seperator"), figStr);
}

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

// function is used for dragging and moving
function dragElement(element, figStr) {
  // Two variables for tracking positions of the cursor
  const drag = { x: 0 };
  const delta = { x: 0 };

  //element.onmousedown = dragMouseDown;
  //element.ontouchstart = dragMouseDown;
  element.addEventListener("mousedown", dragMouseDown, false);
  element.addEventListener("touchstart", dragMouseDown, false);

  // function that will be called whenever the down event of the mouse is raised
  function dragMouseDown(e) {
    console.log('entered dragMouseDown');
    drag.x = unify(e).clientX;
    //document.onmousemove = onMouseMove;
    //document.ontouchmove = onMouseMove;
    //document.onmouseup = () => { document.onmousemove = document.onmouseup = null; };
    //document.ontouchend = () => { document.ontouchemove = document.ontouchend = null; };
    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("touchmove", onMouseMove, false);
    document.addEventListener("mouseup", () => { document.removeEventListener("mousemove", onMouseMove); });
    document.addEventListener("touchend", () => { document.removeEventListener("touchmove", onMouseMove); });
 }

  // function that will be called whenever the up event of the mouse is raised
  function onMouseMove(e) {
    console.log('entered onMouseMove');
    const currentX = unify(e).clientX;

    delta.x = currentX - drag.x;

    const offsetLeft = element.offsetLeft;

    const first = document.getElementById(figStr + "-first");
    const second = document.getElementById(figStr + "-second");
    let firstWidth = first.offsetWidth;
    let secondWidth = second.offsetWidth;

    element.style.left = offsetLeft + delta.x + "px";
    firstWidth += delta.x;
    secondWidth -= delta.x;

    drag.x = currentX;
    first.style.width = firstWidth + "px";
    second.style.width = secondWidth + "px";
  }
}

/*--------------------------------------------------------------- 
  Now depricated 
  onclick widen left code panel 
*/
function cwiden() {
  let out = event.target;
  let widthr = window.getComputedStyle(out)["width"];
  let width = parseFloat(widthr);
  width += 100.0;
  out.style.width = width.toString() + "px";
  widthr = window.getComputedStyle(out).width;
  let debug = null;
}
/*--------------------------------------------------------------- 
  Now depricated
  onclick widen right output panel 
  - Can't directly change width of right panel. It's styling
    fills the remainder of its container.
  - So, we shrink the left code panel.
*/
function owiden() {
  let out = event.target;
  let cele = out.parentNode.firstChild.nextSibling;
  let widthr = window.getComputedStyle(cele)["width"];
  let width = parseFloat(widthr);
  width -= 100;
  cele.style.width = width.toString() + "px";
  let debug = null;
}
/*---------------------------------------------------------------
  Widen size of first code panel, called from inner pre element
*/
function cbubbleup(id) {
  target = document.getElementById(id);
  let widthr = window.getComputedStyle(target)["width"];
  let width = parseFloat(widthr);
  width += 100.0;
  target.style.width = width.toString() + "px";
  widthr = window.getComputedStyle(target).width;
  let debug = null;
}
/*---------------------------------------------------------------
  Can't wident second panel, it's sized to fill remaining space.
  So narrow size of first code panel.
*/
function obubbleup(id) {
  target = document.getElementById(id);
  let widthr = window.getComputedStyle(target)["width"];
  let width = parseFloat(widthr);
  width -= 100.0;
  target.style.width = width.toString() + "px";
  widthr = window.getComputedStyle(target).width;
  let debug = null;
}
///*---------------------------------------------------------------
//  Widen size of first code panel, called from inner pre element
//*/
//function cbubbleup() {
//  let target = event.target;
//  if (target.tagName === "CODE") {  // clicked on text in code el
//    target = target.parentNode;       // move up to code el
//  }
//  let parent = target.parentNode;     // move up to pre el
//  let gparent = parent.parentNode;    // move up to div.codewrap
//  let ggparent = gparent.parentNode;  // move up to first-item
//  let widthr = window.getComputedStyle(ggparent)["width"];
//  let width = parseFloat(widthr);
//  width += 100.0;
//  ggparent.style.width = width.toString() + "px";
//  widthr = window.getComputedStyle(ggparent).width;
//  let debug = null;
//}
///*---------------------------------------------------------------
//  Can't wident second panel, it's sized to fill remaining space.
//  So narrow size of first code panel.
//*/
//function obubbleup() {
//  let target = event.target;
//  if (target.tagName === "CODE") {  // clicked on text in code el
//    target = target.parentNode;       // move up to code el
//  }
//  let parent = target.parentNode;     // move up to pre el
//  let gparent = parent.parentNode;    // move up to div.codewrap
//  let ggparent = gparent.parentNode;  // move up to second-item
//  let gggparent = ggparent.parentNode;  // move up to container
//  let newtarget = gggparent.firstChild.nextSibling;  // move to first item
//  let widthr = window.getComputedStyle(newtarget)["width"];
//  let width = parseFloat(widthr);
//  width -= 100.0;
//  newtarget.style.width = width.toString() + "px";
//  widthr = window.getComputedStyle(newtarget).width;
//  let debug = null;
//}

