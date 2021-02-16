/////////////////////////////////////////////////////////////
// modeling::main.rs - Experiment with OO style modeling   //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 26 Jun 2020  //
/////////////////////////////////////////////////////////////
/*
   This crate demonstrates that all the usual benefits 
   of Object Oriented Design can be achieved with Rust.

   There is a bit more boiler plate required because
   Rust will not do auto upcasts and does not implement
   overriding.  We have to simulate that.
*/
#![allow(dead_code)]
use std::fmt::*;

/*-----------------------------------------------------------
  Demonstrates modeling domain with polymorphism, using 
  Rust traits
*/
fn test_worker() {

    /*-------------------------------------------------------
      Base traits: 
      - Person & Employee are base traits for modeling workers.  
      - PersonBase & EmployeeBase are used to implement upcast.
    */
    /*-- base trait for modeling people --*/
    trait Person: PersonBase {
        /* may define lunch differently for each Person type */
        fn lunch(&self);
        fn set_name(&mut self, nm: &str);
        fn get_name(&self) -> String;
    }
    /*-- upcast --*/
    trait PersonBase {
        fn as_person(&self) -> &dyn Person;
    }
    /*-- upcast works for any Person type --*/
    impl<T: Person> PersonBase for T {
        fn as_person(&self) -> &dyn Person {
            self
        }
    }
    /*-- base trait for modeling employees --*/
    trait Employee : EmployeeBase {
        /* may define do_work differently for each type */
        fn do_work(&self);
    }
    /*-- upcast --*/
    trait EmployeeBase {
        fn as_employee(&self) -> &dyn Employee;
    }
    /*-- upcast works for any Employee type --*/
    impl<T: Employee> EmployeeBase for T {
        fn as_employee(&self) -> &dyn Employee {
            self
        }
    }
    /*-------------------------------------------------------
      Implementing Dev type that has Person and Employee
      traits
    */
    struct Dev {
        name: String,
    }
    /*-- Person methods defined for any Dev instance --*/
    impl Person for Dev {
        fn lunch(&self) {
            print!("\n    eating today's lunch - pizza");
        }
        fn set_name(&mut self, nm: &str) {
            self.name = nm.to_string();
        }
        fn get_name(&self) -> String {
            self.name.clone()
        }
    }
    /*-- Employee methods defined for any Dev instance --*/
    impl Employee for Dev {
        fn do_work(&self) {
            print!("\n    working on code");
        }
    }
    /*-- for simplicity no direct methods for Dev --*/
    impl Dev {
        /*-- put methods here --*/
    }
    
    /*-------------------------------------------------------
      Implementing TeamLead type that has Person and Employee
      traits with different content, from Dev, in methods,
      e.g., simulated override.
    */
    struct TeamLead {
        name: String,
    }
    /*-- Person methods defined for TeamLead instance --*/
    impl Person for TeamLead {
        fn lunch(&self) {
            print!("\n    eating lunch - soup and salad");
        }
        fn set_name(&mut self, nm: &str) {
            self.name = nm.to_string();
        }
        fn get_name(&self) -> String {
            self.name.clone()
        }
    }
    /*-- Employee methods defined for TeamLead instance --*/
    impl Employee for TeamLead {
        fn do_work(&self) {
            print!(
                "\n    preparing build for production run"
            );
        }
    }
    /*-- for simplicity no direct methods for TeamLead --*/
    impl TeamLead {
        /*-- put methods here --*/
    }
    
    /*-------------------------------------------------------
      Polymorphic function work(...) runs for Employee type,
      e.g., for any type type implements Employee.
    */
    fn work(em: &dyn Employee) {
        em.do_work();
    }
    
    /*-------------------------------------------------------
      Polymorphic function eat_lunch(...) runs for Person type.
    */
    fn eat_lunch(pr: &dyn Person) {
        pr.lunch();
    }
    
    /*-------------------------------------------------------
      Defining derived Worker trait that combines
      Person and Employee traits
      - empty implementation; that's provided in base traits
    */
    trait Worker : Person + Employee {}
    impl Worker for Dev {}
    impl Worker for TeamLead {}
    
    /*-------------------------------------------------------
      Polymorphic function work_day operates for any type 
      that is both a Person and an Employee, e.g., accepts
      Dev, TeamLead, ...
    */
    fn work_day(wkr: &dyn Worker) {
        print!("\n  {}'s workday:", wkr.get_name());
        /////////////////////////////////////////////////
        // Both sets of methods produce the same result
        //-----------------------------------------------
        // print!("\n -- using trait methods --");
        // wkr.do_work();
        // wkr.lunch();
        // wkr.do_work();
        //-----------------------------------------------
        print!(
            "\n -- using polymorphic functions with upcast --"
        );
        work(wkr.as_employee());
        eat_lunch(wkr.as_person());
        work(wkr.as_employee());
    }

    print!("\n  === test_worker() ===");
    println!();
    
    /*-------------------------------------------------------
      Creating Workers joe and jane and testing their
      work_day.  Note polymorphic operation.
    */
    let joe = Dev { name: "Joe".to_string() };
    let jane = TeamLead { name: "Jane".to_string() };
    work_day(&joe);
    work_day(&jane);    
}

/*-----------------------------------------------------------
  Illustrates modeling domain using composition.
*/
fn test_dinosours() {

    /*-- first, define Eras, e.g., Juriassic, Cretaceous, ... --*/

    pub trait Era {
        //-------------------------------------------------------
        // Traits do not support default method implementations,
        // trait methods cannot be overridden.
        // That may be coming with specialization but that's not
        // standard Rust yet. 
        //-------------------------------------------------------
        // fn start(&self) -> f64;
        // fn end(&self) -> f64;
        // fn name(&self) -> String;
        //-------------------------------------------------------
        fn epic() -> String {
            "million years ago".to_string()
        }
    }
    pub trait Juriassic : Era {
        fn start(&self) -> f64 {
            201.3
        }
        fn end(&self) -> f64 {
            145.0
        }
        fn name(&self) -> String {
            "Juriassic".to_string()
        }
    }
    pub trait Cretaceous : Era {
        fn start(&self) -> f64 {
            145.0
        }
        fn end(&self) -> f64 {
            66.0
        }
        fn name(&self) -> String {
            "Cretaceous".to_string()
        }
    }
    impl<T> Era for T {
        fn epic() -> String {
            "million years ago".to_string()
        }
    }
    #[derive(Debug)]
    struct JuriassicEra;
    /*-- impl trait for type --*/
    impl Juriassic for JuriassicEra { 
        /* 
            Trait methods defined in trait;
            can't always do that.
        */ 
    }
    /*-- impl type methods --*/
    impl JuriassicEra {
        fn new() -> Self {
            Self {}
        }    
    }
    #[derive(Debug)]
    struct CretaceousEra;
    /*-- impl trait for type --*/
    impl Cretaceous for CretaceousEra {
        /* 
            Trait methods defined in trait;
            can't always do that.
        */ 
    }
    /*-- impl type methods --*/
    impl CretaceousEra {
        fn new() -> Self {
            Self {}
        }    
    }
    
    /*-- next, define creatures from the eras --*/

    #[derive(Debug)]
    struct Brachiosaurus {
        era: JuriassicEra,
        about : String,
    }
    impl Brachiosaurus {    
        fn new() -> Self {
            type JE = JuriassicEra;
            Brachiosaurus {
                era: JE::new(),
                about:
                    "Brachiosaurus was a sauropod herbivore"
                    .to_string(),
            }
        }
        fn about(&self) {
            type JE = JuriassicEra;
            print!("\n  {}", self.about);
            print!(
                "\n  Era: {}\n    starting {} {}\n    ending {} {}", 
                self.era.name(), self.era.start(), JE::epic(), 
                self.era.end(), JE::epic()
            );
        }
    }
    
    #[derive(Debug)]
    struct TRex {
        era: CretaceousEra,
        about : String,
    }
    impl TRex {    
        fn new() -> TRex {
            type CE = CretaceousEra;
            TRex {
                era: CE::new(),
                about:
                    "TRex was a bi-pedal predator".to_string(),
            }
        }
        fn about(&self) {
            type CE = CretaceousEra;
            print!("\n  {}", self.about);
            print!(
                "\n  Era: {}\n    starting {} {}\n    ending {} {}", 
                self.era.name(), self.era.start(), CE::epic(), 
                self.era.end(), CE::epic()
            );
        }
    }
    
    print!("\n  === test_dinosours() ===");
    println!();
    
    let br = Brachiosaurus::new();
    br.about();
    println!();

    let tr = TRex::new();
    tr.about();
}

fn main() {

    test_worker();
    println!();
    test_dinosours();

    println!("\n\n  That's all Folks!\n\n");
}
