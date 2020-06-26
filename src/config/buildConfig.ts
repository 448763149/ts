export default {
  page: {
    // 页面title
    title: '首页',
    // 设置页面颜色
    setbg: '1',
    // 背景颜色
    bgColor: '#ffffff',
    // 页面描述
    describe: '',
    components: [
      {
        // 组件名称
        name: 'Search',
        // 组件id
        id: 1,
        config: [
          {
            // 配置项组件名称 单选按钮组件
            fileName: 'HQRadio',
            fileUrl: 'common',
            data: {
              label: '框体样式',
              value: '',
              selectList: [
                {
                  id: '1',
                  label: '方形'
                },
                {
                  id: '2',
                  label: '原型'
                }
              ]
            }
          },
          {
            // 配置项组件名称 调色板组件
            fileName: 'HQColorPicker',
            fileUrl: 'common',
            data: {
              label: '背景颜色',
              value: ''
            }
          },
          {
            // 配置项组件名称 调色板组件
            fileName: 'HQColorPicker',
            fileUrl: 'common',
            data: {
              label: '框体颜色',
              value: ''
            }
          },
          {
            label: '文本位置',
            value: '',
            selectList: [
              {
                id: '1',
                label: '居中'
              },
              {
                id: '2',
                label: '居左'
              }
            ]
          },
          {
            // 配置项组件名称 调色板组件
            fileName: 'HQColorPicker',
            fileUrl: 'common',
            data: {
              label: '文本颜色',
              value: ''
            }
          }
        ]
      }
    ]
  }
}