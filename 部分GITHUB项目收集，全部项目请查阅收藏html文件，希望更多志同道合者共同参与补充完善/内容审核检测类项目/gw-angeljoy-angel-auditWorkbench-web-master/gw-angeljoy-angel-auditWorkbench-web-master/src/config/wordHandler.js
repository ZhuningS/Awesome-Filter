/*  eslint-disable  */
export const removeHeadZero = (val) => {
  if (val == 0) {
    return 0;
  }
  return val.replace(/^0+/g, '');
};
