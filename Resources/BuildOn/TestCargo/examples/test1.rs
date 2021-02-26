// test1.rs 

use test_cargo::{TestRust};

fn main() {
    let tr = TestRust::new();
    tr.say_hello("Jim");

    print!("\n\n  That's all Folks!\n\n");
}