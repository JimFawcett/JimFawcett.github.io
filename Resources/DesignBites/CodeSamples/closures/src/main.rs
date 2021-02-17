/////////////////////////////////////////////////////////////
// closures::main.rs - not so basic demo of closure        //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 22 Jun 2020  //
/////////////////////////////////////////////////////////////
/*
   Closure are like functions, except that they can capture
   data used for their evaluation. 
*/
fn demo1() {

    print!("\n  -- closure demo1 --");

    let v1 = vec![1, 2, 3, 4, 5, 6];
    print!("\n  v1 = {:?}", v1);

    let mut sum = 0;
    // capture of sum as mutable borrow
    let mut add = |t: &i32| -> i32 { sum += t; sum };

    for i in &v1 {
        add(i);
    }
    /*-----------------------------------------------
      statement below fails to compile as sum is 
      already borrowed as mutable
      -----------------------------------------------
      print!("\n  sum = {}", sum); 

      add returns immutable copy of sum so this
      works:
    */
    print!("\n  sum = {}", add(&0));

    let v2 = vec![0, -1, -2];
    print!("\n  v2 = {:?}", v2);

    for i in &v2 {
        add(i);
    }
    print!("\n  sum = {}", add(&0));

    let v3 = vec![6, 4, 2, 0, -2, -4];
    print!("\n  v3 = {:?}", v3);

    for _i in v3.clone().iter().map(add) {} 
    /*-----------------------------------------------
      add moved into map, ends borrow of sum, so can
      use sum, but can't use add(&0)
    */
    print!("\n  sum = {}", sum);
}

fn demo2() {

    print!("\n  -- closure demo2 --");

    let v1 = vec![1, 2, 3, 4, 5, 6];
    let v2 = vec![0, -1, -2];

    let mut sum = 0;
    // capture of sum as move
    let mut add = move |t: i32| -> i32 { 
        sum += t;
        //print!("\n--{}", sum);
        sum
    };

    for i in &v1 {
        add(*i);
    }
    print!("\n  sum = {}", add(0));

    for i in &v2 {
        add(*i);
    }
    print!("\n  sum = {}", add(0));

    let v3 = vec![6, 4, 2, 0, -2, -4];
    for item in v3.clone().iter() { add(*item); } 
    print!("\n  sum = {}", add(0));
}

fn main() {

    demo1();
    println!();

    demo2();

    println!("\n\n  That's all Folks!\n\n");
}
