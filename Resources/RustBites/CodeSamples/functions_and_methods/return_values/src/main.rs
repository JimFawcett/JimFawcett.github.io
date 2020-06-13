// return_values::main.rs

fn sum(v:&Vec<i32>) -> Option<i32> {
    if v.is_empty() {
        return None;
    }
    let iter = v.iter();
    let sum = iter.sum();
    Some(sum)
}
use std::fs::File;
use std::io::prelude::*;
use std::io::{ Result };

fn open(f:&str) -> Result<File> {
    File::open(f)
}
fn create(f:&str) -> Result<File> {
    File::create(f)
}

fn demo_scope_value() {
    let v1 = { 2 + 3 };
    assert_eq!(v1, 5);
    let v2 = { let s = "a string slice"; s };
    assert_eq!(v2, "a string slice");
    let v3 = { let _s = "another string"; };
    assert_eq!(v3, ());
}

fn main() -> Result<()> {

    demo_scope_value();

    print!("\n  -- demonstrate Option --");
    let v = Vec::<i32>::new();
    let opt = sum(&v);
    if opt.is_none() {
        print!("\n  no content to sum");
    } 

    let v = vec![1, 2, 3, 4, 5];
    let opt = sum(&v);
    if opt.is_some() {
        print!("\n  sum of {:?} is {}", v, opt.unwrap());
    }
    println!();

    print!("\n  -- demonstrate Result --");
    let file_name = "new_file.txt";
    print!("\n  attempting to create {:?}", file_name);
    let rslt = create(file_name);

    let content = "\n  first line\n  second line";
    print!("\n  attempting to write {:?}", content);
    if rslt.is_ok() {
        let mut fl = rslt?; // unwrap or bubble up error (uobue)
        fl.write_all(content.as_bytes())?; // uobue
    }
    print!("\n  attempting to open {:?}", file_name);
    let rslt = open(file_name);
    if rslt.is_ok() {
        print!("\n  attempting to read contents");
        let mut f = rslt?; // uobue
        let mut buf = String::new();
        f.read_to_string(&mut buf)?; // uobue
        print!("\n{}", buf);
    }
    else {
        print!("\n  can't read file {:?}", file_name);
    }

    println!("\n\n  That's all Folks!\n\n");
    Ok(())
}
