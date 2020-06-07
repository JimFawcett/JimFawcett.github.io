/////////////////////////////////////////////////////////////
// show_box::main.rs - demo Box<T> pointer to heap         //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 06 Jun 2020  //
/////////////////////////////////////////////////////////////
/* 
   let sp = Box::new(T::new());
   /*--------------------------------------------*/
      sp has the interface of both Box and T
      so you can call T methods on sp
   /*--------------------------------------------*/
   let vl = sp.getter();    // T method
   sp.setter(vl);           // T method
   let spc = sp.clone();    // Box method
   let t = *sp;  // move heap value to stack
   Box deallocates heap memory in its drop method
*/
#![allow(clippy::print_literal)]

use core::fmt::{ Debug };

/*-- same as print!("\n  sp = {:?}", sp) --*/
fn show<T:Debug>(name:&str, t:&T) {
    print!("\n  {} = {:?}", name, t);
}

struct SpaceAtEnd;
impl Drop for SpaceAtEnd {
    fn drop(&mut self) {
        print!("\n\n");
    }
}

fn main() {

    let putline = || print!("\n");

    type TLC = test_type::TestLifeCycle;

    let _cosmetic = SpaceAtEnd;

    /*-- create Box pointing to TLC on heap --*/
    print!("\n  -- create Box pointer to TLC on heap --");
    let sp = Box::new(TLC::new());
    show("sp", &sp);
    putline();

    /*-- extract data from boxed TLC --*/
    print!("\n  -- access member of TLC using Box --");
    let v = sp.get_value();
    show("v ", &v);
    putline();

    /*-- clone Boxed item --*/
    print!("\n  -- clone Box pointer to TLC on heap --");
    let mut spc = sp.clone();
    show("spc", &spc);
    putline();

    /*-- mutate Boxed value --*/
    print!("\n  -- mutate TLC through Box --");
    spc.set_value(42);
    show("spc", &spc);
    show("v ", &spc.get_value());
    show("sp", &sp);
    putline();

    /*-- make mut reference to Box --*/
    print!("\n  -- create reference to Box pointer --");
    let rspc = &mut spc;
    rspc.set_value(21);
    show("rspc", &rspc);    // holds new value
    show("spc", &spc);      // holds new value too
    putline();

    /*-- move TLC from Box back to stack with deref --*/
    print!("\n  -- move contents of Box back to stack with deref --");
    let tlc = *sp;  // move
    show("tlc", &tlc);

    // statement below won't compile since sp has been moved
    // show("sp", &sp);

    println!("\n\n  That's all Folks!");

}  /*-- drop Boxed item --*/
