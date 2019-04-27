
//  引入 ajax
import { getUri } from 'src/config/gwConfig';
import { notifyAjaxWithoutAction } from 'src/config/usualAjax';

// 引入 缓存等
import { storage } from 'src/config/storageConfig';
import STORAGE from 'src/localStorage/index';
import { cookie } from 'src/config/cookie';
import COOKIE from 'src/cookie/index';

//  ajax 模板
const vm = this;
const param = {};
notifyAjaxWithoutAction({
  vm, param, url: getUri(''), method: 'get', handle: 'aaa',
  before() { vm.loading = true; },
  success(res) {},
  after() { vm.loading = false; }
});
