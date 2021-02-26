// lib.rs

#[derive(Debug, Clone)]
pub struct TestRust;
impl TestRust {
    pub fn new() -> TestRust {
        TestRust {}
    }
    pub fn say_hello(&self, name: &str) {
        print!("\n  Hello {:?}, welcome to BuildOn", name);
    }
}
#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        assert_eq!(2 + 2, 4);
    }
}
