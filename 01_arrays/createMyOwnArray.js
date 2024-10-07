class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  // O(1)
  get(index) {
    return this.data[index];
  }

  // O(1)
  push(value) {
    this.data[this.length] = value;
    this.length++;
    return this.length;
  }

  // O(1)
  pop() {
    if (this.length === 0) return undefined;
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.data.length--;
    return lastItem;
  }
  // O(n)
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.push(3);
newArray.push(4);
newArray.push(5);
newArray.push(6);
console.log(newArray.get(1)); // 2
console.log(newArray.pop()); //6
console.log(newArray.delete(1)); // 2
console.log(newArray.get(1)); // undefined
console.log(newArray.length); // 1
