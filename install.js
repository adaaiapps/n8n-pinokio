module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "npm install n8n -g",
        on: [{ event: "/npm ERR/", break: true }],
      },
    },
    {
      method: "notify",
      params: {
        html: "Installation complete! Click the 'Start' tab to launch n8n.",
      },
    },
  ],
};
