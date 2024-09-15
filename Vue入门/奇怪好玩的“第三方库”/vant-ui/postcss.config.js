module.exports = {
  plugins: {
    'postcss-px-to-viewport': {
      // 设定"标准屏"的参考大小(手机一般就用375)
      // 注意这里的设置是所谓的"一倍图"的值
      // 这里我们为了在"电脑端"演示，将下面的值设置成了1000
      viewportWidth: 1000,
    },
  },
};