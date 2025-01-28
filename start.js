module.exports = {
  daemon: true,
  run: [
    {
      method: "shell.run",
      params: {
        message: "n8n start",
        on: [{ event: "/n8n ready on (http:\\/\\/\\S+)/", done: true }],
      },
    },
    {
      method: "local.set",
      params: {
        url: "{{input.event[1]}}",
      },
    },
    {
      method: "script.return",
      params: {
        url: "{{input.event[1]}}"
      }
    }
  ],
};
