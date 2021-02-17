/////////////////////////////////////////////////////////////
// show_rc::main.rs - demo Rc<T> ref counted ptr           //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 06 Jun 2020  //
/////////////////////////////////////////////////////////////
/* 
   let tlc = test_type::TestLifeCycle;
   let mut rc1 = Rc::new(tlc)
   /*------------------------------------------------*/
      std::rc::Rc is a reference counted pointer.
      - Rc::new(value) creates a pointer to value. 
      - Rc::clone creates a new pointer to the same
        source inner value, adding 1 to ref count.
      - Rc::drop decrements the ref count, dropping
        the inner value on zero.
      - Note, it does no harm to drop a stack value
        as long as there is no attempt to use after.
      - 
   /*------------------------------------------------*/
   let rc2 = rc1.clone();
   let rc3 = Rc::clone(&rc2);
   let opt = Rc::get_mut(&rc1);
   where opt: Option<Some(&mut tlc)>
*/
use core::fmt::{ Debug };
use std::rc::Rc;

/*-- same as print!("\n  sp = {:?}", sp) --*/
#[allow(clippy::print_literal)]
fn show<T:Debug>(name:&str, t:&T) {
    print!("\n  {} = {:?}", name, t);
}

struct SpaceAtEnd;
impl Drop for SpaceAtEnd {
    fn drop(&mut self) {
        print!("\n\n");
    }
}

fn main() {

    let putline = || print!("\n");
    let _cosmetic = SpaceAtEnd;

    print!("\n  -- create instance of TestLifeCycle in stack --");
    let tlc = test_type::TestLifeCycle::new();
    putline();

    print!("\n  -- create Rc ptr to value in stack --");
    let mut rc1 = Rc::new(tlc);
    show("rc1", &rc1);
    show("Rc strong count", &Rc::strong_count(&rc1));
    show("rc1 inner value", &rc1.get_value());
    putline();

    print!("\n  -- attempt to mutate inst through Rc ptr --");
    let opt_mut_rc1 = Rc::get_mut(&mut rc1);
    match opt_mut_rc1 {
        Some(val) => {
            /*-- make mutable reference --*/
            let mut_rc1 = &mut *val;
            mut_rc1.set_value(42);
            show("rc1", &rc1);
        },
        None => { 
            print!(
                "\n  can't have multiple mutable references"
            );
        }
    }
    putline();

    print!("\n  -- create new Rc ptr to inst in stack --");
    let mut rc2 = rc1.clone();
    show("rc2", &rc2);
    show("Rc strong count", &Rc::strong_count(&rc2));
    putline();

    print!("\n  -- attempt to mutate inst through Rc ptr --");
    let opt_mut_rc2 = Rc::get_mut(&mut rc2);
    match opt_mut_rc2 {
        Some(val) => {
            /*-- make mutable reference --*/
            let mut_rc2 = &mut *val;
            mut_rc2.set_value(21);
            show("rc2", &rc2);
        },
        None => { 
            print!(
                "\n  can't have multiple mutable references"
            );
        }
    }
    putline();

    /*-- alternate clone syntax --*/
    print!("\n  -- create another new Rc ptr to inst in stack --");
    let mut rc3 = Rc::clone(&rc1); 
    show("rc3", &rc3);
    show("Rc strong count", &Rc::strong_count(&rc1));
    putline();

    /*-- alternate matching syntax --*/
    print!("\n  -- attempt to mutate inst through Rc ptr --");
    let opt_mut_rc3 = Rc::get_mut(&mut rc3);
    if let Some(val) = opt_mut_rc3 {
        /*-- make mutable reference --*/
        let mut_rc3 = &mut *val;
        mut_rc3.set_value(21);
        show("rc3", &rc2);
    }
    else {
        print!(
            "\n  can't have multiple mutable references"
        );
    }
    putline();

    // print!("\n  dropping rc1");
    // drop(rc1);
    // print!("\n  dropping rc2");
    // drop(rc2);
    // print!("\n  dropping rc3");
    // drop(rc3);
    // putline();    

    /*-------------------------------------------------------
       Help with Option processing, used above: 
       -----------------------------------------------------
       The code below illustrates destructuring an option
       with both if let and match constructs.
       These will be discussed again in the Error Handling
       Bite.
    */
    let maybe_cake = Some("this code is a piece of cake! :-)");
    let not_cake = std::option::Option::<&str>::None;
    if let Some(cake) = maybe_cake {    // cake is a defined identifier
        print!("\n  {}", cake);         // due to if let destructuring
    }
    
    let maybe_cake: Option<&str> = not_cake;
    match maybe_cake {
        Some(cake) => print!("\n  {}", cake),
                                        // now, cake is defined by
                                        // match destructuring
        None => print!("\n  this code is not a piece of cake!! :-(")
    }

    println!("\n\n  That's all Folks!");
}
