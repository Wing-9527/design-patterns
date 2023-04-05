import type { CallbackFn } from "./type";

class ChainNode {
  public callback: CallbackFn;
  public next: ChainNode | undefined;
  constructor(cb: CallbackFn) {
    this.callback = cb;
  }
  public setNext(next: ChainNode) {
    this.next = next;
    return this.next;
  }
  public run() {
    this.callback();
    return this.next;
  }
}

function checkName() {
  // @ts-ignore
  console.log("校验姓名");
}
function checkAge() {
  // @ts-ignore
  console.log("校验年龄");
}
function checkGender() {
  // @ts-ignore
  console.log("校验性别");
}

let chain = new ChainNode(checkAge);
chain.setNext(new ChainNode(checkGender)).setNext(new ChainNode(checkName));
chain?.run()?.run()?.run();

/**
 * output
    校验年龄
    校验性别
    校验姓名
 */
