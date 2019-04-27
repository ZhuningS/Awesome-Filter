/*  eslint-disabled  */
/**
 * 记录 vuexSession 使用状况
 * sessionStorage
 * */

export default {
  /**
   * 3s 延迟登出中flag : 'YES'; 'NO'
   * 请求登陆时 复原 NO : 'src/components/login.vue'
   *
   * */
  'is_force_logout': 'NO', //
  /**
   * 图片识别结果
   * */
  'queuing_check_data': {
    set: [
      'src/components/home/ToHandle/ToHandleTable.vue',
      'src/components/home/InHandle/InHandleTable.vue'
    ],
    get: [

    ]
  }

};
