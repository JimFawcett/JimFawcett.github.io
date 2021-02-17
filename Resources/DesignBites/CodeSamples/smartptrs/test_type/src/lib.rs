#![allow(dead_code)]
#![allow(clippy::print_literal)]

#[derive(Debug, Default)]
pub struct TestLifeCycle {
    count: u32,
}
/*-- any type implementing drop cannot be Copy --*/
impl Drop for TestLifeCycle {
    fn drop(&mut self) {
        print!("\n  TestLifeCycle instance {} dropped", self.count);
    }
}
/*-- any type can be Clone --*/
impl Clone for TestLifeCycle {
    fn clone(&self) -> TestLifeCycle {
        print!("\n  TestLifeCycle instance {} cloned", self.count);
        TestLifeCycle { 
            count: self.count, 
        }
    }
}
/*-- default constructor --*/
impl TestLifeCycle {
    pub fn new() -> TestLifeCycle {
        print!("\n  creating instance {} of TestLifeCycle", 0);
        TestLifeCycle { 
            count: 0, 
        }
    }
    /*-- parameterized constructor --*/
    pub fn param_new(cnt: u32) -> TestLifeCycle {
        print!("\n  creating instance {} of TestLifeCycle", cnt);
        TestLifeCycle { 
            count: cnt,
        }
    }
    /*-- value getter --*/
    pub fn get_value(&self) -> u32 {
        self.count
    }
    /*-- value setter --*/
    pub fn set_value(&mut self, v:u32) {
        self.count = v;
    }
}
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
