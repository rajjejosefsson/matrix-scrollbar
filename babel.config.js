module.exports = function(api) {
  api.cache(true);
  return {
    babelrcRoots: ['packages/*'],

    presets: [
      [
        '@babel/env',
        {
          modules: false,
          targets: {
            browsers: 'Last 2 Chrome versions, Firefox ESR',
            node: '8.9'
          }
        }
      ],
      '@babel/preset-typescript'
    ],

    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-export-default-from',
      '@babel/proposal-object-rest-spread'
    ]
  };
};
