"use strict";
const common_vendor = require("../common/vendor.js");
const getStatusBarHeight = () => {
  const SYSTEM_INFO = common_vendor.index.getSystemInfoSync();
  return SYSTEM_INFO.statusBarHeight;
};
const getTitleBarHeight = () => {
  if (common_vendor.index.getMenuButtonBoundingClientRect) {
    const MENU_BUTTON_INFO = common_vendor.index.getMenuButtonBoundingClientRect();
    const { height, top } = MENU_BUTTON_INFO;
    const navbarHeight = common_vendor.ref((top - getStatusBarHeight()) * 2 + height);
    return navbarHeight;
  } else {
    return 40;
  }
};
exports.getStatusBarHeight = getStatusBarHeight;
exports.getTitleBarHeight = getTitleBarHeight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/system.js.map
