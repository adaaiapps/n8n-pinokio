module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "rm -rf node_modules && rm -rf package-lock.json",
      },
    },
    {
      method: "notify",
      params: {
        html: "App reset!",
      },
    },
  ],
};
