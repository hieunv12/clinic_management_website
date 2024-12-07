const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@features': path.resolve(__dirname, 'src/features'),
      '@routes': path.resolve(__dirname, './src/routes/*'), 
      '@contexts': path.resolve(__dirname, './src/contexts/*'),
      '@components': path.resolve(__dirname, './src/components/*'),
      '@utils': path.resolve(__dirname, './src/utils/*'),
      '@hooks': path.resolve(__dirname, './src/hooks/*'),
      '@assets': path.resolve(__dirname, './src/assets/*'),
    },
  },
};