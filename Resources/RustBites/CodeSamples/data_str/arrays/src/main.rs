#![allow(dead_code)]
use std::fmt::Debug;
use std::any::*;
/*-----------------------------------------------------------
   Display comma separated list of collection items
   - shows how to build function accepting iterable 
     collections
   - returns Option::None if collection is empty
*/
fn show_coll<C>(c:&C) -> Option<()> 
  where C:IntoIterator + Clone + Debug, C::Item: Debug {

    let mut iter = c.clone().into_iter();
    /*-------------------------------------------
      returns Option if no next element using 
      ? try operator
    */
    print!("\n  {:?}", iter.next()?);
    /*-- breaks when no next element --*/
    for item in iter {
        print!(", {:?}", &item);
    }
    Some(())
}

fn show_type_value<T:Debug>(name:&str, t:&T) {
    print!("\n  value of {} = {:?}", name, t);
    print!("\n  type is: {}", show_type(t));
}

fn show_type<'a, T:Debug>(_t:T) -> &'a str where T:Debug {
    type_name::<T>()
}
/*-----------------------------------------------------------
   Show slice as a stack of rows with span elements in row
   - nice illustration of Iterator methods
*/
fn show_fold<T:Debug>(t:&[T], span:usize, width:usize) {
    // let iter = t.iter();
    print!("\n  ");
    let mut count = 0;
    for bt in t {
        count = count + 1;
        print!("{:wd$?}", bt, wd = width);
        if count == span {
            print!("\n  ");
            count = 0;
        }
    }
    // let times = 1 + t.len()/span;
    // for _i in 0..times {
    //     for bt in t.iter().skip(_i * span).take(span) {
    //         print!("{:wd$?} ", bt, wd = width);
    //     }
    //     if _i < times - 1 {
    //         print!("\n  ");
    //     }
    // }
}

fn demo_array_int() -> Option<()> {
    
    print!("\n  -- demo_array_int --");
    let mut arr : [i32; 5] = [0; 5];
    show_coll(&&arr)?;
    arr = [1, 2, 3, 4, 5];
    show_coll(&&arr)?;
    let arr_slice = &arr[..];
    show_coll(&arr_slice);
    arr[1] = -1;
    show_coll(&&arr)?;
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    show_fold(&arr, 5, 4);
    Some(())
}

fn demo_vec_int() {

    print!("\n  === demo_vec_int ===");
    let mut vec = vec![1, 2, 3, 4, 5];
    show_coll(&vec);
    print!("\n  -- assign vectors --");
    vec = vec![5, 4, 3, 2, 1];
    show_coll(&vec);
    print!("\n  -- replace element --");
    vec[1] = -4;
    show_coll(&vec);
    print!("\n  -- pop and push element --");
    let _elem = vec.pop();
    vec.push(42);
    show_coll(&vec);
    print!("\n  -- insert element --");
    vec.insert(1, -42);
    show_coll(&vec);
    print!("\n  -- remove element --");
    vec.remove(2);
    show_coll(&vec);
    print!("\n  -- extract full slice --");
    let array = &vec[..];  // full slice
    show_coll(&array);
    print!("\n  -- extract partial slice --");
    let array = &vec[1..4];  // partial slice
    show_coll(&array);
    print!("\n  -- build from string --");
    let vec = Vec::from("a string");
    show_coll(&vec);
    print!("\n  -- iterate over vector --");
    print!("\n  ");
    for ch in vec {
        print!("{}", ch as char);
    }
}

fn demo_struct() {
    print!("\n  -- demo_struct --");
    #[derive(Debug)]
    struct S { a:i8, b:String, c:f64 }
    let s: S = S { a:42, b:String::from("String"), c:3.1415927 };
    assert_eq!(s.a, 42);
    show_type_value("s", &s);
    print!("\n  s.a = {}, s.b = {}, s.c = {}", s.a, s.b, s.c);
    println!();

    #[derive(Debug)]
    struct T(i8, String, f64);
    let t:T = T(42, String::from("String"), 3.1415927);
    assert_eq!(t.0, 42);
    show_type_value("t", &t);
    print!("\n  t.0 = {}, t.1 = {}, t.2 = {}", t.0, t.1, t.2);
    println!();

    struct U;
    impl U {
        fn what(&self) -> &Self {
            print!("\n  unit structs only have functions");
            self
        }
        fn more(&self) {
            print!(" -- no more");
        }
    }
    let u:U = U;
    u.what().more();
}

fn demo_string() {
    print!("\n  === demo_string ===");
    let s1 : String = String::from("a test string");
    show_type_value("s1", &s1);
    // print!("\n  s1 = {:?}", s1);
    print!("\n  -- iterating through String characters --");
    let iter = s1.chars();
    print!("\n  ");
    for ch in iter {
        print!("{} ", ch);
    }
    print!("\n  -- extracting bytes --");
    let s1_bytes = s1.as_bytes();
    print!("\n  bytes are:");
    show_fold(&s1_bytes, 5, 5);
    // This works too, will wrap in []
    // print!("\n  bytes are: {:?}", b"a test string");
    
    print!("\n  -- extracting a slice --");
    let slc = &s1[0..6];
    show_type_value("&s1[0..6]", &slc);
}

fn demo_map() {
    print!("\n  -- demo_map --");
    let mut m = std::collections::HashMap::<u8, String>::new();
    m.insert(0, String::from("zero"));
    m.insert(1, String::from("one"));
    m.insert(2, String::from("two"));
    m.insert(3, String::from("three"));

    let iter = m.iter();
    print!("\n  {{ ");
    for item in iter {
        print!("{:?} ", item);
    }
    print!("}}");
}

// fn demo_struct() {
//     print!("\n  -- demo_struct --");
// }

fn main() {

    demo_array_int();
    // demo_struct();
    // demo_string();
    demo_vec_int();
    // demo_map();

    println!("\n\n  That's all Folks!\n\n");
}
