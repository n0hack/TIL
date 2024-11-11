module.exports = ({ statusCode = 0, status = '', error = '', data = null }) => ({
  status,
  statusCode,
  error,
  result: data,
});
