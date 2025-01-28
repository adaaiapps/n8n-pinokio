module.exports = {
  title: "n8n",
  description: "A powerful workflow automation tool.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
    };

    let url = null;
    if (running.start) {
      try {
        let local = info.local("start.js");
        if (local && local.url) {
          url = local.url;
        }
      } catch (e) {
        // ignore
      }
    }

    if (running.install) {
      return [
        {
          default: true,
          icon: "fa-solid fa-plug",
          text: "Installing",
          href: "install.js",
        },
      ];
    } else if (url) {
      return [
        {
          default: true,
          icon: "fa-solid fa-rocket",
          text: "Open Web UI",
          href: url,
        },
        {
          icon: "fa-solid fa-terminal",
          text: "Terminal",
          href: "start.js",
        },
        {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        },
        {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        },
      ];
    } else {
      return [
        {
          default: true,
          icon: "fa-solid fa-power-off",
          text: "Start",
          href: "start.js",
        },
        {
          icon: "fa-solid fa-plug",
          text: "Update",
          href: "update.js",
        },
        {
          icon: "fa-regular fa-circle-xmark",
          text: "Reset",
          href: "reset.js",
        },
      ];
    }
  },
};
