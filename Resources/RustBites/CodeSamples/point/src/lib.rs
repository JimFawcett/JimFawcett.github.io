/////////////////////////////////////////////////////////////
// point::lib.rs - Demo Traits                             //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 24 Jun 2020  //
/////////////////////////////////////////////////////////////

use chrono::offset::Local;
use chrono::DateTime;
use chrono::{Datelike, Timelike};
use std::fmt::*;


pub trait Time {
    fn set_time(&mut self, st: DateTime<Local>);
    fn get_time(&self) -> DateTime<Local>;
    fn get_time_string(&self) -> String;
}

#[derive(Debug)]
pub struct Point<T> 
where T:Default + Debug {
    x:T, y:T, z:T, t:DateTime<Local>,
}
/*-- implement Time trait --*/
impl<T> Time for Point<T>
where T:Default + Debug + Clone {
    fn set_time(&mut self, st: DateTime<Local>) {
        self.t = st;
  }
  fn get_time(&self) -> DateTime<Local> {
      self.t
  }
  fn get_time_string(&self) -> String {
      let year = self.t.year().to_string();
      let mon = self.t.month().to_string();
      let day = self.t.day().to_string();
      let hour = self.t.hour().to_string();
      let min = self.t.minute().to_string();
      let sec = self.t.second().to_string();
      let dt = format!(
          "{}::{:0>2}::{:0>2} {:0>2}::{:0>2}::{:0>2}", 
          year, mon, day, hour, min, sec
      );
      dt
  }
}
/*-- implement Display trait --*/
impl<T> Display for Point<T>
where T:Default + Debug + Clone {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(
            f, "{{ {:?}, {:?}, {:?}, {} }}", 
            &self.x, &self.y, &self.z, 
            &self.get_time_string()
        )
    }
}
/*-- implement Point methods --*/
impl<T> Point<T> where T:Default + Debug + Clone {
    pub fn new() -> Point<T> {
        Point {
            x:std::default::Default::default(), 
            y:std::default::Default::default(), 
            z:std::default::Default::default(),
            t:Local::now()
        }
    }
    pub fn default() -> Point<T> {
        Point::new()
    }
    /*-- return array of three spatial coordinates --*/
    pub fn get_coordinates(&self) -> [T; 3] {
        [self.x.clone(), self.y.clone(), self.z.clone()]
    }
    /*-- set coordinates from array slice --*/
    pub fn set_coordinates(&mut self, coor: &[T; 3]) {
        self.x = coor[0].clone();
        self.y = coor[1].clone();
        self.z = coor[2].clone();
    }
    /*-- time is returned with Time::get_time() --*/ 
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn construct () {
        let pt = Point::<i32>::new();
        assert_eq!(pt.get_coordinates(), [0, 0, 0]);
    }
    #[test]
    fn set_coor() {
        let mut pt = Point::<i32>::new();
        pt.set_coordinates(&[1, 2, 3]);
        assert_eq!(pt.get_coordinates(), [1, 2, 3]);
    }
    #[test]
    fn get_time() {
        use chrono::{Duration};
        let two_sec = Duration::seconds(2);
        let ts_start = Local::now() - two_sec;
        let pt = Point::<i32>::new();
        let ts_now = pt.get_time();
        let ts_stop = Local::now() + two_sec;
        assert!(ts_start < ts_now);
        assert!(ts_now < ts_stop);
    }
}
