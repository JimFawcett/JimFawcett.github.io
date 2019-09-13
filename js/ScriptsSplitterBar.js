// JavaScript source code

function onLoadSplitter(figStr) {
  dragElement(document.getElementById(figStr + "-seperator"), "H", figStr);
}

// function is used for dragging and moving
function dragElement(element, direction, figStr) {
  // Two variables for tracking positions of the cursor
  const drag = { x: 0, y: 0 };
  const delta = { x: 0, y: 0 };
  /* if present, the handler is where you move the DIV from
     otherwise, move the DIV from anywhere inside the DIV */
  //handler ? (handler.onmousedown = dragMouseDown) : (element.onmousedown = dragMouseDown);
  element.onmousedown = dragMouseDown

  // function that will be called whenever the down event of the mouse is raised
  function dragMouseDown(e) {
    drag.x = e.clientX;
    drag.y = e.clientY;
    document.onmousemove = onMouseMove;
    document.onmouseup = () => { document.onmousemove = document.onmouseup = null; }
  }

  // function that will be called whenever the up event of the mouse is raised
  function onMouseMove(e) {
    const currentX = e.clientX;
    const currentY = e.clientY;

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
