module.exports = {
    run: [
      {
        method: "shell.run",
        params: {
          message: [
            "git clone https://github.com/n8n-io/n8n app",
          ],
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
          html: "Click the 'start' tab to get started!",
        },
      },
    ],
  };
  