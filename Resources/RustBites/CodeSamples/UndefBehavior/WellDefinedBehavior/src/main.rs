// Well_Defined Behavior

fn main() {
    let mut v = Vec::<f64>::new(); 
    v.push(1f64);
    v.push(2f64);
    v.push(3f64);
    print!("\n  v = {:?}", v);
    let av = &v as *const Vec::<f64>;
    print!("\n  address of v = {:?}", av);
    print!("\n  size of v = {:?}", std::mem::size_of::<Vec::<f64>>());

    let r1 = &v[1];
    print!("\n  r1 = {:?}", r1);
    let av1 = &v[1] as *const f64;
    print!("\n  address of v[1] = {:?}", av1);
    let ar1 = r1 as *const f64;
    print!("\n  address of r1 = {:?}", ar1);
    let sr1 = std::mem::size_of_val(r1);
    print!("\n  size of r1 = {:?}", sr1);

    /*---------------------------------
      line below fails to compile
      - will compile if you remove 
        any subsequent use of r1
    */
    v.push(4f64);
    print!("\n  v = {:?}", v);

    print!("\n  value of r1 = {:?}", r1);

    print!("\n  ");
    for x in &v {
        print!("{} ", x);
    }
    /*-------------------------------
      Will panic if we change 3 to 4
      Won't allow reading or writing
      invalid data.
    */
    print!("\n  ");
    for  i in 0..3 {  // iterates over 0 to 2
        print!("{} ", v[i])
    }

    println!("\nThat's all Folks!\n");
}
