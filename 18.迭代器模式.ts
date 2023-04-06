class IteratorPattern<T> implements Iterator<T> {
  private list: T[];
  private pointer: number = 0;
  constructor(list: T[]) {
    this.list = list;
  }
  next() {
    let listItem: T = this.list[this.pointer];
    let result: IteratorResult<T> = {
      done: !listItem,
      value: listItem,
    };
    this.pointer++;
    return result;
  }
}

let myIterator = new IteratorPattern([1, 2, 3, "abc"]);

// @ts-ignore
console.log(myIterator.next());
// @ts-ignore
console.log(myIterator.next());
// @ts-ignore
console.log(myIterator.next());
// @ts-ignore
console.log(myIterator.next());
// @ts-ignore
console.log(myIterator.next());

/**
 * output
    { done: false, value: 1 }
    { done: false, value: 2 }
    { done: false, value: 3 }
    { done: false, value: 'abc' }
    { done: true, value: undefined }
 */
