module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          extensions: ['.js', '.ios.js', '.android.js'],
          alias: {
            '~': './src',
            '@screens': './src/screens',
            '@components': './src/components',
            '@icons': './src/assets/icons',
            '@images': './src/assets/images',
            '@styles': './src/styles',
            '@queries': './src/queries',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  }
}
