module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
        },
        extensions: ['.js', '.json'],
        root: ['./src'],
      },
    ],
    '@babel/plugin-transform-export-namespace-from', // To fix babel setup not supporting the export * as syntax used in zod@v4.
    'react-native-reanimated/plugin',
  ],
  presets: ['module:@react-native/babel-preset'],
};
