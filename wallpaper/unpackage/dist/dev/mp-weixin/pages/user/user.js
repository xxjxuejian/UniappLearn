"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_user_item2 = common_vendor.resolveComponent("user-item");
  _easycom_user_item2();
}
const _easycom_user_item = () => "../../components/user-item/user-item.js";
if (!Math) {
  _easycom_user_item();
}
const _sfc_main = {
  __name: "user",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.p({
          icon: "download",
          title: "我的下载"
        }),
        c: common_vendor.p({
          icon: "star-filled",
          title: "我的评分"
        }),
        d: common_vendor.p({
          icon: "chat-filled",
          title: "联系客服"
        }),
        e: common_vendor.p({
          icon: "notification-filled",
          title: "订阅更新"
        }),
        f: common_vendor.p({
          icon: "flag-filled",
          title: "常见问题"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0f7520f0"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/user.js.map
