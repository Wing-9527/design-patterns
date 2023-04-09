// 接收者
class Receiver {
  public execute() {
    // @ts-ignore
    console.log("接收者 执行");
  }
}

// 命令模式
class Command {
  public receiver: Receiver;
  constructor(receiver: Receiver) {
    this.receiver = receiver;
  }
  public execute() {
    // @ts-ignore
    console.log("命令模式 执行");
    this.receiver.execute();
  }
}

// 调用者
class Invoker {
  public command: Command;
  constructor(command: Command) {
    this.command = command;
  }
  public execute() {
    // @ts-ignore
    console.log("调用者 执行");
    this.command.execute();
  }
}

let invoker = new Invoker(new Command(new Receiver()));
invoker.execute();

/**
 * output
    调用者 执行
    命令模式 执行
    接收者 执行
 */
