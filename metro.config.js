// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('metro-config');

module.exports = getDefaultConfig(__dirname);

module.exports = (async () => {
  const {
      resolver: { sourceExts, assetExts }
  } = await getDefaultConfig()
  return {
      transformer: {
          getTransformOptions: async () => ({
              transform: {
                  experimentalImportSupport: false,
                  inlineRequires: false
              }
          })
      },
      resolver: {
        sourceExts,
        assetExts: [...assetExts, 'fcscript']
      }
    }
})()
