/*  eslint-disable  */

/*  base64转blob二进制  */
export const base64ToBlob = (base64Str) => {
  const arr = base64Str.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  let bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while(n--){
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], {type:mime});
};
