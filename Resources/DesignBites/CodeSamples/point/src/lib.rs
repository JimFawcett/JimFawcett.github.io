/////////////////////////////////////////////////////////////
// point::lib.rs - Demo Traits                             //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 24 Jun 2020  //
/////////////////////////////////////////////////////////////
/*
   Point represents points in 3-dimensional space and time.
   Example hypothetical applications:
   - Aircraft flight navigation systems
   - Airport and Marine port area management systems
   - Autonomous vehicle control
   - Drawing applications
   Point implements a SpaceTime trait.  That allows a function
   to use space and time information from any object that 
   implements the trait.  
   
   For example, in an Aircraft, points might be used as a 
   fundamental data structure for capturing instrument information, 
   navigation computations, and in flight recording.  
   
   Each of these applications might use different internal data, 
   e.g., ids, other information, ... but a function that accepts 
   a SpaceTime trait object can extract that information from any 
   of them.
*/
use chrono::offset::Local;
use chrono::DateTime;
use chrono::{Datelike, Timelike};
use std::fmt::*;

/*-----------------------------------------------------------
  declare SpaceTime<T> trait
  - note that this trait is generic  
*/
pub trait SpaceTime<T> {
    fn get_coordinates(&self) -> [T; 3];
    fn set_coordinates(&mut self, coor: &[T; 3]);
    fn set_time(&mut self, st: DateTime<Local>);
    fn get_time(&self) -> DateTime<Local>;
    fn get_time_string(&self) -> String;
}
/*-- define Point<T> type --*/
#[derive(Debug)]
pub struct Point<T> 
where T:Default + Debug {
    x:T, y:T, z:T, t:DateTime<Local>, n:String,
}
/*-- implement Time trait --*/
impl<T> SpaceTime<T> for Point<T>
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
    /*-- set coordinates from array slice --*/
    fn set_coordinates(&mut self, coor: &[T; 3]) {
        self.x = coor[0].clone();
        self.y = coor[1].clone();
        self.z = coor[2].clone();
    }
    /*-- return array of three spatial coordinates --*/
    fn get_coordinates(&self) -> [T; 3] {
        [self.x.clone(), self.y.clone(), self.z.clone()]
    }
    /*-- time is returned with Time::get_time() --*/ 
}
/*-- implement Display trait --*/
impl<T> Display for Point<T>
where T:Default + Debug + Clone {
    fn fmt(&self, f: &mut std::fmt::Formatter) -> std::fmt::Result {
        write!(
            f, "{{ {:?}, {:?}, {:?}, {}, {:?} }}", 
            &self.x, &self.y, &self.z, 
            &self.get_time_string(), &self.n
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
            t:Local::now(),
            n:String::default()
        }
    }
    pub fn default() -> Point<T> {
        Point::new()
    }
    pub fn set_name(&mut self, name: &str) {
        self.n = name.to_string();
    }
    pub fn get_name(&self) -> &str {
        &self.n
    }
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
