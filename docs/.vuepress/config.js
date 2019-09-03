module.exports = {
  title: 'Vue项目开发编码规范', // 设置网站标题
  description: 'Vue项目开发编码规范', //描述
  dest: './dist', // 设置输出目录
  themeConfig: {
    //主题配置
    nav: [
      { text: '主页', link: '/' },
      { text: '编程规约', link: '/standards/' },
      { text: '组件文档', link: '/baseComponents/' }
    ],
    // 为以下路由添加侧边栏
    sidebar: {
      '/baseComponents/': [
        {
          title: '布局类组件',
          collapsable: true,
          children: ['base/test1', 'base/test2', 'base/test3', 'base/test4']
        },
        {
          title: '可视化组件',
          collapsable: true,
          children: []
        },
        {
          title: '工具类组件',
          collapsable: true,
          children: []
        },
        {
          title: '方法类函数',
          collapsable: true,
          children: []
        }
      ]
    }
  }
}
