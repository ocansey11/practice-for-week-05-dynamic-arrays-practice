class DynamicArray {

  constructor( defaultSize=4) {
    // Your code here
    this.data = new Array(defaultSize)
    this.length = 0
    this.capacity = defaultSize
  }


  read(index) {
    // Your code here
    return this.data[index]
  }

  unshift(val) {
    // Your code here
    for (let i = this.length; i > 0; i--) {
      this.data[i] = this.data[i - 1];
    }
    this.data[0] = val;
    this.length = val;
  }
}


module.exports = DynamicArray;
