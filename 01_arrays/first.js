const strings = ["a", "b", "c", "d"];
// 4*4= 16 bytes of storage

// accessing an array of strings

console.log(arr[2]); // O(1)

// push
strings.push("e"); // O(1)
// pop
strings.pop(); // O(1)

// adding item at the beginning

strings.unshift("z"); // O(n)

// removing item at the beginning
strings.shift(); // O(n)

// adding item at any position

strings.splice(2, 0, "x"); // O(n)`

console.log(arr);
``;
