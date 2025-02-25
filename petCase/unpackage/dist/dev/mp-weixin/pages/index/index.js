"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_segmented_control2 + _easycom_uni_icons2 + _easycom_uni_load_more2)();
}
const _easycom_uni_segmented_control = () => "../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_segmented_control + _easycom_uni_icons + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const pets = common_vendor.ref([]);
    const imageUrls = common_vendor.computed(() => {
      return pets.value.map((item) => {
        return item.url;
      });
    });
    function getData() {
      common_vendor.index.showNavigationBarLoading();
      common_vendor.index.request({
        url: "https://tea.qingnian8.com/tools/petShow",
        data: {
          size: 5,
          type: imgType.value
        },
        header: {
          "access-key": "xxjgetkey$"
        }
      }).then((res) => {
        const code = res.data.errCode;
        if (code === 0) {
          pets.value = [...pets.value, ...res.data.data];
        } else if (code === 400) {
          common_vendor.index.showToast({
            title: res.data.errMsg,
            icon: "none"
          });
        }
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "请求出错，请检查后重新请求",
          icon: "none"
        });
      }).finally(() => {
        common_vendor.index.hideNavigationBarLoading();
        common_vendor.index.stopPullDownRefresh();
      });
    }
    const preview = (index) => {
      common_vendor.index.previewImage({
        urls: imageUrls.value,
        current: index
      });
    };
    common_vendor.onReachBottom(() => {
      getData();
      common_vendor.index.__f__("log", "at pages/index/index.vue:103", pets.value);
    });
    common_vendor.onPullDownRefresh(() => {
      pets.value = [];
      getData();
    });
    const refresh = () => {
      common_vendor.index.startPullDownRefresh();
    };
    const goTop = () => {
      common_vendor.index.pageScrollTo({
        scrollTop: 0
      });
    };
    const currentTab = common_vendor.ref(0);
    const clssify = [
      { key: "all", value: "全部" },
      { key: "cat", value: "猫猫" },
      { key: "dog", value: "狗狗" }
    ];
    const tabArr = common_vendor.computed(() => {
      return clssify.map((item) => item.value);
    });
    const imgType = common_vendor.computed(() => {
      return clssify[currentTab.value]["key"];
    });
    const onClickItem = (e) => {
      currentTab.value = e.currentIndex;
      pets.value = [];
      getData();
    };
    getData();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onClickItem),
        b: common_vendor.p({
          current: common_vendor.unref(currentTab),
          values: tabArr.value,
          styleType: "button",
          activeColor: "#4cd964"
        }),
        c: common_vendor.f(common_vendor.unref(pets), (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.o(($event) => preview(index), item._id),
            c: common_vendor.t(item.content),
            d: item._id
          };
        }),
        d: common_vendor.p({
          type: "refreshempty",
          size: "30"
        }),
        e: common_vendor.o(refresh),
        f: common_vendor.p({
          type: "arrow-up",
          size: "30"
        }),
        g: common_vendor.o(goTop),
        h: common_vendor.p({
          status: "loading"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
