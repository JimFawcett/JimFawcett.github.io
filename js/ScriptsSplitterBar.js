/* ------------------------------------------------------------------
 *  ScriptsSplitterBar.js 
 *    - code for draggin splitter and resizing panes on either side
 *  
 *  Jim Fawcett, Emeritus Teaching Professor, Syracuse University
 * ------------------------------------------------------------------
 */

function onLoadSplitter(figStr) {
  dragElement(document.getElementById(figStr + "-seperator"), "H", figStr);
}

function unify(e) {
  return e.changedTouches ? e.changedTouches[0] : e;
}

// function is used for dragging and moving
function dragElement(element, direction, figStr) {
  // Two variables for tracking positions of the cursor
  const drag = { x: 0, y: 0 };
  const delta = { x: 0, y: 0 };

  element.onmousedown = dragMouseDown;
  element.ontouchstart = dragMouseDown;

  // function that will be called whenever the down event of the mouse is raised
  function dragMouseDown(e) {
    drag.x = unify(e).clientX;
    drag.y = unify(e).clientY;
    document.onmousemove = onMouseMove;
    document.ontouchmove = onMouseMove;
    document.onmouseup = () => { document.onmousemove = document.onmouseup = null; };
    document.ontouchend = () => { document.ontouchemove = document.ontouchend = null; };
  }

  // function that will be called whenever the up event of the mouse is raised
  function onMouseMove(e) {
    const currentX = unify(e).clientX;
    const currentY = unify(e).clientY;

    delta.x = currentX - drag.x;
    delta.y = currentY - drag.y;

    const offsetLeft = element.offsetLeft;
    const offsetTop = element.offsetTop;


    const first = document.getElementById(figStr + "-first");
    const second = document.getElementById(figStr + "-second");
    let firstWidth = first.offsetWidth;
    let secondWidth = second.offsetWidth;
    if (direction === "H") // Horizontal
    {
      element.style.left = offsetLeft + delta.x + "px";
      firstWidth += delta.x;
      secondWidth -= delta.x;
    }
    drag.x = currentX;
    drag.y = currentY;
    first.style.width = firstWidth + "px";
    second.style.width = secondWidth + "px";
  }
}
