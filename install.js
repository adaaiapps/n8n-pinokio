module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "npm install n8n -g",
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
