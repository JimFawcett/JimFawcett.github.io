/*------------------------------------------------------------------
    using JavaScript class 
  ------------------------------------------------------------------*/

  const nlp = "<br />";
  const tabp = "&nbsp;&nbsp;"

  class Point4D {
    constructor(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      this.t = new Date();
    }
    show(name) {
      document.write(name, ": Point4D {", nlp, tabp);
      document.write(this.x, ", ", this.y, ", ", this.z, nlp, tabp);
      document.write(this.t);
      document.write(nlp, "}", nlp);
    }
    update_time() {
      this.t = new Date();
    }
  }

