/////////////////////////////////////////////////////////////
// return_values::main.rs - demo Option<T> and Result<T,E> //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 14 Jun 2020  //
/////////////////////////////////////////////////////////////

#![allow(dead_code)]

/*-- show that scopes evaluate to their last expression --*/
fn demo_scope_value() {
    let v1 = { 2 + 3 };
    assert_eq!(v1, 5);
    let v2 = {
        let s = "a string slice";
        s
    };
    assert_eq!(v2, "a string slice");
    let v3 = {
        let _s = "another string";
    };
    assert_eq!(v3, ());
}

/*-- demo Option<T> with collection --*/
fn sum(v: &Vec<i32>) -> Option<i32> {
    if v.is_empty() {
        return None;
    }
    let iter = v.iter();
    let sum = iter.sum();
    Some(sum)
}

/*-- demonstrate file error handling with Result<T,E> --*/
use std::fs::File;
use std::io::prelude::*;
use std::io::Result;

/*-- unwrap or bubble up error (uobue) --*/
fn create_test_file(f: &str, cnt: &str) -> Result<File> {
    print!("\n  attempting to create file {:?}", f);
    let mut file = File::create(f)?; //uobue
    print!("\n  attempting to write contents {:?}", cnt);
    file.write_all(cnt.as_bytes())?; // uobue
    Ok(file)
}

/*-- unwrap or bubble up error (uobue) --*/
fn open_file_and_read(f: &str) -> Result<String> {
    print!("\n  attempting to open file {:?}", f);
    let mut file = File::open(f)?; //uobue
    print!("\n  attempting to read contents");
    let mut buf = String::new();
    file.read_to_string(&mut buf)?; // uobue
    Ok(buf)
}

/*-- run demonstrations --*/
fn main() -> Result<()> {
    demo_scope_value();

    /*-----------------------------------------------------*/
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

    /*-----------------------------------------------------*/
    print!("\n  -- demonstrate Result<T,E> --");
    let file_name = "new_file.txt";
    let content = "\n  first line\n  second line";

    print!("\n  attempting to create file {:?}", file_name);
    let rslt = File::create(file_name);
    if rslt.is_ok() {
        print!("\n  open succeeded");
        let content = "\n  first line\n  second line";
        print!("\n  attempting to write {:?}", content);
        let mut fl = rslt.unwrap();
        let wrslt = fl.write_all(content.as_bytes());
        if wrslt.is_ok() {
            print!("\n  write succeeded");
        } else {
            print!("\n  write failed");
        }
    }
    print!("\n  attempting to open {:?}", file_name);
    let rslt = File::open(file_name);
    if rslt.is_ok() {
        print!("\n  attempting to read contents");
        let mut f = rslt.unwrap();
        let mut buf = String::new();
        let rrslt = f.read_to_string(&mut buf);
        if rrslt.is_ok() {
            print!("\n  contents:{}", buf);
        } else {
            print!("\n  can't read file {:?}", file_name);
        }
    }
    println!();

    /*-----------------------------------------------------*/
    print!("\n  -- demonstrate Result<T,E> using ? --");
    let mut _file = create_test_file(file_name, content)?; // uobue
                                                           /*-- write more text using _file --*/
    _file.write_all(b"\n  third line\n  fourth line")?; // uobue
    let text = open_file_and_read(file_name)?; // uobue
    print!("\n  file contents:{}", text);

    println!("\n\n  That's all Folks!\n\n");
    Ok(())
}
