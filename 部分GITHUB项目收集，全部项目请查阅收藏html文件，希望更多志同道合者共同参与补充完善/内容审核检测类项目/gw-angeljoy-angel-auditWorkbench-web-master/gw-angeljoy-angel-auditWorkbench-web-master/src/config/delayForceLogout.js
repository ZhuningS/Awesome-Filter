/*  eslint-disable  */
import { storage } from 'src/config/storageConfig';

/**
 * cb 3s操作回调函数
 * */
export const delayForceLogout = (cb) => {
  if (storage.get('is_force_logout', 'sessionStorage') === 'YES') return;
  storage.set('is_force_logout', 'YES', null, 'sessionStorage');
  window.setTimeout(() => { // 延迟3s登出
    /*  触发 3s  */
    if (cb) { cb() }
  }, 3000);
};

