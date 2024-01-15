const nextTranslate = require("next-translate-plugin");

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    console.log( webpack);
    return config;
  },
});
