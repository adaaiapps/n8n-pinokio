module.exports = {
    run: [
      {
        method: "shell.run",
        params: {
          message: "rm -rf app/node_modules && rm -rf app/package-lock.json",
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
  