var crypto = require('crypto');
var encodeStr = function (str) {
  return str.replace(/!/g, '%21').replace(/\(/g, '%28').replace(/\)/g, '%29');
};

// 获取参数
function getParams(params) {
  var defaultParams = {
    Async: params.Async || false,
    // Text: '这样做的历史原因是你要是真删了万一以后给你一个需求，要求恢复删除数据',
    // ImageUrl: '["http://dun.163.com/res/sample/sex_2.jpg"]',
    Scene: JSON.stringify(params.Scene || []),
    // RegionId: 'cn-hangzhou',
    AccessKeyId: params.AccessKeyID,
    Format: params.Format || 'JSON',
    SignatureMethod: 'HMAC-SHA1',
    SignatureVersion: '1.0',
    SignatureNonce: Math.random().toString(36).substring(2),
    Timestamp: new Date().toISOString(),
    Action: params.Action,
    Version: params.Version || '2016-06-21'
  };
  if (params.Action === 'ImageDetection') {
    defaultParams.ImageUrl = encodeStr(JSON.stringify(params.ImageUrl || []));
  } else if (params.Action === 'TextKeywordFilter') {
    defaultParams.Text = encodeStr(params.Text);
  }
  return defaultParams;
}

//签名编码
function percentEncode(str) {
  var res = encodeURIComponent(str);
  res = res.replace(/\+/g, '%20');
  res = res.replace(/\*/g, '%2A');
  res = res.replace(/%7E/g, '~');
  return res;
}

//签名
function getSignature(params, AccessKeySecret) {
  var keys = [];
  for (var key in params) {
    keys.push(key);
  }
  keys = keys.sort();
  var _keys = [];
  for (var i = 0, len = keys.length; i < len; i++) {
    _keys.push(percentEncode(keys[i]) + '=' + percentEncode(params[keys[i]]));
  }
  var queryString = _keys.join('&');
  var stringToSign = 'POST&%2F&' + percentEncode(queryString);
  var hmac = crypto.createHmac('sha1', AccessKeySecret + '&');
  hmac.update(stringToSign);
  return hmac.digest('base64');
}

// 构建url
function composeUrl(config) {
  var requestUrl = 'http://green.aliyuncs.com/?';
  var apiParams = getParams(config);
  var sign = getSignature(apiParams, config.AccessKeySecret);
  apiParams.Signature = sign;
  for (var key in apiParams) {
    requestUrl += (key + '=' + encodeURIComponent(apiParams[key]) + '&');
  }
  return requestUrl;
}

module.exports = composeUrl;
