"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    const hiddenMask = common_vendor.ref(false);
    const toggleMask = () => {
      hiddenMask.value = !hiddenMask.value;
    };
    const infoPopupRef = common_vendor.ref(null);
    const popInfo = () => {
      infoPopupRef.value.open();
    };
    const cloesInfoPopup = () => {
      infoPopupRef.value.close();
    };
    const imgScore = common_vendor.ref(3.5);
    const markImage = () => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:144", "mark");
      scorePopupRef.value.open();
    };
    const scorePopupRef = common_vendor.ref(null);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {
            a: common_vendor.o(toggleMask, item),
            b: item
          };
        }),
        b: common_assets._imports_0$3,
        c: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        d: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        e: common_vendor.p({
          type: "info",
          size: "30"
        }),
        f: common_vendor.o(popInfo),
        g: common_vendor.p({
          type: "star",
          size: "30"
        }),
        h: common_vendor.o(markImage),
        i: common_vendor.p({
          type: "download",
          size: "26"
        }),
        j: !common_vendor.unref(hiddenMask),
        k: common_vendor.o(cloesInfoPopup),
        l: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        m: common_vendor.o(($event) => common_vendor.isRef(imgScore) ? imgScore.value = $event : null),
        n: common_vendor.p({
          max: 5,
          touchable: "false",
          readonly: true,
          allowHalf: true,
          modelValue: common_vendor.unref(imgScore)
        }),
        o: common_vendor.t(common_vendor.unref(imgScore)),
        p: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        q: common_vendor.sr(infoPopupRef, "2dad6c07-5", {
          "k": "infoPopupRef"
        }),
        r: common_vendor.p({
          type: "bottom"
        }),
        s: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        t: common_vendor.p({
          max: 5,
          value: 2
        }),
        v: common_vendor.sr(scorePopupRef, "2dad6c07-8", {
          "k": "scorePopupRef"
        }),
        w: common_vendor.p({
          ["background-color"]: "#fff"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
