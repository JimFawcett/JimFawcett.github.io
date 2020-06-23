// methods::main.rs

#![allow(dead_code)]
// use std::fmt::*;

fn demo_basic() {

    print!("\n  -- demo_basic --");
    
    #[derive(Debug)]
    pub struct Demo { value: i32 }
    impl Demo {
        pub fn new() -> Demo {
            Demo {
                value:0
            }
        }
        pub fn set_value(&mut self, v: i32) {
            self.value = v;
        }
        pub fn get_value(&self) -> i32 {
            self.value
        }
    }

    let mut d = Demo::new();
    d.set_value(42);
    print!("\n  d = {:?}", d);
    print!("\n  d.value = {:?}", d.get_value());
}
fn demo_point() {

    print!("\n  -- demo_point --");

    use std::fmt::*;

    #[derive(Debug, Default)]
    pub struct Point<T> 
    where T:Default + Debug {
        x:T, y:T, z:T
    }
    impl<T> Point<T> where T:Default + Debug + Clone {
        pub fn new() -> Point<T> {
            Point {
                x:std::default::Default::default(), 
                y:std::default::Default::default(), 
                z:std::default::Default::default() 
            }
        }
        pub fn default() -> Point<T> {
            Point::new()
        }
        pub fn get_coordinates(&self) -> [T; 3] {
            [self.x.clone(), self.y.clone(), self.z.clone()]
        }
        pub fn set_coordinates(&mut self, coor: &[T; 3]) {
            self.x = coor[0].clone();
            self.y = coor[1].clone();
            self.z = coor[2].clone();
        } 
    }
    let mut pt = Point::<i32>::new();
    pt.set_coordinates(&[1, 2, 3]);
    print!("\n  pt = {:?}", &pt);
    print!("\n  coordinates are: {:?}", &pt.get_coordinates());
    pt.set_coordinates(&[3, 2, 1]);
    print!("\n  pt = {:?}", pt);
    print!("\n  coordinates are: {:?}", pt.get_coordinates());
}
/*-- Method Demonstrations --*/

fn main() {

    print!("\n  === demo methods ===");
    println!();
    demo_basic();
    println!();
    demo_point();

    println!("\n\n  That's all Folks!\n\n");
}
