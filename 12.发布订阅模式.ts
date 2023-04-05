import type { CallbackFn } from "./type";

class PubSub {
  public messages: Map<string, any[]> = new Map();

  public listeners: Map<string, CallbackFn[]> = new Map();

  public publish(type: string, msg: string) {
    let isExist = this.messages.has(type);
    if (!isExist) {
      this.messages.set(type, []);
    }
    let targetMessage = this.messages.get(type);
    targetMessage?.push(msg);
  }

  public subscribe(type: string, cb: CallbackFn) {
    let isExist = this.listeners.has(type);
    if (!isExist) {
      this.listeners.set(type, []);
    }
    let targetListener = this.listeners.get(type);
    targetListener?.push(cb);
  }

  public notify(type: string) {
    let targetListener = this.listeners.get(type);
    let targetMessage = this.messages.get(type);
    targetListener?.forEach((cb, index) => cb(targetMessage![index]));
  }
}

let pubSub = new PubSub();

const TYPE_A = "TYPE_A";
const TYPE_B = "TYPE_B";
const TYPE_C = "TYPE_C";

pubSub.publish(TYPE_A, "A计划");
pubSub.publish(TYPE_B, "B计划");
pubSub.publish(TYPE_C, "C计划");

pubSub.subscribe(TYPE_A, (msg: string) => {
  // @ts-ignore
  console.log(`订阅 ${msg}`);
});
pubSub.subscribe(TYPE_B, (msg: string) => {
  // @ts-ignore
  console.log(`订阅 ${msg}`);
});
pubSub.subscribe(TYPE_C, (msg: string) => {
  // @ts-ignore
  console.log(`订阅 ${msg}`);
});

pubSub.notify(TYPE_A); // 订阅 A计划
pubSub.notify(TYPE_B); // 订阅 B计划
pubSub.notify(TYPE_C); // 订阅 C计划
