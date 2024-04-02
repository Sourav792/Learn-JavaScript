// ************  Recursive Function ************** 
// Defination => A recursive function in JavaScript is a function that calls itself within its own definition. This technique allows you to solve problems by breaking them down into smaller, more manageable sub-problems. Recursive functions are particularly useful for solving problems with a recursive structure or problems that can be expressed in terms of smaller instances of themselves.

// Examples =>

// 1. Tree Traversal: When working with tree data structures like the DOM (Document Object Model) in web development or file systems, recursive functions can efficiently traverse through the tree's nodes.
function traverseDOM(node) {
    console.log(node.tagName);
    for (let i = 0; i < node.children.length; i++) {
        traverseDOM(node.children[i]);
    }
  }
  
  // 2. Searching Algorithms: Recursive functions are commonly used in searching algorithms such as depth-first search (DFS) and binary search.
  function binarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) return -1;
    
    const mid = Math.floor((start + end) / 2);
    
    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) return binarySearch(arr, target, mid + 1, end);
    else return binarySearch(arr, target, start, mid - 1);
  }
  
  // 3. Factorial Calculation: As shown earlier, calculating the factorial of a number using recursion is a classic example.
  function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
  }
  
  // 4. Memoization with Recursion: Recursive functions can be combined with memoization to optimize performance by caching results of previous computations.
  let memo = {};
  
  function fibonacci(n) {
      if (n <= 1) return n;
      if (n in memo) return memo[n];
      
      memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
      return memo[n];
  }
  