// // 闭包的方式实现
// const Singleton = (function () {
//   let instance: Model;

//   class Model {}

//   return function () {
//     if (!instance) {
//       instance = new Model();
//     }
//     return instance;
//   };
// })();

// // @ts-ignore
// console.log(Singleton() === Singleton());

// 类的方式实现
class Singleton {
  private static instance: Singleton;
  static create() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

// @ts-ignore
console.log(Singleton.create() === Singleton.create());
