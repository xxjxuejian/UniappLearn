"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo2-onload",
  setup(__props) {
    const name = common_vendor.ref("");
    const age = common_vendor.ref(0);
    const vwRef = common_vendor.ref(null);
    common_vendor.onLoad((e) => {
      common_vendor.index.__f__("log", "at pages/demo2-onload/demo2-onload.vue:17", e);
      name.value = e.name;
      age.value = e.age;
    });
    common_vendor.onReady(() => {
      common_vendor.index.__f__("log", "at pages/demo2-onload/demo2-onload.vue:23", "onReady中获取DOM元素", vwRef.value);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(name)),
        b: common_vendor.t(common_vendor.unref(age))
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo2-onload/demo2-onload.js.map
