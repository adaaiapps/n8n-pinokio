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
      method: "notify",
      params: {
        html: "n8n is running! Click the 'Open Web UI' tab to access the interface.",
      },
    },
  ],
};
