/* eslint-disable */
import Vue from 'vue';
import { Notification } from 'element-ui';
import { delayForceLogout } from 'src/config/delayForceLogout';
import { http } from './ajaxConfig';
import { clearAllCookie } from './cookie';
import { storage } from './storageConfig';

/*
 * vm: vm实例;
 * pararms: '请求参数' [Obj]; url: [Str];method: 'get'[Str]
 * success: 'success(res) cb'[Fn]; error: 'error(err) cb'[Fn];
 * handle: '实现的功能(用于notify Str)' [Str]
 * before: cb[Fn]; after: cb[Fn]
 * noSuccessNotify: [Boolean] 不启用成功提示flag
 * */
export const notifyAjaxWithoutAction = ({ vm, param, url, method, handle,
                                          noSuccessNotify=false, silence=false,
                                          success, error, before, after,  }) => {
  if (before) { before() }
  http[method](url, param)
    .then((res) => {
      if (!noSuccessNotify) {
        vm.$notify.success({
          message: ('成功' + handle),
          duration: 1000,
        });
      }
      if (success) { success(res) }
      if (after) { after() }
    })
    .catch((err) => {
      console.log(err);
      if (after) { after() }
      if (error) { error(err) }
      if (silence) return;
      errorHandler(err);
    });
};

export const errorHandler = (err) => {
  const forceLogout = () => {
    clearAllCookie();
    storage.clear();
    window.location.href = '#/login';
  };
  if (err.status === 520) {
    Notification.error({
      title: `系统服务异常 [${err.status}]`,
      message: err.body && err.body.errorMsg ? err.body.errorMsg : ''
    });
    if (err.body.errorCode === '11004' ||
      err.body.errorCode === '11005' ||
      err.body.errorCode === '11019' ||
      err.body.errorCode === '11015' ||
      err.body.errorCode === '11018' ||
      err.body.errorCode === '11022' ||
      err.body.errorCode === '11024') {
      delayForceLogout(forceLogout);
    }
  } else if (err.status === 500) {
    Notification.error({
      title: `系统服务异常 [${err.status}]`,
      message: err.body && err.body.errorMsg ? err.body.errorMsg : ''
    });
  } else {
    Notification.error({
      title: '网络服务异常',
      message: '返回状态：' + err.status
    });
  }
};
