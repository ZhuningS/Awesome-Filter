/* eslint-disable */
import Vue from 'vue';

export const http = {
 exec: (method, url, params) => {
    const options = {
      method,
      url,
      credentials: true,
    }

    if(options.method == "get"){
      options.params = params;
    }else{
      options.body = params;
    }

    return Vue.http(options);
  },

  get: (url, query) => {
    return query ? http.exec('get', url, query) : http.exec('get', url);
  },

  post: (url, data) => {
    return http.exec('post', url, data);
  },

  put: (url, data) => {
    return http.exec('put', url, data);
  },

  patch: (url, data) => {
    return http.exec('patch', url, data);
  },

  delete: (url, data) => {
    return http.exec('delete', url, data);
  },

  blob: (url) => {
    return Vue.http.get(url, { responseType: 'blob' });
  }
}
