/*--------------------------------------------------------------------
    Display and Analysis functions
*/
    function print(str) {
    document.write(str);
    }
    function println(str) {
    document.write(str + "<br />");
    }
    /*--------------------------------------------------------------------
    Display emphasized text
    */
    function showNote(text) {
    document.write("-------------------------<br />");
    document.write(text, "<br />");
    document.write("-------------------------<br />");
    }
    /*--------------------------------------------------------------------
    Show an operation expression surrounded with a few dashes
    */
    function showOp(text) {
    document.write("--- ");
    document.write(text)
    document.write(" ---<br />");
    }
    /*--------------------------------------------------------------------
    Show basic type information
    */
    function showType(t, nm, left=4, width=7) {
    if(typeof t != typeof Object()) {
        println(nm + ": " + typeof t);
        print("size: " + sizeof(t) + ", value: " + t);
    }
    else {
        println("type: " + typeof t);
        showObject(t, nm, left, width);
        print("size: " + sizeof(t));
    }
    println(nil);
    }
    /*--------------------------------------------------------------------
    Show type information using object's show() method
    */
    function showTypeShowable(t, nm) {
    print(nm + ", " + typeof t);
    print(", size: ");
    println(sizeof(t));
    print("value: ");
    t.show(nm);
    }
    /*--------------------------------------------------------------------
    Do references o1 and o2 have same address (point to same instance)
    */
    function isSameObject(o1, nm1, o2, nm2) {
    if (o1 === o2) {
        println(nm1 + " is same object as " + nm2)
    }
    else {
        println(nm1 + " is not same object as " + nm2)
    }
    }
    /*--------------------------------------------------------------------
    Create a string containing n non-breaking spaces, &nbsp;....
    Part of formatJSONstr(...)
    */
    function indent(n) {
    let tmp = "";
    for(i=0; i<n; ++i) {
        tmp += "&nbsp;";
    }
    return tmp;
    }
    /*--------------------------------------------------------------------
    Replace comma character with comma escape, e.g., &#44;.
    Expects index to point to comma in str. This is done to
    avoid splitting inner array by JSON.stringify.
    Part of formatJSONstr(...)
    */
    function replaceComma(str, index) {
    if(index < 0 || str.length <= index) {
        return str;
    }
    let tmp = str.substr(0, index-1) + "&#44;" + str.substr(index);
    // document.writeln("test: " + JSON.stringify('1&#44;2'));
    return tmp;
    }
    /*--------------------------------------------------------------------
    Treat inner array as a single element for JSON string formatting.
    Part of formatJSONstr(...)
    */
    function weldArray(jstr) {
    isArray = false;
    tmp = jstr;
    let j=0;
    for(i=0; i<jstr.length; ++i) {
        j += 1;
        switch(jstr[i]) {
        case '[':
            if(i != 0) {  // don't count outer array
            isArray = true;
            }
            break;
        case ']':
            isArray = false;
            break;
        case ',':
            if(isArray) {
            tmp = replaceComma(tmp, j);
            j += 4;
            }
            break;
        }
    }
    return tmp;
    }
    /*--------------------------------------------------------------------
    Format JSON string to indent left spaces and show rows of width elements
    */
    function formatJSONstr(jstr, left=4, width=8) {
    let indtCache = indent(left);
    jstr = weldArray(jstr);
    jstr = jstr.trim();
    let char1 = jstr[0];
    let char2 = jstr[jstr.length - 1];
    let jstrm = jstr.substring(1, jstr.length - 1); // remove delimiters
    let fstr = jstrm.split(/[,]+/); // regex selects on either " " or ,
    let fm = char1 + "<br />" + indtCache;
    for(i=0; i<fstr.length; ++i) {
        fm += fstr[i] + ", ";
        if((i+1) % width === 0 && i != fstr.length -1) {
        fm += "<br />" + indtCache;
        }
    }
    fm = fm.substring(0, fm.length - 2);
    fm += "<br />" + char2 + "<br />";
    return fm;
    }
    /*--------------------------------------------------------------------
    Use JSONstringify to show all data members of object with body
    indented by left spaces and elements shown in rows of specified 
    width. Used in showType(...)
    */
    function showObject(obj, nm, left=4, width=7) {
    document.write(nm, ": ");
    let fmts = formatJSONstr(JSON.stringify(obj), left, width);
    document.write(fmts);
    }
    /*--------------------------------------------------------------------
    Iterate through object's own keys, ignore objects, and display
    - only shows top level elements, e.g., no recursion
    - not used in demo
    - here to illustrate iterating through object elements
    */
    function showObject_alt(obj, nm) {
    let str = "";
    for(let [key, value] of Object.entries(obj)) {
        if(obj.hasOwnProperty(key) && typeof value != typeof Object) {
        str += "{" + key + ": " + value + "}, ";
        }
    }
    /* remove trailing comma and space */
    str = str.substring(0, str.length - 2);
    document.write(nm, " { ", str, " }", nl);
    }
    /*--------------------------------------------------------------------
    Evaluate object's size by iterating through own properties
    // https://gist.github.com/pgpbpadilla/10344038
    */
    function sizeof(object) {
    var objectList = [],
        stack = [ object ],
        bytes = 0,
        value,
        i;

    while (stack.length) {
        value = stack.pop();

        if (typeof value === 'boolean') {
        bytes += 4;
        } else if (typeof value === 'string') {
        bytes += value.length * 2;
        } else if (typeof value === 'number') {
        bytes += 8;
        } else if (typeof value === 'object'
            && objectList.indexOf(value) === -1) {
        objectList.push(value);

        for (i in value) {
            if (value.hasOwnProperty(i)) {
            stack.push(value[i]);
            }
        }
        }
    }
    return bytes;
    }
