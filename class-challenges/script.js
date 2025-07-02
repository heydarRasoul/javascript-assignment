class ManageItems {
  constructor(items = []) {
    this.items = items;
    this.count = 1;
  }

  addItem(item) {
    this.items.push(item);
    console.log(this.items);
  }

  removItem() {
    if (this.items.length > 0) {
      while (this.items.length > 0) {
        if (this.count % 2 !== 0) {
          const removeFront = this.items.shift();
          console.log(removeFront);
        } else {
          const removeEnd = this.items.pop();
          console.log(removeEnd);
        }
        this.count++;
      }
    }
  }
}

const numArray = new ManageItems([1, 2, 3, 4]);

numArray.addItem(5);
numArray.removItem();
