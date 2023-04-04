interface Builder {
  buildWalls(): this;
  buildFloor(): this;
  buildDoor(): this;
  buildGarden(): this;
}

class HouseBuilder implements Builder {
  buildWalls(): this {
    console.log("build walls");
    return this;
  }
  buildFloor(): this {
    console.log("build floor");
    return this;
  }
  buildDoor(): this {
    console.log("build door");
    return this;
  }
  buildGarden(): this {
    console.log("build garden");
    return this;
  }
}

class Director {
  private builder: Builder;
  constructor(builder: Builder) {
    this.builder = builder;
  }
  build() {
    this.builder.buildWalls().buildFloor().buildDoor().buildGarden();
  }
}
