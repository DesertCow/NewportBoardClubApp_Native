// const { getDefaultConfig } = require('expo/metro-config');

// /** @type {import('expo/metro-config').MetroConfig} */
// const config = getDefaultConfig(__dirname, {
//   // Enable CSS support.
//   // isCSSEnabled: true,
//   config.resolver.sourceExts.push("mjs");
// });

// module.exports = config;

const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

config.resolver.sourceExts.push("mjs");

module.exports = config;