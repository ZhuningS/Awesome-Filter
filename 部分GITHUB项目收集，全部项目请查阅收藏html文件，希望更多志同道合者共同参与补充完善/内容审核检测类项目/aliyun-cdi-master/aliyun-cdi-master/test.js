var request = require('request');
var composeUrl = require('./index');

var url = composeUrl({
  AccessKeyID: 'XXX', // 你申请的AccessKeyID
  AccessKeySecret: 'XXX', // 你申请的AccessKeySecret
  Action: 'ImageDetection',
  Scene: ['ocr'],
  ImageUrl: ['http://ww1.sinaimg.cn/mw690/5375acf5gw1f6amimko3hj20x20lsagc.jpg']
});

request.post(url, function (err, res, body) {
  if (res.statusCode === 200) {
    console.log(JSON.stringify(JSON.parse(body), null, 2));
  } else {
    console.log(res.statusCode, err);
  }
});

var url2 = composeUrl({
  AccessKeyID: 'XXX', // 你申请的AccessKeyID
  AccessKeySecret: 'XXX', // 你申请的AccessKeySecret
  Action: 'TextKeywordFilter',
  Scene: ['illegal'],
  Text: '还好对方公司的合法公司电话'
});

request.post(url2, function (err, res, body) {
  if (res.statusCode === 200) {
    console.log(JSON.stringify(JSON.parse(body), null, 2));
  } else {
    console.log(res.statusCode, err);
  }
});

var url3 = composeUrl({
  AccessKeyID: 'XXX', // 你申请的AccessKeyID
  AccessKeySecret: 'XXX', // 你申请的AccessKeySecret
  Action: 'ImageDetection',
  Scene: ['porn'],
  ImageUrl: ['http://dun.163.com/res/sample/sex_2.jpg']
});

request.post(url3, function (err, res, body) {
  if (res.statusCode === 200) {
    console.log(JSON.stringify(JSON.parse(body), null, 2));
  } else {
    console.log(res.statusCode, err);
  }
});
