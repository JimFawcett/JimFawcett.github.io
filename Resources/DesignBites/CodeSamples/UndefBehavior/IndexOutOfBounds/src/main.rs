/////////////////////////////////////////////////////////////
// index_out_of_bounds::main.rs                            //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 30 Apr 2020  //
/////////////////////////////////////////////////////////////
 
#![allow(clippy::needless_range_loop)]
use std::io::*;

fn main() {
    let array = [1, 2, 3];
    print!("\n  ");
    for i in 0..4 {
        let _ = std::io::stdout().flush();
        print!("{} ", array[i]);
    }
    println!("\n  That's all Folks!\n");
}
