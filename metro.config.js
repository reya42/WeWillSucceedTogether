// metro.config.js
const { getDefaultConfig } = require("@expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

// Add SVG support
config.transformer.babelTransformerPath = require.resolve("react-native-svg-transformer");
config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
config.resolver.sourceExts.push("svg");

// Wrap with NativeWind
module.exports = withNativeWind(config, {
  input: "./global.css",
});
// This configuration sets up Metro to work with Expo, SVG files, and NativeWind.
// It includes the necessary transformations and asset handling for SVG files,