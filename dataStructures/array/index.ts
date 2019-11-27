class MyArray {
  length: number;
  obj: {};
  constructor() {
    this.length = 0;
    this.obj = {};
  }

  push(ele) {
    this.obj[this.length] = ele;
    this.length++;
  }
  pop() {
    const item = this.obj[this.length - 1];
    delete this.obj[this.length - 1];
    this.length--;
    return item;
  }
  delete(index) {
    const item = this.obj[index];
    this.shift(index);
    return item;
  }
  shift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.obj[i] = this.obj[i + 1];
    }
    delete this.obj[this.length - 1];
    this.length--;
  }
}

const newArray = new MyArray();
newArray.push('hi');
newArray.push('hello');
newArray.push('how');
newArray.push('are');
newArray.push('you');
//const popped = newArray.pop();
newArray.delete(1);
newArray.delete(3);
newArray.push('today');
//console.log('TCL: popped', popped);
console.log(JSON.stringify(newArray));
