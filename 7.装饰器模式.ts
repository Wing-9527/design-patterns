// ES6实现
class HorribleCode {
  run() {
    // @ts-ignore
    console.log("horrible code run");
  }
}

class Decorator {
  private instance: HorribleCode;
  constructor(target: HorribleCode) {
    this.instance = target;
  }
  private beforeRun() {
    // @ts-ignore
    console.log("decorator before run");
  }
  private afterRun() {
    // @ts-ignore
    console.log("decorator after run");
  }
  run() {
    this.beforeRun();
    this.instance.run();
    this.afterRun();
  }
}

let horribleCode = new HorribleCode();
let decorator = new Decorator(horribleCode);
decorator.run();
/**
 * output:
 *  decorator before run
 *  horrible code run
 *  decorator after run
 */
