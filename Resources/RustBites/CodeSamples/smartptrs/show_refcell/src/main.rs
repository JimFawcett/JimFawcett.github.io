/////////////////////////////////////////////////////////////
// show_refcell::main.rs - demo RefCell<T> smart pointer   //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 06 Jun 2020  //
/////////////////////////////////////////////////////////////
/* 
   RefCell holds a mutable memory location with dynamically
   checked borrow rules.

   let sp = std::cell::RefCell::new(T::new());
   /*--------------------------------------------*/
      sp has the interface of both Box and T
      so you can call T methods on sp
   /*--------------------------------------------*/
   let r1 = sp.borrow()     // returns a Ref<T>
                            // panics if r1 was mutably borrowed
                            // access inner with sp.borrow()
                            //   due to auto dereferencing
   let r2 = sp.borrow_mut() // returns a RefMut<T>
                            // panics if r2 was already borrowed
                            // access inner with sp.borrow_mut()
                            //   due to auto dereferencing
   drop(r1) dropps inner t
*/
#![allow(clippy::print_literal)]
#![allow(unused_imports)]

use core::fmt::{ Debug };
use std::cell::{ RefCell, Ref, RefMut };
use std::any::type_name;

/*-- same as print!("\n  sp = {:?}", sp) --*/
fn show<T:Debug>(name:&str, t:&T) {
    print!("\n  {} = {:?}", name, t);
}

fn show_type<'a, T:Debug>(_t:T) -> &'a str where T:Debug {
    type_name::<T>()
}

struct SpaceAtEnd;
impl Drop for SpaceAtEnd {
    fn drop(&mut self) {
        print!("\n\n");
    }
}

fn main() {
    /*-------------------------------------------------------
       Note: 
       This program will panic if both Blk #1 and Blk #2
       are uncommented.  That's because the borrowing
       rules are violated.

       If one is commented out - it doesn't matter which 
       one - the program completes successfully.

       This illustrates that RefCell defers borrow checking
       to run-time.
    */

    let putline = || print!("\n");
    let _cosmetic = SpaceAtEnd;

    let tlc = test_type::TestLifeCycle::new();

    print!("\n  -- create RefCell pointer to tlc --");
    /*-- note sp is statically immutable --*/
    let sp = RefCell::new(tlc);
    show("sp", &sp);
    putline();

    // Blk #1
    // print!("\n  -- borrow inner TLC from RefCell --");
    // let b = sp.borrow();
    // show("b ", &b);
    // let v = b.get_value();
    // show("v ", &v);
    // putline();

    // Blk #2
    print!("\n  -- attempt to mutably borrow inner TLC from RefCell --");
    /*-------------------------------------------------------
       - Even though sp is immutable, we can get a mutable
         reference, b2.
       - RefCell defers borrow checking to runtime. 
       - This succeeds only if there are no other current borrows.
         You can see that by uncommenting the code in blk #1
    */
    let mut b2 = sp.borrow_mut();   // returns RefMut<T>
    show("b2", &b2);
    b2.set_value(42);               // automatically dereferenced
    show("b2", &b2);
    let v = b2.get_value();         // here too
    show("v ", &v);
    putline();

    print!("\n  -- exploring borrowed type --");
    type TLC = test_type::TestLifeCycle;
    let sp2 = RefCell::new(TLC::new());
    let r:Ref<TLC> = sp2.borrow();
    show("r:Ref<TLC>", &show_type(r));
    putline();

    print!("\n  -- exploring automatic dereferencing of Ref<T> --");
    /*-- r was moved in show_type(r) so get another --*/
    let r = sp2.borrow();
    let tlc = &*r;
    show("r:Ref<T>", &r);
    show("tlc", &tlc);
    putline();

    print!("\n  -- exploring mutably borrowed type --");
    let sp2 = RefCell::new(TLC::new());
    let r:RefMut<TLC> = sp2.borrow_mut();
    show("r:RefMut<TLC>", &show_type(r));
    putline();

    print!("\n  -- exploring automatic dereferencing of RefMut<T> --");
    /*-- r was moved in show_type(r) so get another --*/
    let r = sp2.borrow_mut();
    let tlc = &*r;
    show("r:RefMut<T>", &r);
    show("tlc", &tlc);

    println!("\n\n  That's all Folks!");

}
