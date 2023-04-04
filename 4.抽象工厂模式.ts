interface Mouse {
  click(): void;
}
interface Keyboard {
  input(): void;
}
interface Factory {
  createMouse(): Mouse;
  createKeyboard(): Keyboard;
}

class MacMouse implements Mouse {
  click(): void {
    console.log("mac mouse click");
  }
}
class MacKeyboard implements Keyboard {
  input(): void {
    console.log("mac keyboard input");
  }
}

class WinMouse implements Mouse {
  click(): void {
    console.log("win mouse click");
  }
}
class WinKeyboard implements Keyboard {
  input(): void {
    console.log("win keyboard input");
  }
}

// mac工厂
class MacFactory implements Factory {
  createMouse(): Mouse {
    return new MacMouse();
  }
  createKeyboard(): Keyboard {
    return new MacKeyboard();
  }
}

// win工厂
class WinFactory implements Factory {
  createMouse(): Mouse {
    return new WinMouse();
  }
  createKeyboard(): Keyboard {
    return new WinKeyboard();
  }
}

// 入口方法
function main(type: string) {
  if (type === "mac") {
    return new MacFactory();
  } else if (type === "win") {
    return new WinFactory();
  } else {
    throw new Error();
  }
}
