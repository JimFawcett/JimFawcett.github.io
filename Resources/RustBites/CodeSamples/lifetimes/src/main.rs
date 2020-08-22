/////////////////////////////////////////////////////////////
// lifetimes::main.rs - demo of lifetime annotation        //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 21 Aug 2020  //
/////////////////////////////////////////////////////////////

/*---------------------------------------------------------
  Rust ensures that no reference outlives its referend,
  so it always has valid data.  Lifetime annotation helps
  the Rust borrow checker ensure that this rule is 
  enforced.

  Most code does not need lifetime annotation, but functions
  that return references do need it, as shown below.
*/
/*---------------------------------------------------------
  This code fails to compile - Rust needs help to ensure
  that the returned reference lives a least as long as
  the input references.
*/
// fn min_str1(s1:&str, s2:&str) -> &str {
//     let s3 = s1.to_string();
//     let s4 = s2.to_string();
//     if s3 < s4 {
//         s1
//     }
//     else {
//         s2
//     }
// }

/*---------------------------------------------------------
  Compiles - We've told Rust that the returned reference 
  lives a least as long as the input references.
  - generic parameter 'a declares a lifetime
  - the parameter annotations say that the returned
    reference lifetime is specified to be no longer
    than either of the input reference lifetimes
  - Rust borrow checker uses this signature to check
    the lifetime constraints at the call site
  - The annotations don't change the way the rules
    work.  They simply allow Rust to verify them at
    the call site.
*/
fn min_str2<'a>(s1:&'a str, s2:&'a str) -> &'a str {
    let s3 = s1.to_string();
    let s4 = s2.to_string();
    if s3 < s4 {
        s1
    }
    else {
        s2
    }
}

fn main() {

    // let s1 = min_str1("one", "two");
    // print!("\n  s2 = {:?}",s1);

    let s2 = min_str2("zebra", "ardvarrk");
    print!("\n  s2 = {:?}",s2);
    assert_eq!(s2, "ardvarrk");

    println!("\n\n  That's all folks!\n\n");
}
