/**
 * 模板方法模式由两部分组成，第一部分是抽象父类，第二部分是具体的实现子类。通常在抽象父类中封装了子类的算法框架，包括实现一些公共方法以及封装子类中所有方法的执行顺序。子类通过继承这个抽象类也继承了整个算结构，并且可以选择重写父类的方法。
 */

abstract class AbstractClass {
  public getName() {
    // @ts-ignore
    console.log("get name");
  }
  public getAge() {
    // @ts-ignore
    console.log("get age");
  }
  public getGender() {
    // @ts-ignore
    console.log("get gender");
  }
  public init() {
    this.getName();
    this.getAge();
    this.getGender();
  }
}

class ConcreteClass extends AbstractClass {
  public getName() {
    // @ts-ignore
    console.log("concrete get name");
  }
  public getAge() {
    // @ts-ignore
    console.log("concrete get age");
  }
  public getGender() {
    // @ts-ignore
    console.log("concrete get gender");
  }
}

function main() {
  let instance = new ConcreteClass();
  instance.init();
}

main();

/**
 * output
    concrete get name
    concrete get age
    concrete get gender
 */
