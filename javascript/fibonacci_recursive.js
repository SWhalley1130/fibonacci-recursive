function fibonacci(n) {
  // type your code here

  // if (n==0 || n==1){
  //   return n;
  // }

  // let newArray=[0,1]

  // if (newArray.length<n+1){
  //   return newArray[newArray.length-1]
  // }

  // fibonacci(n)

  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
