export const getRequestbody = options => {
  return options.body && JSON.parse(options.body);
};
export const jsonResult = (options, code, msg) => {
  return {
    data: options,
    code: 200,
    msg: msg
  };
};
