/* ------------------------------------------------------------------
 *  ScriptsSplitterBar.js 
 *    - code for draggin splitter and resizing panes on either side
 *  
 *  Jim Fawcett, Emeritus Teaching Professor, Syracuse University
 * ------------------------------------------------------------------
 */

function onLoadSizer(figStr, width) {
  let second = null;
  if (isDefined(width)) {
    second = document.getElementById(figStr + "-second");
    second.style.width = width;
  }
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

  element.onmousedown = dragMouseDown;
  element.ontouchstart = dragMouseDown;

  // function that will be called whenever the down event of the mouse is raised
  function dragMouseDown(e) {
    console.log('entered dragMouseDown');
    drag.x = unify(e).clientX;
    document.onmousemove = onMouseMove;
    document.ontouchmove = onMouseMove;
    document.onmouseup = () => { document.onmousemove = document.onmouseup = null; };
    document.ontouchend = () => { document.ontouchemove = document.ontouchend = null; };
  }

  // function that will be called whenever the up event of the mouse is raised
  function onMouseMove(e) {
    const currentX = unify(e).clientX;
    console.log('entered onMouseMove: currentX = ' + currentX);

    delta.x = currentX - drag.x;

    const offsetLeft = element.offsetLeft;

    //const first = document.getElementById(figStr + "-first");
    const second = document.getElementById(figStr + "-second");
    //let firstWidth = first.offsetWidth;
    let secondWidth = second.offsetWidth;

    element.style.left = offsetLeft + delta.x + "px";
    //firstWidth += delta.x;
    secondWidth -= delta.x;

    drag.x = currentX;
    //first.style.width = firstWidth + "px";
    second.style.width = secondWidth + "px";
  }
}
