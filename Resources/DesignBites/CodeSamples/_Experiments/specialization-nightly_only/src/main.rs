// Trait Specialization works only on nightly
//   cargo +nightly run

#![feature(specialization)]

trait MyTrait {
    fn myfunc(&self);
}

struct NotSpecial { _x: usize, _y: usize, }

struct Special {
     _x: usize, _y: usize,
}

impl<T> MyTrait for T {
    default fn myfunc(&self) {
        print!("\n  default myfunc");
    }
}

impl MyTrait for Special {
    fn myfunc(&self) {
        print!("\n  specialized myfunc");
    }
}

fn main() {
    let s = NotSpecial{ _x:0, _y:1 };
    s.myfunc();

    let s = Special{ _x:0, _y:1 };
    s.myfunc();
    
    print!("\n\n  That's all Folks!\n\n");
}
