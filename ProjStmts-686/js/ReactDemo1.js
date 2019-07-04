/*---------------------------------------------------------------------- 
  ReactDemo1.js - Defines a button with custom properties
 -----------------------------------------------------------------------
 
     That's not very useful, but once we see how to do this, it's 
     easy to extend to more useful components, as shown in ReactDemo2.

     React demos often use JSX, a JavaScript preprocessor that supports 
     using HTML markup and JavaScript functions in the same expression.

     Using JSX requires building with Node.js to compile JSX into 
     JavaScript.  With only a little bit more work you can accomplish the
     same things without using JSX and I have elected not to use it here.

     Beware that most code examples on the web use JSX, so you can't use 
     the same syntax without setting up node.js

  Jim Fawcett, CSE686 - Internet Programming, Spring 2019
-----------------------------------------------------------------------*/

'use strict';

const e = React.createElement;

/*-------------------------------------------------------------
   Simple Demo showing how to build a (not very useful)
   React component.
 */
class ReactButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      var elem = e(
        'button',
        { className: 'demoButton', onClick: () => { this.setState({ liked: false }); } },
        'Not very useful React-based Button'
      );
      return elem;
    }

    return e(
      'button',
      { className: 'demoButton', onClick: () => this.setState({ liked: true }) },
      'Click Me'
    );
  }
}

const domContainer = document.querySelector("#like_button_container");  /* where to put button */
ReactDOM.render(e(ReactButton), domContainer);  /* show it */


