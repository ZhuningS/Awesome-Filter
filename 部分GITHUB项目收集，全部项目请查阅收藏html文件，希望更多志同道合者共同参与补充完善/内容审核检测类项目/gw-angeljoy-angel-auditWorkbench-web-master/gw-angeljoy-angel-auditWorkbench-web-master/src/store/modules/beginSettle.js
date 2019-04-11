const state = {
  applyId: -1, // 申请审核id
  checkData: {}, // 图片识别结果

  open: false, // 打开 flag
};

const mutations = {
  POST_BEGIN_SETTLE_APPLY_ID(stat, id) {
    stat.applyId = id;
  },
  POST_BEGIN_SETTLE_CHECK_DATA(stat, obj) {
    stat.checkData = obj;
  }
};

const actions = {
};

export default {
  state,
  mutations,
  actions
}
