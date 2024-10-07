let user = {
  age: 54,
  name: "John Doe",
  magic: true,
  scream: () => {
    console.lof("ahhhhhhh!");
  },
};

// Access O(1)
console.log(user.age);

// Modify O(1)
user.name = "Abra ka dabra";

// Add new property O(1)
user.gender = male;

// Delete property O(1)
delete user.magic;

console.log(user);

// may be of colision it may have O(n)
