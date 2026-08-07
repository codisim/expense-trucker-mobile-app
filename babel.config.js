// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ['babel-preset-expo'],
//     plugins: [
//       'react-native-reanimated/plugin',
//     ],
//   };
// };


module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // ১. প্রথমে TypeScript ট্রান্সফর্ম রান করাবো যেন Reanimated বা TS এরর না আসে
      ['@babel/plugin-transform-typescript', { isTSX: true }],
      
      // ২. এবার প্রাইভেট প্রোপার্টির জন্য প্লাগইনগুলো সেফলি রান হবে
      ['@babel/plugin-transform-class-properties', { loose: true }],
      ['@babel/plugin-transform-private-methods', { loose: true }],
      ['@babel/plugin-transform-private-property-in-object', { loose: true }],
      
      // ৩. Reanimated প্লাগইন সবসময় সবার নিচে থাকবে
      'react-native-reanimated/plugin',
    ],
  };
};