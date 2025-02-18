"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo4-cartShop",
  setup(__props) {
    const goods = common_vendor.ref([
      { id: 1, name: "小米" },
      { id: 2, name: "oppo" },
      { id: 3, name: "vivo" },
      { id: 4, name: "苹果" }
    ]);
    const remove = (index) => {
      goods.value.splice(index, 1);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goods.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(($event) => remove(_ctx.index), item.id),
            c: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7879d197"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo4-cartShop/demo4-cartShop.js.map
