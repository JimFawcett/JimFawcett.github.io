/////////////////////////////////////////////////////////////
// life_cycle::main.rs - demo object lifecycle events      //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 02 Jun 2020  //
/////////////////////////////////////////////////////////////

// Define life cycle test type

#![allow(dead_code)]

#[derive(Debug)]
pub struct TestLifeCycle {
    count: u32,
}
/*-- any type implementing drop cannot be Copy --*/
impl Drop for TestLifeCycle {
    fn drop(&mut self) {
        print!("\n  TestLifeCycle instance {} dropped", self.count);
    }
}
/*-- any type can be Clone --*/
impl Clone for TestLifeCycle {
    fn clone(&self) -> TestLifeCycle {
        print!("\n  TestLifeCycle instance {} cloned", self.count);
        TestLifeCycle { 
            count: self.count, 
        }
    }
}
/*-- default constructor --*/
impl TestLifeCycle {
    pub fn new() -> TestLifeCycle {
        print!("\n  creating instance {} of TestLifeCycle", 0);
        TestLifeCycle { 
            count: 0, 
        }
    }
/*-- parameterized constructor --*/
pub fn param_new(cnt: u32) -> TestLifeCycle {
        print!("\n  creating instance {} of TestLifeCycle", cnt);
        TestLifeCycle { 
            count: cnt,
        }
    }
/*-- value getter --*/
pub fn value(&self) -> u32 {
        self.count
    }
}
/////////////////////////////////////////////////////////////
// Test functions

fn demo_drop() {

    print!("\n--testing drop --");
    let tlc1 = TestLifeCycle::new();
    print!("\n  tlc1: {:?}", tlc1);
    let tlc2 = tlc1.clone(); 
    print!("\n  tlc2 clone: {:?}", tlc2);
    /////////////////////////////////////////////////////////
    // comment out next statement to see drop when
    // leaving demo_drop scope
    drop(tlc1);

    /////////////////////////////////////////////////////////
    // statements below won't compile after drop
    //-------------------------------------------------------
    // let val = tlc.value();
    // print!("\n  value of tlc = {}", val);
    
    print!("\n--leaving demo_drop scope--");
}

fn demo_order_of_destruction() {
    
    print!("\n--testing order of destruction--");
    let _first = TestLifeCycle::param_new(1);
    let _second = TestLifeCycle::param_new(2);
    let _third = TestLifeCycle::param_new(3);
    /*-------------------------------------------------------
       next statement hides previous statement,
       Rust describes this as shadowing 
    */
    print!("\n--shadowing last instance--");
    let _third = TestLifeCycle::param_new(3);

    print!("\n--leaving demo_order_of_destruction scope--");
}

fn demo_collection_drop() {

    print!("\n--testing collection_drop--");

    print!("\n--building Vec of TestLifeCycles--");
    let mut v = Vec::<TestLifeCycle>::new();
    for i in 0..5 {
        let item = TestLifeCycle::param_new(i);
        v.push(item);
    }

    for tlc in &v {
        print!("\n  tlc value = {}", tlc.value());
    }

    print!("\n  size of Vec<TestLifeCycle> = {}", v.len());
    
    /////////////////////////////////////////////////////////
    // uncomment the statement below to drop before 
    // leaving scope
    //-------------------------------------------------------
    // drop(v);

    print!("\n--leaving demo_collection_drop scope--");
}

fn demo_move() {

    print!("\n--testiing move--");

    let tlc1 = TestLifeCycle::param_new(42);
    print!("\n  created instance tlc1: {:?}", tlc1);
    let tlc2 = tlc1;  // move
    print!("\n  tlc2, created by moving tlc1: {:?}", tlc2);

    print!("\n--leaving demo_move scope--");
}

fn main() {

    let putline = || print!("\n");

    demo_drop();
    putline();
    demo_order_of_destruction();
    putline();
    demo_collection_drop();
    putline();
    demo_move();

    print!("\n\n  That's all Folks!\n\n");
}
