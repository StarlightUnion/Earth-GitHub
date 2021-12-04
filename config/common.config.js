/**
 * 公用打包配置
 * @author tourist17846
 * @version V1.0
 * @since 30/11/2021 12:02
 */
const rules = [
  {
    test: /\.ts$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  'chrome': '88',
                  'ie': '11'
                },
                'corejs': '3',
                'useBuiltIns': 'usage'
              }
            ]
          ]
        }
      },
      'ts-loader'
    ],
    exclude: /node_modules/
  },
  {
    test: /\.less$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                {
                  browsers: 'last 2 versions'
                }
              ]
            ]
          }
        }
      },
      'less-loader'
    ]
  }
];

module.exports = {
  rules
}
