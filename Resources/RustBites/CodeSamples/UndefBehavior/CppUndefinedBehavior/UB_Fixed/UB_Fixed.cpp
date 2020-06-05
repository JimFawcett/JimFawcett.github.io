/////////////////////////////////////////////////////////////
// UB_Fixed.cpp - demonstrates standard C++ practice       //
//                                                         //
// Jim Fawcett, https://JimFawcett.github.io, 30 Mar 2020  //
/////////////////////////////////////////////////////////////

#include <vector>
#include <iostream>

using VecInt = std::vector<int>;

void showVec(const VecInt& v) {
  std::cout << "\n  ";
  for (auto i : v) {    // range-based for
    std::cout << i << " ";
  }
}

int main() {

  std::cout << "\n  Fixed Undefined Behavior - dangling reference";
  std::cout << "\n -------------------------------------------------";

  std::vector<int> v;
  v.reserve(3);
  std::cout << "\n  capacity of v = " << v.capacity();
  v.push_back(1);
  v.push_back(2);
  v.push_back(3);
  showVec(v);
  std::cout << "\n  address of v[1] = " << &v[1];
  auto iter1 = ++v.begin(); // references v[1]
  std::cout << "\n  address ref by iter1 = " << &*iter1;
  v.push_back(4);
  showVec(v);
  std::cout << "\n  address of v[1] = " << &v[1];
  try {
    std::cout << *iter1;  // will exit - invalid iterator exeception
  }
  catch (std::exception& ex) {
    std::cout << "\n  exception: " << ex.what();
  }
  catch (...) {  // requires option /EHa
    std::cout << "\n  structured exception thrown";
  }
  std::cout << std::endl;

  std::cout << "\n  Fixed Demo of Undefined Behavior - out of bounds index";
  std::cout << "\n --------------------------------------------------------";

  int array[3]{ 1, 2, 3 };
  std::cout << "\n  ";
  for (auto item : array) {
    std::cout << item << " ";
  }
  std::cout << std::endl;
}