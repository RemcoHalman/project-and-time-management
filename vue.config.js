module.exports = {
  lintOnSave: process.env.NODE_ENV !== "production",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
    },
  },
};
