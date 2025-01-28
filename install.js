module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: [
          "git clone https://github.com/n8n-io/n8n .",
        ],
      },
    },
    {
      method: "shell.run",
      params: {
        message: "npm install --legacy-peer-deps",
      },
    },
    {
      method: "shell.run",
      params: {
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
