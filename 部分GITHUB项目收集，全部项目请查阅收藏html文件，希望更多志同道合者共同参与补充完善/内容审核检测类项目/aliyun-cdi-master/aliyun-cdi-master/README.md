# Aliyun-Cdi [![npm package](https://img.shields.io/npm/v/aliyun-cdi.svg?style=flat-square)](https://www.npmjs.org/package/aliyun-cdi) [![NPM downloads](https://img.shields.io/npm/dm/aliyun-cdi.svg?style=flat-square)](https://npmjs.org/package/aliyun-cdi) [![Dependency Status](https://david-dm.org/zhujun24/aliyun-cdi.svg?style=flat-square)](https://david-dm.org/zhujun24/aliyun-cdi)

[阿里云绿网内容检测API](https://help.aliyun.com/document_detail/28427.html) 封装

## 安装

```bash
npm install aliyun-cdi
```

## 示例

```js
var request = require('request');
var composeUrl = require('aliyun-cdi');

var url = composeUrl({
  AccessKeyID: 'XXX', // 你申请的AccessKeyID
  AccessKeySecret: 'XXX', // 你申请的AccessKeySecret
  Action: 'ImageDetection', // Action
  Scene: ['porn'], // 场景
  ImageUrl: ['http://dun.163.com/res/sample/sex_2.jpg'] // 资源实例
});

request.post(url, function (err, res, body) {
  if (res.statusCode === 200) {
    console.log(body);
  } else {
    console.log(res.statusCode, err);
  }
});
```
