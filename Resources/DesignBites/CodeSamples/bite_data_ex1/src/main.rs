// byte_data_ex1::main.rs

fn main() {

    let x = 3.5;
    let y = x;  // copy
    
    print!("\n  x value = {}, y value = {}", x, y);
    let rx = &x;
    let ry = &y;
    // next statement automatically dereferences rx and ry
    print!("\n  *rx value = {}, *ry value = {}", rx, ry);

    /*-----------------------------------------------------
       Proving that a copy was made requires using 
       pointers, which is safe as long as they are
       not dereferenced.

       You need to consult Dr. Google to see how to
       display the pointers.

       {:p} converts a raw pointer value to Hexadecimal 
       form and displays it.

       stackoverflow.com is a dear friend
    */
    /*-- to show address in hex --*/
    print!("\n  x addrs = {:p}, y addrs = {:p}", rx, ry);
    let px = rx as *const f64;
    let py = ry as *const f64;
    print!("\n  x addrs = {:x}, y addrs = {:x}", px as i32, py as i32);
    
    /*-- to show address in decimal --*/
    print!("\n  x addrs = {}, y addrs = {}", px as i32, py as i32);

    print!("\n\n  That's all Folks!\n\n");
}
