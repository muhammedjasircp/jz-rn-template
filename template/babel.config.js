module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@config': './src/config',
          '@contexts': './src/contexts',
          '@constants': './src/constants',
          '@components': './src/components',
          '@localization': './src/localization',
          '@api': './src/api',
          '@assets': './src/assets',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@redux': './src/redux',
          '@slices': './src/redux/slices',
        },
      },
    ],
  ],
};
