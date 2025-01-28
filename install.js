module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        message: "npm install n8n -g",
        on: [{ event: "/npm ERR/", break: true }],
      },
    },
  ],
};
