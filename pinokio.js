module.exports = {
  title: "n8n",
  description: "A powerful workflow automation tool.",
  icon: "icon.png",
  menu: async (kernel, info) => {
    let installed = false;
    try {
      const { stdout } = await kernel.shell.run({ message: "npm list -g n8n" });
      installed = stdout.includes("n8n@");
    } catch (e) {
      // ignore
    }

    let running = {
      install: info.running("install.js"),
      start: info.running("start.js"),
      update: info.running("update.js"),
      reset: info.running("reset.js"),
    };

    if (running.install) {
      return [
        {
          default: true,
          icon: "fa-solid fa-plug",
          text: "Installing",
          href: "install.js",
        },
      ];
    } else if (installed) {
      if (running.start) {
        let url = null;
        let attempts = 0;
        while (attempts < 5 && !url) {
          try {
            await new Promise(resolve => setTimeout(resolve, 500)); // Add a 0.5-second delay
            const local = kernel.memory.local[kernel.path("start.js")];
             if (local && local.url) {
              url = local.url;
            }
          } catch (e) {
            // ignore
          }
          attempts++;
        }
        if (url) {
          return [
            {
              default: true,
              popout: true,
              icon: "fa-solid fa-rocket",
              text: "Open Web UI",
              href: url,
            },
            {
              icon: "fa-solid fa-terminal",
              text: "Terminal",
              href: "start.js",
            },
          ];
        } else {
          return [
            {
              default: true,
              icon: "fa-solid fa-terminal",
              text: "Terminal",
              href: "start.js",
            },
          ];
        }
      } else if (running.update) {
        return [
          {
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Updating",
            href: "update.js",
          },
        ];
      } else if (running.reset) {
        return [
          {
            default: true,
            icon: "fa-solid fa-terminal",
            text: "Resetting",
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
    } else {
      return [
        {
          default: true,
          icon: "fa-solid fa-plug",
          text: "Install",
          href: "install.js",
        },
      ];
    }
  },
};
