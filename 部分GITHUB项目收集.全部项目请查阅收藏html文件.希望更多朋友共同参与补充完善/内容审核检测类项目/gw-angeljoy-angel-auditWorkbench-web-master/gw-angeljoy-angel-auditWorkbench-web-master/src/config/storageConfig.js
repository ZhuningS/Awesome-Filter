
/* eslint-disable */
export const storage = {
  method: 'localStorage',
  set: ( key, value, time, method ) => {
    var data, valid;
    method = method || storage.method;
    data = {
      value : JSON.stringify( value )
    };
    if ( typeof time == 'number' ) {
      valid = time * 60 * 1e3;
      data.timestamp = ( new Date ).getTime() + valid
    }else{
      data.timestamp = null;
    }
    return window[method].setItem( key, JSON.stringify( data ) );
  },
  get: ( key, method ) => {
    var data;
    method = method || storage.method;
    data = JSON.parse( window[method].getItem( key ) );
    return data && data.value ? data.timestamp === null ? JSON.parse( data.value ) : ( new Date ).getTime() < data.timestamp && JSON.parse( data.value ) || !1 : !1;
  },
  remove: ( key, method ) => {
    method = method || storage.method;
    window[method].removeItem( key );
  },
  clear: ( method ) => {
    method = method || storage.method;
    window[method].clear();
  }
};
