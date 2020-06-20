/////////////////////////////////////////////////////////////
// functions_and_methods::main.rs - functions Bite demos   //
//                                                         //  
// Jim Fawcett, https://JimFawcett.github.com, 19 Jun 2020 //
/////////////////////////////////////////////////////////////

// https://stackoverflow.com/questions/36390665/how-do-you-pass-a-rust-function-as-a-parameter
// https://joshleeb.com/blog/rust-traits-trait-objects/

/*-----------------------------------------------------
  pass arguments by value 
  - passing by value results in Move for non-copy types
  - we say that the s and t arguments are consumed
 */
fn f(mut s:String, t:String) -> String {
    s.push(' ');
    s.push_str(&t);
    s  // value of last expression is returned
}
/*-----------------------------------------------------
  pass arguments by reference
  - passing s and t does not consume their referends 
*/
fn g(s:&mut String, t:&str) -> String {
    s.push(' ');
    s.push_str(t);
    s.to_string()
}
/*-----------------------------------------------------
  h_in_2 accepts function argument via static dispatch
  - F: Fn ... specifies accepted function signatures
*/
fn h_in_1<F: Fn(i32) -> String>(i:i32, f: F) -> String {
  f(i)
}
/*-----------------------------------------------------
  h_in_2 accepts function argument via dynamic dispatch
  - Fn ... specifies accepted function signatures
*/
fn h_in_2(i:i32, f: &dyn Fn(i32) -> String) -> String {
  f(i)
}
/*-----------------------------------------------------
  function passed to, and returned from demonstration
  functions, below
*/
fn test_function(i:i32) -> String {
    i.to_string()
}
/*-----------------------------------------------------
  static dispatch of returned function
  - uses impl to specify that return satisfies Fn ... 
*/
fn h_out_1() -> impl Fn(i32) -> String {
    &test_function
}
/*-----------------------------------------------------
   dynamic dispatch of returned function 
   - uses lifetime annotation 'a
   - &dyn to include vtable
*/
fn h_out_2<'a>() -> &'a dyn Fn(i32) -> String {
    &test_function
}

fn main() {

    print!("\n  -- passing function arguments by value --");
    let s1 = String::from("a string");
    print!("\n  s1 = {:?}", s1);
    let s2 = String::from("and more");
    print!("\n  s2 = {:?}", s2);
    
    let s3 = f(s1, s2);
    
    print!("\n  s3 = {:?}", s3);
    // print!("\n  s2 = {:?}", s2);
    print!("\n  can't print s2, it's been moved");
    // print!("\n  s1 = {:?}", s1);
    print!("\n  can't print s1, it's been moved");
    println!();

    print!("\n  -- passing function arguments by reference --");
    let mut s1 = String::from("a refreshed string");
    let s2 = "and a new more";
    let s3 = g(&mut s1, s2);

    print!("\n  s3 = {:?}", s3);
    print!("\n  s2 = {:?}", s2);
    print!("\n  s1 = {:?}", s1);
    print!("\n  note that s1 has been changed as a side-effect");
    println!();

    print!("\n  -- passing function as argument --");
    let s = h_in_1(42, &test_function);  // static dispatch
    print!("\n  s = {}", s);
    let s = h_in_2(42, &test_function);  // dynamic dispatch
    print!("\n  s = {}", s);
    println!();

    print!("\n  -- function returning function --");
    let s = h_out_1()(42);  // static dispatch
    print!("\n  s = {}", s);
    let s = h_out_2()(42);  // dynamic dispatch
    print!("\n  s = {}", s);
    println!();

    print!("\n  -- defining function inside another function --");
    fn whooaaa() {
        print!("\n  inside main!");
    }
    whooaaa();

    print!("\n\n  That's all Folks!\n\n");
}
