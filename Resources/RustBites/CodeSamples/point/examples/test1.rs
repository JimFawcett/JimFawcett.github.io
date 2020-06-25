/////////////////////////////////////////////////////////////
// point::test1.rs - Demo Point<T> with                    //
//                   Time and Display Traits               //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 24 Jun 2020  //
/////////////////////////////////////////////////////////////

#![allow(dead_code)]
use point::{*};
use point::Time;
use chrono::{Local, Datelike, Timelike};

fn test_time() {
    print!("\n  Test Time Evaluation");
    print!("\n ======================");

    let now = Local::now();
    let (_is_pm, mut hour) = now.hour12();
    if _is_pm {
        hour += 12;
    }
    let (_is_common_era, year) = now.year_ce();
    print!("\n  time is {}", now);
    print!(
        "\n  year: {}, month: {:0>2}, day: {:0>2}", 
        year, now.month(), now.day()
    );
    print!(
        "\n  hour: {:0>2}, min: {:0>2}, sec: {:0>2}", 
        hour, now.minute(), now.second()
    );
    println!();
}
fn main() {

    // test_time();

    print!("\n  Demonstrating Point Type");
    print!("\n ==========================");

    print!("\n  -- create Point<i32> and display with Debug format --");
    let mut pt = Point::<i32>::new();
    pt.set_coordinates(&[1, 2, 3]);
    pt.set_time(Local::now());
    print!("\n  pt = {:?}", &pt);
    print!("\n  -- display coordinates and time with Display format --");
    print!("\n  coordinates are: {:?}", &pt.get_coordinates());
    print!("\n  point time is: {}", &pt.get_time_string());
    print!("\n  -- mutate coordinates and display again --");
    pt.set_coordinates(&[3, 2, 1]);
    print!("\n  pt = {}", pt);
    print!("\n  coordinates are: {:?}", pt.get_coordinates());

    println!("\n\n  That's all Folks!\n\n");
}
