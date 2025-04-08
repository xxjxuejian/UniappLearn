"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "theme-item",
  props: {
    isMore: {
      type: Boolean,
      default: false
    },
    classItem: {
      type: Object,
      // 默认是一个对象，还要规定内部的属性
      default() {
        return {
          name: "",
          picurl: "",
          updateTime: ""
        };
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? {
        b: common_vendor.p({
          date: __props.classItem.updateTime,
          threshold: [6e4, 5184e6],
          format: "MM/dd"
        }),
        c: __props.classItem.picurl,
        d: common_vendor.t(__props.classItem.name),
        e: `/pages/classList/classList?id=${__props.classItem._id}&name=${__props.classItem.name}`
      } : {}, {
        f: __props.isMore
      }, __props.isMore ? {
        g: common_assets._imports_0$2,
        h: common_vendor.p({
          type: "more-filled",
          size: "38",
          color: "#fff"
        })
      } : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f4eafbca"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/theme-item/theme-item.js.map
