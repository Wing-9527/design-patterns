let employee_zs = {
  name: "zs",
  age: 18,
  say() {
    console.log(`Hi I'm ${this.name}`);
  },
};

let employee_ls = {
  name: "ls",
  age: 20,
  say() {
    console.log(`Hi I'm ${this.name}`);
  },
};

employee_zs.say();
employee_ls.say();

// 构造器模式重写
function Employee(name, age) {
  this.name = name;
  this.age = age;
  this.say = function () {
    console.log(`Hi I'm ${this.name}`);
  };
}

let ww = new Employee("ww", 21);
ww.say();
