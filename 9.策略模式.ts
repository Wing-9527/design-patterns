function render(renderList) {
  renderList.forEach((item) => {
    if (item.type === "navBar") {
      // renderNavBar
    } else if (item.type === "menu") {
      // renderMenu
    }
  });
}

// 策略模式重写
let strategies = {
  navBar() {
    // renderNavBar
  },
  menu() {
    // renderMenu
  },
};

function render(renderList) {
  renderList.forEach((item) => {
    strategies[item.type]();
  });
}
