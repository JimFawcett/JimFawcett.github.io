#![allow(dead_code)]

use std::cell::RefCell;
//use std::rc::Rc;
use std::fmt::Debug;
use std::any::type_name;
use std::time::*;
use test_type::TestLifeCycle;

/*-- same as print!("\n  sp = {:?}", sp) --*/
fn show_type_value<T:Debug>(name:&str, t:&T) {
    print!("\n  {} = {:?}", name, t);
    print!("\n  {}", show_type(t));
}

fn show_type<'a, T:Debug>(_t:T) -> &'a str where T:Debug {
    type_name::<T>()
}
/////////////////////////////////////////////////////////////
// Exercise #1 - passing Boxed String between scopes
/////////////////////////////////////////////////////////////
// We create elements on the heap by Boxing them. 
// - That allows lifetime of the Boxed data to be
//   longer than the function in which it was created.
// - Passing is efficient because Box has size of pointer

type Item = (String, TestLifeCycle);

fn creator(s : &str) -> Box<Item> {
    let mut s = String::from(s);
    s.push_str("\n    started in creator, ");
    let item : Item = (s, TestLifeCycle::new());
    Box::new(item)
}
fn intermediate(mut hs: Box<Item>) -> Box<Item> {
    let mut s = hs.0;  // move our
    s.push_str("\n    went to intermediate, ");
    hs.0 = s;  // move in
    hs
}
fn terminus(mut hs: Box<Item>) {
    let mut s = hs.0;
    s.push_str("\n    then ended in terminus");
    hs.0 = s;
    print!("\n  {}", hs.0);
}
fn exercise_a() {

    print!("\n  -- exercise #1 --");
    terminus(intermediate(creator("trace: ")));
    println!();
}
///////////////////////////////////////////////////////
// Exercise #2 - shared string
// ////////////////////////////////////////////////////
type Shared = std::rc::Rc<std::cell::RefCell<String>>;

fn modifier(r:&Shared, id:&str) {
    let mut s = r.borrow_mut();
    s.push_str(id);
}
fn exer2() {
    //use std::cell::RefCell;
    use std::rc::Rc;
    let shared = Rc::new(RefCell::new(String::new()));
    let shr1 = Rc::clone(&shared);
    let shr2 = Rc::clone(&shared);
    for _i in 0..4 {
        modifier(&shr1, "shr1");
        modifier(&shr2, "shr2");
    }
    let s: String = shared.borrow().to_string();
    print!("\n  shared string = {:?}", &s);
}

// // Exercise b
    
// struct Node  { name:&'static str, children:Vec<Rc<Node>> }

// fn exercise_b() {
//   let n1 = Node { name:"n1", children:Vec::new() };
//   let n2 = Node { name:"n2", children:Vec::new(Rc::new(n1)) };
// }
fn exercise_1() {

    print!("\n  -- exercise #1 --");

    let t:Duration = Duration::from_micros(0);
    let time_array : [Duration; 5] = [t; 5];    // not mutable

    let mut t_init = RefCell::new(time_array);
    let start = std::time::Instant::now();
    for i in 0..5 {
        let inner = t_init.get_mut();
        inner[i] = start.elapsed();
    }
    let time_array = t_init.into_inner();    // still not mutable
    print!("\n  time_array = {:?}", time_array);
    print!("\n  type is {:?}\n",show_type(time_array));

}
/////////////////////////////////////////////////////////////
// This is an exploration of creating and managing arrays.
// Almost always you should prefer to use std::Vec.

fn exercise_2() {

    print!("\n  -- exercise #2 --");
    /*-- create static array in stack and swap --*/
    let s1 = "one".to_string();
    let s2 = "two".to_string();
    let s3 = "three".to_string();
    let s4 = "four".to_string();
    let s5 = "five".to_string();

    let mut stack_array = 
        [ 
            s1.clone(), 
            s2.clone(), 
            s3.clone(), 
            s4.clone(), 
            s5.clone()
        ];
    print!("\n  stack_array = {:?}", stack_array);
    stack_array.swap(0,4);
    print!("\n  stack_array = {:?}", stack_array);

    /*-- create static array in heap and swap --*/
    let mut heap_array = Box::new([s1, s2, s3, s4, s5]);
    print!("\n  heap_array = {:?}", heap_array);
    heap_array.swap(0,4);
    print!("\n  heap_array = {:?}", heap_array);

    /*-- create dynamic vector in heap and swap --*/
    let n = 5;
    let mut v = Vec::<String>::new();
    for i in 0..n {
        v.push((i + 1).to_string());
    }
    let mut heap_vec = Box::new(v);
    print!("\n  heap_vec = {:?}", heap_vec);
    heap_vec.swap(0,4);
    print!("\n  heap_vec = {:?}\n", heap_vec);

    /*-- create array with run-time size and store in heap --*/
    let n = 7;  // run-time size, could have been passed in by user
    let mut vn = Vec::<String>::new();
    for i in 0..n {
        vn.push((2*i).to_string());
    }
    /*-- here's array, created as slice of vec --*/
    let arr_n = &mut vn[..];
    show_type_value("arr_n", &arr_n);

    let heap_arr_n = Box::new(arr_n);
    show_type_value("heap_arr_n", &heap_arr_n);

    heap_arr_n.swap(0,6);
    show_type_value("heap_arr_n", &heap_arr_n);

    /*-- bring array back to stack, consuming src --*/
    let arr_back = *heap_arr_n;
    show_type_value("arr_back", &arr_back);

    /*-- curious things you can do with arrays --*/

    /////////////////////////////////////////////
    // Can copy string into array of Strings
    arr_back[2] = "third element".to_string();

    /////////////////////////////////////////////
    // This sequence of statements copies chars
    // to effect swap.  Uses clone because
    // Strings can't be moved out of array.
    let first: String = arr_back[0].clone();
    let last: String = arr_back[6].clone();
    arr_back[0] = last;
    arr_back[6] = first;
    /////////////////////////////////////////////
    // This statment just swaps pointers
    //-------------------------------------------
    // arr_back.swap(0,6);

    show_type_value("swapped arr_back", &arr_back);

    println!();
}

fn main() {

    exer2();
    // exercise_a();
    // exercise_1();
    // exercise_2();


    println!("\n\n  That's all Folks!\n\n");
}
