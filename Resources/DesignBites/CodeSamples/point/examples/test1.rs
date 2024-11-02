/////////////////////////////////////////////////////////////
// point::test1.rs - Demo Point<T> with SpaceTime and      //
//                   Display Traits                        //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 24 Jun 2020  //
/////////////////////////////////////////////////////////////

#![allow(dead_code)]
use chrono::Local;
use point::SpaceTime;
use point::*;
use std::fmt::*;

/*-----------------------------------------------------------
  function accepting SpaceTime<T> trait object
  - Does not depend on a specific type for pt, just the
    SpaceTime<T> trait - like an interface.
  - Can't use name. That's not part of trait.
*/
fn use_space_time_info<T: Debug>(pt: &dyn SpaceTime<T>) {
  print!("\n  -- using SpaceTime trait object --");
  print!("\n  -- display coordinates and time with Display format --");
  print!("\n  coordinates are: {:?}", &pt.get_coordinates());
  print!("\n  point time is: {}", &pt.get_time_string());
}
/*-----------------------------------------------------------
  Exercise Point<i32> and Point<f64> funtionality
*/
fn main() {
  print!("\n  Demonstrating Point Type");
  print!("\n ==========================");

  print!("\n  -- create Point<i32> and display with Display format --");
  let mut pt = Point::<i32>::new();
  pt.set_coordinates(&[1, 2, 3]);
  pt.set_time(Local::now());
  pt.set_name("pt");
  print!("\n  pt = {}", &pt);
  println!();

  use_space_time_info(&pt);
  println!();

  print!("\n  -- mutate coordinates and display again --");
  pt.set_coordinates(&[3, 2, 1]);
  pt.set_name("mutated pt");
  print!("\n  pt = {}", pt);
  print!("\n  coordinates are: {:?}", pt.get_coordinates());
  println!();

  print!("\n  -- display point with Debug format --");
  print!("\n  pt in Debug format: {:?}", pt);
  println!();

  print!("\n  -- creating Point<f64> --");
  let mut ptd = Point::<f64>::new();
  ptd.set_coordinates(&[0.5, -0.5, 1.75]);
  ptd.set_name("ptd");
  print!("\n  ptd = {}", ptd);
  use_space_time_info(&ptd);

  print!("\n\n  That's all Folks!\n\n");
}
