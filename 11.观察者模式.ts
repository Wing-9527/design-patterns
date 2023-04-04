class Subject {
  observers: Observer[] = [];
  add(observer: Observer) {
    this.observers.push(observer);
  }
  remove(observer: Observer) {
    let index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    } else {
      throw new Error();
    }
  }
  notify(msg: string) {
    this.observers.forEach((observer) => {
      observer.update(msg);
    });
  }
}

class Observer {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  update(msg: string) {
    // @ts-ignore
    console.log(`${msg} ~ ${this.name}`);
  }
}

let ob1 = new Observer("ob1");
let ob2 = new Observer("ob2");
let ob3 = new Observer("ob3");

let subject = new Subject();

subject.add(ob1);
subject.add(ob2);
subject.add(ob3);

subject.notify("hello");

/**
 * output:
    hello ~ ob1
    hello ~ ob2
    hello ~ ob3
 */
