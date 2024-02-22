module.exports = {
  sidebarsWebDev: [
    {
      type: "category",
      label: "Web Dev",
      link: {
        type: "doc",
        id: "all-web-dev",
      },
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: "category",
          label: "HTML",
          link: {
            type: "doc",
            id: "html/welcome-html",
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "html",
            },
          ],
        },
        {
          type: "category",
          label: "JavaScript",
          link: {
            type: "doc",
            id: "javascript/welcome-js",
          },
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: "autogenerated",
              dirName: "javascript",
            },
          ],
        },
      ],
    },
  ],
};
