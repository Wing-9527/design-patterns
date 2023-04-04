class Student {
  sendHomework(teacher: Teacher) {
    // @ts-ignore
    console.log(`send homework to teacher ${teacher.name}`);
  }
}

class Teacher {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class ProxyPattern {
  sendHomeworkToTeacher(teacher: Teacher) {
    new Student().sendHomework(teacher);
  }
}

// 运行
let teacher = new Teacher("张老师");
let proxyPattern = new ProxyPattern();
proxyPattern.sendHomeworkToTeacher(teacher); // send homework to teacher 张老师
