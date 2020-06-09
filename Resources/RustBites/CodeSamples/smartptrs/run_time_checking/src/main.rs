/////////////////////////////////////////////////////////////
// run_time_checking::main.rs - demo RefCell               //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 08 Jun 2020  //
/////////////////////////////////////////////////////////////
/*
   Demonstration of deferred ownership rule checking
   to run-time by using RefCell.
*/

#![allow(dead_code)]

use std::cell::RefCell;
use std::io::*;

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
    }
    else {
        mrs = &mut s;
    }
    print!("\n  mrs = {:?}", mrs);
    print!("\n  rs = {:?}", rs);
}
/*-----------------------------------------------
    Borrow checker flow analysis fails even
    if called with p1 != p2.  Borrow checker
    can't tell without analyzing caller - 
    too complicated for compiler analysis.

    Note: same as test_checker1 except now 
    have two predicates.
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
    let s = String::from("this is a test");
    let sp1 = RefCell::new(s);
    print!("\n  &sp1 = {:?}", &sp1.borrow());
    let sp2 = RefCell::new("abc".to_string());
    let mut rsp: &RefCell<String> = &sp2; 
    
    if p1 {
        print!("\n  -- immutable borrow --");
        rsp = &sp1;
        print!("\n  &rsp.borrow() = {:?}", &rsp.borrow());
    }  // borrow ends here
    
    if p2 {
        print!("\n  -- mutable borrow --");
        let mut x = sp1.borrow_mut();
        x.push_str(" and more");
        print!("\n  &x = {:?}", &x);
    }  // borrow ends here
    
    if p3 {  // panic if p3 true
        print!("\n  -- immutable and mutable borrow --");
        let _ = std::io::stdout().flush();
        rsp = &sp1;                    // immutable borrow
        let mut x = sp1.borrow_mut();  // mutable borrow
        x.push_str(" and more");
        print!("\n  &rsp.borrow() = {:?}", &rsp.borrow());
        print!("\n  &x = {:?}", &x);
    }  // never get here - ownership rules violated

    print!("\n  -- final results --");
    print!("\n  &sp1.borrow() = {:?}", &sp1.borrow());
    print!("\n  &rsp.borrow() = {:?}", &rsp.borrow());
}

fn main() {

    // test_checker1(true);     // succeeds
    // test_checker1(false);    // succeeds
    test_checker3(true, true, true);

    println!("\n\n  That's all Folks!\n\n");
}
