class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItmem(index);
    return item;
  }
  shiftItmem(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push(10);
newArr.push(11);
newArr.push(12);
newArr.push(13);
newArr.push(14);
newArr.push(15);
newArr.push(16);
// newArr.pop();
newArr.delete(2);
console.log(newArr.get(0));
console.log(newArr);
