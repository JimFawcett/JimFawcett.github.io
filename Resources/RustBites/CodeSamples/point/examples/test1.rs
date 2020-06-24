// point::test1::main.rs

extern crate point;
use point::{*};

fn main() {

    print!("\n  Demonstrating Point Type");
    print!("\n ==========================");

    let mut pt = Point::<i32>::new();
    pt.set_coordinates(&[1, 2, 3]);
    print!("\n  pt = {:?}", &pt);
    print!("\n  coordinates are: {:?}", &pt.get_coordinates());
    pt.set_coordinates(&[3, 2, 1]);
    print!("\n  pt = {:?}", pt);
    print!("\n  coordinates are: {:?}", pt.get_coordinates());

    println!("\n\n  That's all Folks!\n\n");
}
