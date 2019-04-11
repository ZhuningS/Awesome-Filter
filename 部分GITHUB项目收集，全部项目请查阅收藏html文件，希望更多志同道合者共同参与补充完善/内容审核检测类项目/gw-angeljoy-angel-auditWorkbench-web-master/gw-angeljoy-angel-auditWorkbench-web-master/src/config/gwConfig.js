/* eslint-disable */

/*  古为 项目 执行环境, 区分build 打包用 */
/*   !!!只在  production 有效   */
const gwEnv = GW_ENV; // 在 文本pack.prod.config 中配置
let front = '';
switch (gwEnv) {
  case 'default':
    front = '/angeljoy-server/api';
    break;
  case 'dev':
    front = '/angeljoy-server-dev/api';
    break;
  case 'test':
    front = '/angeljoy-server-test/api';
    break;
  case 'prod':
    front = '/angeljoy-server/api';
    break;
  default:
    front = '/angeljoy-server/api';
    break;
}
console.log(gwEnv);

const constant = {
  pathname: front,
  ports: {
    login: '/usr/user/login',
    logout: '/usr/user/logout',
    reset_psd: '/usr/user/change_password', // 修改密码 [put] id:1;newPassword:'';oldPassword:'';
    user_menu: '/usr/src/get_user_menu_tree',// 获取操作树
    undo_msg: '/aj/club_angel_fund_record/getNeedDealCount', // 头部 获取待处理事件 [get]
    get_functions: '/usr/src/get_web_function', // [get] 获取权限树
    get_undo_msg: '/board/apply/get_station_counts', // [get] 返回角标统计数据

    /*  未处理战报  */
    get_to_handle_list: '/board/apply/get_wait_apply', // [get] 获取待处理战报列表
    apply_handle_check: '/board/apply/apply_to_check', // [get] 处理审核申请接口（审核接口之前必须调用）
    handle_check: '/board/apply/to_check', // [get] 开始审核接口（在审核申请接口成功返回后调用,返回值和牌局结算返回值一样）
    /*  已接单未处理  */
    get_in_handle_list: '/board/apply/get_wait_check_apply', // [get] 获取已申请待处理战报列表
    refuse_handle_check: '/board/apply/reject_apply_check', // [get] 驳回申请
    /*  已处理战报结果  */
    get_have_handle_list: '/board/apply/get_success_apply', // [get]  获取已处理战报列表
    get_check_result_list: '/board/apply/get_rec_image_result_list', // [get] 获得财务端申请的识别的列表

    /*  结算  */
    get_queuing_operations: '/aj/queue/getOperateListByPage', // [get] 分页展示局中操作信息列表
    commit_check: '/board/apply/commit_check_data', // [post] 战报识别修改后，确认提交接口
  },
  host: ''
};

export const getUri = (key) => {
  if (!constant.ports[key]) {
    return false;
  }
  return constant.host + constant.pathname + constant.ports[key];
};
