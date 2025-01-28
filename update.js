module.exports = {
    run: [
      {
        method: "shell.run",
        params: {
          path: "app",
          message: "git pull",
        },
      },
      {
        method: "shell.run",
        params: {
          path: "app",
          message: "npm install",
        },
      },
      {
        method: "shell.run",
        params: {
          path: "app",
          message: "npm run build",
        },
      },
      {
        method: "notify",
        params: {
          html: "App updated!",
        },
      },
    ],
  };
  