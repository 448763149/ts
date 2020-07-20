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
        uuid: 1,
        checked: true,
        settings: {},
        config: [
          {
            // 配置项组件名称 单选按钮组件
            fileName: 'HRadio',
            fileUrl: 'common',
            uuid: '1',
            data: {
              label: '框体样式',
              value: '1',
              selectList: [
                {
                  id: '1',
                  label: '方形'
                },
                {
                  id: '2',
                  label: '圆形'
                }
              ]
            }
          },
          {
            // 配置项组件名称 调色板组件
            fileName: 'HColorPicker',
            fileUrl: 'common',
            uuid: '2',
            data: {
              label: '背景颜色',
              value: '#ffffff'
            }
          },
          {
            // 配置项组件名称 调色板组件
            fileName: 'HColorPicker',
            fileUrl: 'common',
            uuid: '3',
            data: {
              label: '框体颜色',
              value: '#ffffff'
            }
          },
          {
            fileName: 'HRadio',
            fileUrl: 'common',
            uuid: '4',
            data: {
              label: '文本位置',
              value: '2',
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
            }
          },
          {
            // 配置项组件名称 调色板组件
            fileName: 'HColorPicker',
            fileUrl: 'common',
            uuid: '5',
            data: {
              label: '文本颜色',
              value: '#333333'
            }
          }
        ]
      },
      {
        uuid: 2,
        name: 'Banner',
        checked: false,
        config: []
      },
      {
        uuid: 3,
        name: 'Search',
        checked: false,
        config: []
      }
    ]
  }
}