var productManager = {};

productManager.createProductA = function () {
  console.log("ProductA");
};

productManager.createProductB = function () {
  console.log("ProductB");
};

productManager.factory = function (typeType) {
  return new productManager[typeType]();
};

productManager.factory("createProductA");

// 简单工厂模式
class Admin {}
class Guest {}

function factory(type) {
  switch (type) {
    case "admin":
      return new Admin();
    case "guest":
      return new Guest();
    default:
      throw new Error();
  }
}
