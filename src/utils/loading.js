const createFuncLoadingByOra = async (fn, message) => {
  const ora = await import('ora');
  const spinner = ora.default(message);
  spinner.start();
  const res = await fn();
  if (res) {
    spinner.succeed(`${message} success`);
  } else {
    spinner.fail(`${message} fail`);
  }
  return res;
}

module.exports = {
  createFuncLoadingByOra,
};