// JavaScript source code
/* --------------------------------------------------------------
 *  numItems records the number of links found in this story page.
 *  We can edit in more links with their information at any time.
 *
 *  Each link carries story information for a single page:
 *  - url:
 *    Address of the page, taken from the src attribute of the link.
 *  - name:
 *    Value of the link, e.g., the text displayed by the link.
 *  - note:
 *    A string that is the innerHTML of a div just below the link.
 *    This will be used for pages notes which slide out on hover.
 *
 *  This information is:
 *  - stored in localStorage for the StoryTeller to read
 */
let numItems = 0;
/* --------------------------------------------------------------
 *  Extracts information from its own contents about the story and:
 *  - loads that into localStorage
 *  - displays the extracted information in an HTML table
 */
function getContent(storyName) {

  // get a collection of all the links from this page body
  let links = document.getElementsByTagName("a");

  // get a collection of all the page notes from divs below each link
  let notes = document.getElementsByClassName("pageNote");

  // save number of pages in localStorage
  //console.log('-------------- setting storySaved:' + storyName + ' ---------------');
  //localStorage.setItem('storySaved', storyName);

  numItems = links.length;
  console.log('numItems = ' + numItems);
  localStorage.setItem('numItems', numItems.toString());

  for (var i = 0; i < links.length; ++i) {
    let url = links[i].getAttribute("href");
    let name = links[i].innerHTML;
    let note = notes[i].innerHTML;

    // save this page's information to local storage - note key.
    let key = "page-" + i.toString();
    save(key, url, name, note);
  }
  console.log('-------------- setting storySaved:' + storyName + ' ---------------');
  localStorage.setItem('storySaved', storyName);
}

/* --------------------------------------------------------------
 *  Save a page's information in localStorage as a json string
 */
function save(key, item1, item2, item3) {
  var obj = new Object;
  obj.url = item1;
  obj.name = item2;
  obj.note = item3;
  let JSONstr = JSON.stringify(obj);
  localStorage.setItem(key, JSONstr);
}

function clearStorage() {
  console.log('------------- clearing local storage ------------');
  localStorage.clear();
}
