/////////////////////////////////////////////////////////////
// show_arc::main.rs - demo Arc<T> ref counted ptr         //
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
use std::sync::Arc;

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

    print!("\n  -- create Arc ptr to value in stack --");
    let mut arc1 = Arc::new(tlc);
    show("arc1", &arc1);
    show("Arc strong count", &Arc::strong_count(&arc1));
    show("arc1 inner value", &arc1.get_value());
    putline();

    print!("\n  -- attempt to mutate inst through Arc ptr --");
    let opt_mut_arc1 = Arc::get_mut(&mut arc1);
    match opt_mut_arc1 {
        Some(val) => {
            /*-- make mutable reference --*/
            let mut_arc1 = &mut *val;
            mut_arc1.set_value(42);
            show("arc1", &arc1);
        },
        None => { 
            print!(
                "\n  can't have multiple mutable references"
            );
        }
    }
    putline();

    print!("\n  -- create new Arc ptr to inst in stack --");
    let mut arc2 = arc1.clone();
    show("arc2", &arc2);
    show("Arc strong count", &Arc::strong_count(&arc2));
    putline();

    print!("\n  -- attempt to mutate inst through Arc ptr --");
    let opt_mut_arc2 = Arc::get_mut(&mut arc2);
    match opt_mut_arc2 {
        Some(val) => {
            /*-- make mutable reference --*/
            let mut_arc2 = &mut *val;
            mut_arc2.set_value(21);
            show("arc2", &arc2);
        },
        None => { 
            print!(
                "\n  can't have multiple mutable references"
            );
        }
    }
    putline();

    /*-- alternate clone syntax --*/
    print!("\n  -- create another new Arc ptr to inst in stack --");
    let mut arc3 = Arc::clone(&arc1); 
    show("arc3", &arc3);
    show("Arc strong count", &Arc::strong_count(&arc1));
    putline();

    /*-- alternate matching syntax --*/
    print!("\n  -- attempt to mutate inst through Arc ptr --");
    let opt_mut_arc3 = Arc::get_mut(&mut arc3);
    if let Some(val) = opt_mut_arc3 {
        /*-- make mutable reference --*/
        let mut_arc3 = &mut *val;
        mut_arc3.set_value(21);
        show("arc3", &arc2);
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

    println!("\n\n  That's all Folks!");
}
