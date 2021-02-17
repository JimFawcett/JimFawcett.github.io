/////////////////////////////////////////////////////////////
// run_time_checking::main.rs - demo RefCell               //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 08 Jun 2020  //
/////////////////////////////////////////////////////////////
/*
   Demonstration of deferring ownership rule checking
   to run-time by using RefCell.
*/

#![allow(dead_code)]

use std::cell::RefCell;
use std::io::*;

fn putline() { println!(); }

/*-----------------------------------------------
   Borrow checker flow analysis accepts.
   Have either immutable or mutable borrow,
   but not both.  Borrow checker analyzed this!
*/
fn test_checker1(p: bool) {
    let mut s = String::from("this is a test");
    let mut rs: &String = &"rs".to_string(); 
    let mut mrs: &mut String = &mut "mrs".to_string();
    if p {
        rs = &s;
        print!("\n  rs = {:?}", rs);
    }
    else {
        mrs = &mut s;
        print!("\n  mrs = {:?}", mrs);
    }
    print!("\n  mrs = {:?}", mrs);
    print!("\n  rs = {:?}", rs);
    putline();
}
/*-----------------------------------------------
    Borrow checker flow analysis fails even
    if called with p1 != p2.  Borrow checker
    can't tell without analyzing caller - 
    too complicated for compiler analysis.

    Note: same as test_checker1 except now 
    has two predicates.
*/
// fn test_checker2(p1: bool, p2: bool) {
//     let mut s = String::from("this is a test");
//     let mut rs: &String = &"rs".to_string(); 
//     let mut mrs: &mut String = &mut "mrs".to_string();
//     if p1 {
//         rs = &s;
//     }
//     if p2 {
//         mrs = &mut s;
//     }
//     print!("\n  mrs = {:?}", mrs);
//     print!("\n  rs = {:?}", rs);
// }
/*-----------------------------------------------
   Replicates functionality of test_checker2.
   Uses RefCell to defer checking to run-time,
   So borrow checker accepts.
*/
fn test_checker3(p1: bool, p2: bool, p3:bool) {

    print!(
        "\n  -- test_checcker3({}, {}, {}) --", 
        p1, p2, p3
    );
    let s = String::from("this is a test");       // replacement
    let sp1 = RefCell::new(s);
    print!("\n  &sp1 = {:?}", &sp1.borrow());
    let sp2 = RefCell::new("rsp2".to_string());   // initial val
    let mut rsp2 = &sp2;
    let sp3 = RefCell::new("rsp3".to_string());   // initial val
    let mut rsp3: &RefCell<String> = &sp3; 
    
    if p1 {
        print!("\n  -- immutable borrow --");
        rsp2 = &sp1;
        print!("\n  &rsp2.borrow() = {:?}", &rsp2.borrow());
    }
    
    if p2 {
        print!("\n  -- mutable borrow --");
        let mut x = sp1.borrow_mut();
        x.push_str(" and more");
        rsp3 = &sp1;
        print!("\n  &rsp3 = {:?}", &rsp2);
    }
    
    if p3 {  // panic if p3 true
        print!("\n  -- immutable and mutable borrow --");
        let _ = std::io::stdout().flush();
        rsp2 = &sp1;                    // immutable borrow
        let mut x = sp1.borrow_mut();   // mutable borrow
        x.push_str(" and more");        // mutates sp1 inner
        /*-- looks like immutable borrow so compiles --*/
        rsp3 = &sp1;
        print!("\n  &rsp2.borrow() = {:?}", &rsp2.borrow());
        print!("\n  &rsp3.borrow() = {:?}", &rsp3.borrow());
    }  // never get here - ownership rules violated

    print!("\n  -- final results --");
    print!("\n  &rsp2.borrow() = {:?}", &rsp2.borrow());
    print!("\n  &rsp3.borrow() = {:?}", &rsp3.borrow());
    putline();
}

fn main() {

    test_checker1(true);             // succeeds
    test_checker1(false);            // succeeds
    test_checker3(true, true, false);   // succeeds
    test_checker3(true, true, true);    // panics

    println!("\n\n  That's all Folks!\n\n");
}
