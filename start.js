module.exports = {
    daemon: true,
    run: [
      {
        method: "shell.run",
        params: {
          path: "app",
          message: "npm run start",
          on: [{ event: "/n8n ready on (.+)/", done: true }],
        },
      },
      {
        method: "local.set",
        params: {
          url: "{{input.event[1]}}",
        },
      },
    ],
  };
  