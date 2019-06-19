/**
 * 格式化时间
 *
 * @param {String} str
 * @returns 格式化后的时间
 */

/* eslint-disable */
export const formatTime = (date, transform) => {
  if( !date ){
    date = new Date();
  } else if( typeof date == 'number' ){
    date = new Date( date );
  } else if( isNaN(Date.parse(date)) ){
    date = new Date( Date.parse(date.replace(/-/g, "/")));
  } else{
    date = new Date( Date.parse(date) );
  }

  transform = transform || 'yyyy-MM-dd HH:mm:ss';

  const mon = date.getMonth() + 1,
        dd = date.getDate(),
        hh = date.getHours(),
        mm = date.getMinutes(),
        ss = date.getSeconds();

  const year = date.getFullYear(),
        month = mon < 10 ? '0' + mon : mon,
        day = dd < 10 ? '0' + dd : dd,
        hour = hh < 10 ? '0' + hh : hh,
        minute = mm < 10 ? '0' + mm : mm,
        second = ss < 10 ? '0' + ss : ss;
        transform = transform.replace('yyyy',year)
        .replace('MM',month).replace('dd',day)
        .replace('HH',hour).replace('mm',minute)
        .replace('ss', second);
        return transform;
};

export const formatEmptyStr = (str) => {
  return str !== null && str !== undefined && str !== '' ? str : '-';
};

export const formatStrTime = (dateStr, transform) => {
  const date = new Date(dateStr);
  if (date) {
    transform = transform || 'yyyy-MM-dd HH:mm:ss';

    const mon = date.getMonth() + 1,
      dd = date.getDate(),
      hh = date.getHours(),
      mm = date.getMinutes(),
      ss = date.getSeconds();

    const year = date.getFullYear(),
      month = mon < 10 ? '0' + mon : mon,
      day = dd < 10 ? '0' + dd : dd,
      hour = hh < 10 ? '0' + hh : hh,
      minute = mm < 10 ? '0' + mm : mm,
      second = ss < 10 ? '0' + ss : ss;
    transform = transform.replace('yyyy',year)
      .replace('MM',month).replace('dd',day)
      .replace('HH',hour).replace('mm',minute)
      .replace('ss', second);
    return transform;
  } else {
    return '';
  }
};

export const formatAngelTime = (str) => {
  if (!str || str.indexOf('T') === -1) { return '' }
  return str.split('+')[0].replace('T', ' ')

};
