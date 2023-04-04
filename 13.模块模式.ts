// 闭包
const ModuleTest = (function () {
  let count = 0;
  return {
    increment() {
      count++;
      // @ts-ignore
      console.log(count);
    },
    decrement() {
      count--;
      // @ts-ignore
      console.log(count);
    },
  };
})();

ModuleTest.increment();
ModuleTest.increment();
ModuleTest.increment();

ModuleTest.decrement();
ModuleTest.decrement();
ModuleTest.decrement();
