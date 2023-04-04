class BaiduMap {
  display() {
    // @ts-ignore
    console.log("baidu map render");
  }
}

class TencentMap {
  show() {
    // @ts-ignore
    console.log("tencent map render");
  }
}

// 百度地图适配器
class BaiduMapAdapter extends BaiduMap {
  constructor() {
    super();
  }
  render() {
    this.display();
  }
}

// 腾讯地图适配器
class TencentMapAdapter extends TencentMap {
  constructor() {
    super();
  }
  render() {
    this.show();
  }
}

// 渲染地图
function renderMap(instance: TencentMapAdapter | BaiduMapAdapter) {
  instance.render();
}

renderMap(new BaiduMapAdapter()); // baidu map render
renderMap(new TencentMapAdapter()); // tencent map render
