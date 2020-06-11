#![allow(dead_code)]
//use std::iter::Iterator;
use std::fmt::Debug;

fn show_coll<C>(c:&C) -> Option<()> 
  where C:IntoIterator + Clone + Debug, C::Item: Debug {

    let mut iter = c.clone().into_iter();
    print!("\n  {:?}", iter.next()?);
    for item in iter {
        print!(", {:?}", &item);
    }
    Some(())
}

fn demo_array_int() -> Option<()> {
    
    let mut arr : [i32; 5] = [0; 5];
    show_coll(&&arr)?;
    arr = [1, 2, 3, 4, 5];
    show_coll(&&arr)?;
    let arr_slice = &arr[..];
    show_coll(&arr_slice);
    arr[1] = -1;
    show_coll(&&arr)?;
    Some(())
}

fn demo_vec_int() {

    let mut vec = vec![1, 2, 3, 4, 5];
    show_coll(&vec);
    vec = vec![5, 4, 3, 2, 1];
    show_coll(&vec);
    vec[1] = -4;
    show_coll(&vec);
    let _elem = vec.pop();
    vec.push(42);
    show_coll(&vec);
    vec.insert(1, -42);
    show_coll(&vec);
    vec.remove(2);
    show_coll(&vec);
    let vec = Vec::from("a string");
    show_coll(&vec);
    print!("\n  ");
    for ch in vec {
        print!("{}", ch as char);
    }
}

fn main() {

    demo_array_int();
    demo_vec_int();
    println!("\n\n  That's all Folks!\n\n");
}
