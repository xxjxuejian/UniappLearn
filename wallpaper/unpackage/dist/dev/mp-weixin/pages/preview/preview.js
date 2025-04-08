"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_system = require("../../utils/system.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_rate2 = common_vendor.resolveComponent("uni-rate");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_uni_rate2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_rate = () => "../../uni_modules/uni-rate/components/uni-rate/uni-rate.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_uni_rate + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    common_vendor.onShow(() => {
      const storageClassList = common_vendor.index.getStorageInfoSync("classList");
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:146", "classList", storageClassList.classList);
    });
    const hiddenMask = common_vendor.ref(false);
    const toggleMask = () => {
      hiddenMask.value = !hiddenMask.value;
    };
    const goBackBarHeight = common_vendor.ref(utils_system.getTitleBarHeight());
    const handleGoBack = () => {
      common_vendor.index.navigateBack();
    };
    const infoPopupRef = common_vendor.ref(null);
    const popInfo = () => {
      infoPopupRef.value.open();
    };
    const cloesInfoPopup = () => {
      infoPopupRef.value.close();
    };
    const imgScore = common_vendor.ref(3.5);
    const scorePopupRef = common_vendor.ref(null);
    const handleScore = () => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:174", "平分了");
    };
    const popScore = () => {
      common_vendor.index.__f__("log", "at pages/preview/preview.vue:178", "mark");
      scorePopupRef.value.open();
    };
    const cloesScorePopup = () => {
      scorePopupRef.value.close();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, k0, i0) => {
          return {
            a: common_vendor.o(toggleMask, item),
            b: item
          };
        }),
        b: common_assets._imports_0$1,
        c: common_vendor.p({
          type: "back",
          size: "20",
          color: "#fff"
        }),
        d: common_vendor.unref(goBackBarHeight) + "px",
        e: common_vendor.unref(utils_system.getStatusBarHeight)() + "px",
        f: common_vendor.o(handleGoBack),
        g: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "hh:mm"
        }),
        h: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        i: common_vendor.p({
          type: "info",
          size: "30"
        }),
        j: common_vendor.o(popInfo),
        k: common_vendor.p({
          type: "star",
          size: "30"
        }),
        l: common_vendor.o(popScore),
        m: common_vendor.p({
          type: "download",
          size: "26"
        }),
        n: !common_vendor.unref(hiddenMask),
        o: common_vendor.o(cloesInfoPopup),
        p: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        q: common_vendor.o(($event) => common_vendor.isRef(imgScore) ? imgScore.value = $event : null),
        r: common_vendor.p({
          max: 5,
          touchable: "false",
          readonly: true,
          allowHalf: true,
          modelValue: common_vendor.unref(imgScore)
        }),
        s: common_vendor.t(common_vendor.unref(imgScore)),
        t: common_vendor.f(3, (item, k0, i0) => {
          return {
            a: common_vendor.t(item),
            b: item
          };
        }),
        v: common_vendor.sr(infoPopupRef, "2dad6c07-6", {
          "k": "infoPopupRef"
        }),
        w: common_vendor.p({
          type: "bottom"
        }),
        x: common_vendor.o(cloesScorePopup),
        y: common_vendor.p({
          type: "closeempty",
          size: "20"
        }),
        z: common_vendor.o(($event) => common_vendor.isRef(imgScore) ? imgScore.value = $event : null),
        A: common_vendor.p({
          max: 5,
          allowHalf: true,
          modelValue: common_vendor.unref(imgScore)
        }),
        B: common_vendor.t(common_vendor.unref(imgScore)),
        C: !common_vendor.unref(imgScore),
        D: common_vendor.o(handleScore),
        E: common_vendor.sr(scorePopupRef, "2dad6c07-9", {
          "k": "scorePopupRef"
        }),
        F: common_vendor.p({
          ["is-mask-click"]: false
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/preview/preview.js.map
