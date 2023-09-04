/* ------------------------------------------------------------------
 *  ScriptsPhotoSizerComp.js 
 *    - WebComponent for displaying resizeable images
 *  
 *  Jim Fawcett, Emeritus Teaching Professor, Syracuse University
 * ------------------------------------------------------------------
 */

/* custom webcomponent - HideablePhotoSizerBlock*/

isDefined(elem) {
  if (typeof elem === 'undefined' || elem === null || elem === undefined) {
    return false;
  }
  return true;
}

class HideablePhotoSizerBlock extends HTMLElement {
  constructor(...args) {
    const self = super(...args);
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML =
      `
              <style>
                #cont {
                  display:flex;
                  padding: var(--padding);
                }
                #wrapper {
                  width:min-content;
                  padding: var(--wrapperPadding); //10px;
                  margin: var(--margin);  //20px;
                  background-color: var(--background-color);
                  color: var(--color);
                  box-shadow: var(--box-shadow);
                  font-family: var(--font-family);
                  font-size: var(--font-size);
                  font-weight: var(--font-weight);
                  border: var(--border);
                  cursor: pointer;
                  user-select:none;
                  -webkit-user-select:none;
                  -moz-user-select:none;
                  -ms-user-select:none;
                }
                #closer {
                  text-align:center;
                  font-family:'Comic Sans MS', Sans-serif; 
                  font-size:0.9em;
                  background-color:#ddd;
                }
                #caption {
                  text-align:center;
                  padding-bottom:10px;
                  padding: var(--captionPadding); //0px 0px 10px 0px;
                  background-color:white;
                }
                img {
                  user-select:none;
                  -webkit-user-select:none;
                  -moz-user-select:none;
                  -ms-user-select:none;
                }
              </style>
              <div id="cont">
                <slot></slot>
                <div id="wrapper">
                  <div id="caption"></div>
                  <img />
                  <div id="closer">click to close</div>
                </div>
              </div>`;
    this.bigger = this.bigger.bind(this);
    this.smaller = this.smaller.bind(this);
    this.toggle = this.toggle.bind(this);
    return self;
  }
  connectedCallback() {
    this.url = this.getAttribute('src');
    this.imgElem = this.shadowRoot.querySelector('img');
    this.imgElem.setAttribute('src', this.url);
    this.width = this.getAttribute('width');
    if (isDefined(this.width))
      this.imgElem.setAttribute('width', this.width);
    this.height = this.getAttribute('height');
    if (isDefined(this.height))
      this.imgElem.setAttribute(this.height);
    this.caption = this.shadowRoot.querySelector('#caption');
    if (isDefined(this.caption)) {
      this.captionText = this.innerHTML;
      this.innerHTML = "";
      this.caption.innerHTML = this.captionText;
    }
    this.imgElem.addEventListener('click', this.bigger);
    this.caption.addEventListener('click', this.smaller);
    this.closer = this.shadowRoot.querySelector('#closer');
    this.closer.addEventListener('click', this.toggle);
  }
  bigger() {
    this.imgElem.width = Number(this.imgElem.width) * 1.25;
  }
  smaller() {
    this.imgElem.width = Number(this.imgElem.width) / 1.25;
  }
  toggle() {
    let wrpr = this.shadowRoot.getElementById("wrapper");
    if (isDefined(wrpr)) {
      if (wrpr.style.display === "none") {
        wrpr.style.display = "block";
        this.closer.style.right = "8px";
      }
      else {
        wrpr.style.display = "none";
        this.closer.style.right = "7px";
      }
    }
  }
}
/* register with DOM - don't need to use script block to execute */

/*---------------------------------------------------------------------------
 * This listener is added because of a component lifecycle issue with chrome
 * See first reference, below.
 */
document.addEventListener('DOMContentLoaded', function () {
  window.customElements.define('hidephotosizer-block', HideablePhotoSizerBlock);
});
    /*
 * The listener, above, will be removed and replaced with this when chrome
 * component lifecycle is fixed.
 *
 * window.customElements.define('photosizer-block', PhotoSizerBlock);
 */
/* custom webcomponent - PhotoSizerBlock*/

class PhotoSizerBlock extends HTMLElement {
  constructor(...args) {
    const self = super(...args);
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML =
      `
              <style>
                #cont {
                  display:flex;
                  padding: var(--padding);
                }
                #wrapper {
                  width:min-content;
                  padding: var(--wrapperPadding); //10px;
                  margin: var(--margin);  //20px;
                  background-color: var(--background-color);
                  color: var(--color);
                  box-shadow: var(--box-shadow);
                  font-family: var(--font-family);
                  font-size: var(--font-size);
                  font-weight: var(--font-weight);
                  border: var(--border);
                  cursor: pointer;
                  user-select:none;
                  -webkit-user-select:none;
                  -moz-user-select:none;
                  -ms-user-select:none;
                }
                #caption {
                  text-align:center;
                  padding-bottom:10px;
                  padding: var(--captionPadding); //0px 0px 10px 0px;
                  background-color:white;
                }
                img {
                  user-select:none;
                  -webkit-user-select:none;
                  -moz-user-select:none;
                  -ms-user-select:none;
                }
              </style>
              <div id="cont">
                <slot></slot>
                <div id="wrapper">
                  <div id="caption"></div>
                  <img />
                </div>
              </div>`;
    this.bigger = this.bigger.bind(this);
    this.smaller = this.smaller.bind(this);
    return self;
  }
  connectedCallback() {
    this.url = this.getAttribute('src');
    this.imgElem = this.shadowRoot.querySelector('img');
    this.imgElem.setAttribute('src', this.url);
    this.width = this.getAttribute('width');
    if (isDefined(this.width))
      this.imgElem.setAttribute('width', this.width);
    this.height = this.getAttribute('height');
    if (isDefined(this.height))
      this.imgElem.setAttribute(this.height);
    this.caption = this.shadowRoot.querySelector('#caption');
    if (isDefined(this.caption)) {
      this.captionText = this.innerHTML;
      this.innerHTML = "";
      this.caption.innerHTML = this.captionText;
    }
    this.imgElem.addEventListener('click', this.bigger);
    this.caption.addEventListener('click', this.smaller);
  }
  bigger() {
    this.imgElem.width = Number(this.imgElem.width) * 1.25;
  }
  smaller() {
    this.imgElem.width = Number(this.imgElem.width) / 1.25;
  }
}
/* register with DOM - don't need to use script block to execute */

/*---------------------------------------------------------------------------
 * This listener is added because of a component lifecycle issue with chrome
 * See first reference, below.
 */
document.addEventListener('DOMContentLoaded', function () {
  window.customElements.define('photosizer-block', PhotoSizerBlock);
});
    /*
 * The listener, above, will be removed and replaced with this when chrome
 * component lifecycle is fixed.
 *
 * window.customElements.define('photosizer-block', PhotoSizerBlock);
 */
/* register with DOM - don't need to use script block to execute */

///*---------------------------------------------------------------------------
///* custom webcomponent - PhotoSizerBlock*/

//class PhotoSizerBlock extends HTMLElement {
//  constructor(...args) {
//    const self = super(...args);
//    const shadowRoot = this.attachShadow({ mode: 'open' });
//    shadowRoot.innerHTML =
//      `
//      <style>
//        #cont {
//          display:flex;
//          padding: var(--padding);
//        }
//        #wrapper {
//          width:min-content;
//          padding: var(--wrapperPadding); //10px;
//          margin: var(--margin);  //20px;
//          background-color: var(--background-color);
//          color: var(--color);
//          box-shadow: var(--box-shadow);
//          font-family: var(--font-family);
//          font-size: var(--font-size);
//          font-weight: var(--font-weight);
//          border: var(--border);
//          cursor: pointer;
//        }
//        #caption {
//          user-select:none;
//          -webkit-user-select:none;
//          -moz-user-select:none;
//          -ms-user-select:none;
//          text-align:center;
//          padding-bottom:10px;
//          padding: var(--captionPadding); //0px 0px 10px 0px;
//        }
//        img {
//          user-select:none;
//          -webkit-user-select:none;
//          -moz-user-select:none;
//          -ms-user-select:none;
//        }
//      </style>
//      <div id="cont">
//        <slot></slot>
//        <div id="wrapper">
//          <div id="caption"></div>
//          <img />
//        </div>
//      </div>`;
//    this.bigger = this.bigger.bind(this);
//    this.smaller = this.smaller.bind(this);
//    return self;
//  }
//  connectedCallback() {
//    this.url = this.getAttribute('src');
//    this.imgElem = this.shadowRoot.querySelector('img');
//    this.imgElem.setAttribute('src', this.url);
//    this.width = this.getAttribute('width');
//    if (isDefined(this.width))
//      this.imgElem.setAttribute('width', this.width);
//    this.height = this.getAttribute('height');
//    if (isDefined(this.height))
//      this.imgElem.setAttribute(this.height);
//    this.caption = this.shadowRoot.querySelector('#caption');
//    if (isDefined(this.caption)) {
//      this.captionText = this.innerHTML;
//      this.innerHTML = "";
//      this.caption.innerHTML = this.captionText;
//    }
//    this.imgElem.addEventListener('click', this.bigger);
//    this.caption.addEventListener('click', this.smaller);
//  }
//  bigger() {
//    this.imgElem.width = Number(this.imgElem.width) * 1.25;
//  }
//  smaller() {
//    this.imgElem.width = Number(this.imgElem.width) / 1.25;
//  }
//}
///* register with DOM - don't need to use script block to execute */

///*--------------------------------------------------------------------------- 
// * This listener is added because of a component lifecycle issue with chrome
// * See first reference, below.
// */
//document.addEventListener('DOMContentLoaded', function () {
//  window.customElements.define('photosizer-block', PhotoSizerBlock);
//});
///*
//* The listener, above, will be removed and replaced with this when chrome
//* component lifecycle is fixed.
//*
//* window.customElements.define('photosizer-block', PhotoSizerBlock);
//*/

/*-----------------------------------------------------------------*/
/* custom webcomponent - PhotoBlock*/

class PhotoBlock extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML =
      `
            <style>
              #cont {
                display:flex;
                padding: var(--padding);
              }
              #wrapper {
                width:min-content;
                padding:10px;
                margin: 20px;
                background-color: var(--background-color);
                color: var(--color);
                box-shadow: var(--box-shadow);
                font-family: var(--font-family);
                font-size: var(--font-size);
                font-weight: var(--font-weight);
                border: var(--border);
                user-select:none;
                -webkit-user-select:none;
                -moz-user-select:none;
                -ms-user-select:none;
              }
              #caption {
                text-align:center;
              }
            </style>
            <div id="cont">
              <slot style="display:none;"></slot>
              <div id="wrapper">
                <img />
                <div id="caption"></div>
              </div>
            </div>`;
  }
  connectedCallback() {
    //alert(this.shadowRoot.innerHTML);
    this.url = this.getAttribute('src');
    this.imgElem = this.shadowRoot.querySelector('img');
    this.imgElem.setAttribute('src', this.url);
    this.width = this.getAttribute('width');
    if (isDefined(this.width))
      this.imgElem.setAttribute('width', this.width);
    this.height = this.getAttribute('height');
    if (isDefined(this.height))
      this.imgElem.setAttribute(this.height);
    this.caption = this.shadowRoot.querySelector('#caption');
    if (isDefined(this.caption)) {
      this.caption.innerHTML = this.innerHTML;
      this.innerHTML = "";
    }
  }
}
/*--------------------------------------------------------------------------- 
 * This listener is added because of a component lifecycle issue with chrome
 * See first reference, below.
 */
document.addEventListener('DOMContentLoaded', function () {
  window.customElements.define('photo-block', PhotoBlock);
});
    /*
 * The listener, above, will be removed and replaced with this when chrome
 * component lifecycle is fixed.
 *
 * window.customElements.define('photo-block', PhotoBlock);
 */

/*-----------------------------------------------------------------*/
/* custom webcomponent - CodeBlock*/

class CodeBlock extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML =
      `
            <style>
              #outer {
                display:flex;
                padding: var(--padding);
                user-select:none;
                -webkit-user-select:none;
                -moz-user-select:none;
                -ms-user-select:none;
              }
              #inner {
                white-space:pre; width:min-content; font-family:consolas, monospace,
                line-height:1.2; padding:0px 25px;
                background-color: var(--background-color);
                color: var(--color);
                box-shadow: var(--box-shadow);
                font-family: var(--font-family);
                font-size: var(--font-size);
                font-weight: var(--font-weight);
              }
            </style>
            <div id="outer"><div id="inner"><slot></slot></div></div>`;
  }
}
/* register with DOM - don't need to use script block to execute */

window.customElements.define('code-block', CodeBlock);

