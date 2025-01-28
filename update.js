module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "npm update -g n8n",
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
