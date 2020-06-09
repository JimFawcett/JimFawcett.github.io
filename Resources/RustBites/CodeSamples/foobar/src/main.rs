use std::cell::RefCell;
use std::fmt::Debug;
use std::any::type_name;

/*-- same as print!("\n  sp = {:?}", sp) --*/
// fn show<T:Debug>(name:&str, t:&T) {
//     print!("\n  {} = {:?}", name, t);
// }

fn show_type<'a, T:Debug>(_t:T) -> &'a str where T:Debug {
    type_name::<T>()
}

fn exercise_2() {

    let mut v = Vec::<f64>::new();
    for i in 0..5 {
        let val = i as f64;
        v.push(val + 0.5);
    }
    print!("\n  v = {:?}", &v);
    print!("\n  type is {:?}\n",show_type(&v));

    let array = &v[0..5];
    let initializer = RefCell::new(array);
    let time_array = initializer.into_inner();
    print!("\n  time_array = {:?}", time_array);
    print!("\n  type is {:?}\n",show_type(time_array));
}
fn exercise_1() {

    /*-- create static array in stack and swap --*/
    let s1 = "one".to_string();
    let s2 = "two".to_string();
    let s3 = "three".to_string();
    let s4 = "four".to_string();
    let s5 = "five".to_string();

    let mut stack_array = 
        [ 
            s1.clone(), 
            s2.clone(), 
            s3.clone(), 
            s4.clone(), 
            s5.clone()
        ];
    print!("\n  stack_array = {:?}", stack_array);
    stack_array.swap(0,4);
    print!("\n  stack_array = {:?}", stack_array);

    /*-- create static array in heap and swap --*/
    let mut heap_array = Box::new([s1, s2, s3, s4, s5]);
    print!("\n  heap_array = {:?}", heap_array);
    heap_array.swap(0,4);
    print!("\n  heap_array = {:?}", heap_array);

    /*-- create dynamic vector in heap and swap --*/
    let n = 5;
    let mut v = Vec::<String>::new();
    for i in 0..n {
        v.push((i + 1).to_string());
    }
    let mut heap_vec = Box::new(v);
    print!("\n  heap_vec = {:?}", heap_vec);
    heap_vec.swap(0,4);
    print!("\n  heap_vec = {:?}\n", heap_vec);
}

fn main() {

    exercise_1();
    exercise_2();


    println!("\n\n  That's all Folks!\n\n");
}
