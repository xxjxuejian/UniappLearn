"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanners(data = {}) {
  return utils_request.request({
    url: "/homeBanner",
    method: "get",
    data
  });
}
function apiGetNoticeList(data = {}) {
  return utils_request.request({
    url: "/wallNewsList",
    method: "get",
    data
  });
}
function apiGetRandomRec(data = {}) {
  return utils_request.request({
    url: "/randomWall",
    method: "get",
    data
  });
}
function apiGetClassify(data = {}) {
  return utils_request.request({
    url: "/classify",
    method: "get",
    data
  });
}
function apiGetClassifyList(data = {}) {
  return utils_request.request({
    url: "/wallList",
    method: "get",
    data
  });
}
exports.apiGetBanners = apiGetBanners;
exports.apiGetClassify = apiGetClassify;
exports.apiGetClassifyList = apiGetClassifyList;
exports.apiGetNoticeList = apiGetNoticeList;
exports.apiGetRandomRec = apiGetRandomRec;
//# sourceMappingURL=../../.sourcemap/mp-weixin/api/apis.js.map
