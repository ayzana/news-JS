const path = require('path');

module.exports = {
  entry: './src/index.ts', // Adjust path to your main entry file (rename index.js to index.ts if needed)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // Add '.ts' and '.js' as resolvable extensions
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};