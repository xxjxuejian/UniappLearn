"use strict";
const common_vendor = require("../../common/vendor.js");
const api_apis = require("../../api/apis.js");
if (!Array) {
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  _easycom_uni_load_more2();
}
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  _easycom_uni_load_more();
}
const _sfc_main = {
  __name: "classList",
  props: ["id", "name"],
  setup(__props) {
    common_vendor.onLoad((e) => {
      common_vendor.index.__f__("log", "at pages/classList/classList.vue:33", "生命周期", e);
      const { id = null, name = "" } = e;
      if (id) {
        queryParams.classid = id;
      }
      getPageData();
      common_vendor.index.setNavigationBarTitle({
        title: name
      });
    });
    let isNodata = common_vendor.ref(false);
    const isLoading = common_vendor.ref(false);
    const queryParams = {
      classid: void 0,
      pageNum: 1,
      pageSize: 12
    };
    const pageData = common_vendor.ref([]);
    async function getPageData() {
      const res = await api_apis.apiGetClassifyList(queryParams);
      common_vendor.index.__f__("log", "at pages/classList/classList.vue:60", "res", res.data);
      if (res.data.length < queryParams.pageSize) {
        isNodata.value = true;
      }
      pageData.value = [...pageData.value, ...res.data];
      common_vendor.index.setStorageSync("classList", pageData.value);
    }
    common_vendor.onReachBottom(async () => {
      if (isNodata.value)
        return;
      isLoading.value = true;
      queryParams.pageNum++;
      await getPageData();
      isLoading.value = false;
      common_vendor.index.__f__("log", "at pages/classList/classList.vue:84", isLoading.value);
    });
    common_vendor.onPullDownRefresh(async () => {
      queryParams.pageNum = 1;
      await getPageData();
      common_vendor.index.stopPullDownRefresh();
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !common_vendor.unref(pageData).length && !common_vendor.unref(isNodata)
      }, !common_vendor.unref(pageData).length && !common_vendor.unref(isNodata) ? {
        b: common_vendor.p({
          status: "loading"
        })
      } : {}, {
        c: common_vendor.f(common_vendor.unref(pageData), (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id
          };
        }),
        d: common_vendor.unref(isNodata)
      }, common_vendor.unref(isNodata) ? {
        e: common_vendor.p({
          status: "noMore"
        })
      } : {}, {
        f: common_vendor.unref(isLoading) && common_vendor.unref(pageData).length !== 0
      }, common_vendor.unref(isLoading) && common_vendor.unref(pageData).length !== 0 ? {
        g: common_vendor.p({
          status: "loading"
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-104357ab"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/classList/classList.js.map
