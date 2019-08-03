
/* SizerScriptComp.js */

/*---------------------------------------------------------
*  Make image larger
*/
function bigger(id) {
  let pict = document.getElementById(id);
  let width = pict.style.width;                         // "100px"
  let truncWidth = width.substr(0, width.length - 2);   // "100"
  let value = Number(truncWidth);                       // 100
  value = 1.5 * value;                                  // 120
  let newWidth = value.toString();                      // "120"
  newWidth = newWidth + "px";                           // "120px"
  pict.style.width = newWidth;
}
/*---------------------------------------------------------
*  Make image smaller
*/
function smaller(id) {
  let pict = document.getElementById(id);
  let width = pict.style.width;
  let truncWidth = width.substr(0, width.length - 2);
  let value = Number(truncWidth);
  value = value / 1.5;
  let newWidth = value.toString();
  newWidth = newWidth + "px";
  pict.style.width = newWidth;
}
/*-- not yet functional --*/
function refresh() {
  location.reload();
}
/*---------------------------------------------------------
*  Global id suffix - needed because we may have more
*                     than one sizer 
*/
var idCount = 0;

/*---------------------------------------------------------
*  Assemble image sizer and attach to placeholder
*  - imageUrl:    relative path to image
*  - caption:     append caption to image if not empty string 
*  - hiderText:   caption for sizer on hider bar
*  - hiderTop:    fixed vertical distance from window top
*                 if zero sizer aligned with image top
*  - size:        width of image container
*  - placeholder: id of div that defines location of image in page
*/
function createSizer(imageUrl, caption, size, placeholder) {

  let imageContainerId = "imageContainerId" + (++idCount).toString();

  // add sizer to document
  let loc = document.getElementById(placeholder);

  // create image wrapper
  let imageWrapper = document.createElement("image-wrapper");
  let imageWrapperId = "imageWrapperId" + idCount.toString();
  imageWrapper.setAttribute("id", imageWrapperId);
  let imageContainer = document.createElement("image-container");
  imageContainer.setAttribute("id", imageContainerId);
  let imgStyle = "width:" + size.toString() + "px;" + "padding:5px;" ;
  imageContainer.setAttribute("style", imgStyle);
  let image = document.createElement("img");
  //image.addEventListener("click", function () { bigger(imageContainerId); });
  image.setAttribute("src", imageUrl);
  image.setAttribute("width", "100%");
  imageContainer.appendChild(image);
  imageContainer.addEventListener("click", function () { bigger(imageContainerId); });
  if (caption !== "") {
    let title = document.createElement("div");
    title.appendChild(document.createTextNode(caption));
    title.setAttribute("style", "text-align:center; white-space:nowrap; overflow:hidden; padding:5px 0px;");
    imageContainer.appendChild(title);
  }
  imageWrapper.appendChild(imageContainer);
  loc.appendChild(imageWrapper);
}
