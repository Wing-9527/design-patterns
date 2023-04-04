function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(`Hi I'm ${this.name}`);
  };
}

// 原型模式重写
function Employee(name, age) {
  this.name = name;
  this.age = age;
}
Employee.prototype.say = function () {
  console.log(`Hi I'm ${this.name}`);
};

let zs = new Employee("zs", 20);
zs.say();
