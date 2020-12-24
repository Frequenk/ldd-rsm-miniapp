const less = require('@remax/plugin-less');
module.exports = {
  plugins: [
    less({
      lessOptions: {
        globalVars: {
          'primary-color': '"#4569d4"',
        },
      },
    }),
  ],
};
