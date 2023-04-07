interface Engine {
  ignite(): void;
}

class V8Engine {
  ignite() {
    // @ts-ignore
    console.log("v8 engine ignite");
  }
}

class V6Engine {
  ignite() {
    // @ts-ignore
    console.log("v6 engine ignite");
  }
}

class CadillacCar {
  public engine: Engine;
  constructor(engine: Engine) {
    this.engine = engine;
  }
  platform() {
    // @ts-ignore
    console.log("通用 凯迪拉克");
  }
  run() {
    this.engine.ignite();
  }
}

let ct5 = new CadillacCar(new V8Engine());
ct5.platform();
ct5.run();

/**
 * output
    通用 凯迪拉克
    v8 engine ignite
 */
