function replaceObj(theObj, temObj) {
  Object.keys(temObj).forEach((key) => {
    if (!theObj.hasOwnProperty(key)) return;
    if (typeof theObj[key] === 'object') { // 数组或对象
      if (theObj[key] instanceof Array) { // 数组
        theObj[key] = temObj[key];
      } else { // 对象
        replaceObj(theObj[key], temObj[key]);
      }
    } else { // 普通类型
      theObj[key] = temObj[key];
    }
  });
}

export default replaceObj;
