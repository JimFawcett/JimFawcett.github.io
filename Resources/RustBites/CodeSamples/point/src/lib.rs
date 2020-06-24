
extern crate chrono;
use chrono::offset::Local;
use chrono::DateTime;
use std::fmt::*;
use std::time::SystemTime;

trait Time {
    //fn set_time_now(&mut self);
    fn set_time(&mut self, st: SystemTime);
    fn get_time(&self) -> SystemTime;
    fn get_time_string(&self) -> String;
}

#[derive(Debug)]
pub struct Point<T> 
where T:Default + Debug {
    x:T, y:T, z:T, t:SystemTime,
}
impl<T> Time for Point<T>
where T:Default + Debug + Clone {
  fn set_time(&mut self, st: SystemTime) {
    self.t = st;
  }
  fn get_time(&self) -> SystemTime {
      self.t
  }
  fn get_time_string(&self) -> String {
      let datetime: DateTime<Local> = self.t.into();
      datetime.format("%d/%m/%Y %T");
      datetime.to_string()
  }
}
impl<T> Point<T> where T:Default + Debug + Clone {
    pub fn new() -> Point<T> {
        Point {
            x:std::default::Default::default(), 
            y:std::default::Default::default(), 
            z:std::default::Default::default(),
            t:SystemTime::now()
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

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
