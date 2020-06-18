// 将所有的mock文件引入
// require('@/mock/usermock')
import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
import Mock from 'mockjs' //引入mockjs，npm已安装

import { MOCKHOST } from '@/config'
Mock.setup({
  timeout: 1000  //设置请求延时时间
})


/** 
 * 
 * @api {get} /index 首页接口
 * @apiVersion 1.0.0
 * @apiName index
 * @apiGroup channel
 * @apiSuccess {Number} return_code 结果标识
 * @apiSuccess {String} message 结果说明
 * @apiSuccess {Object} data 结果数据
 * 
 * @apiSuccess {Array} data.banner  广告图数组
 * @apiSuccess {String} data.banner.imgurl 广告图片
 * 
 * @apiSuccess {Array} data.nav  广告图数组
 * @apiSuccess {String} data.nav.img 导航图片
 * @apiSuccess {String} data.nav.name 导航名称
 * 
 * @apiSuccess {Array} data.special  特色频道图片数组
 * @apiSuccess {String} data.special.specialImg 频道图片 
 * 
 * @apiSuccess {Array} data.goodBrand  优选品牌数组 
 * @apiSuccess {String} data.goodBrand.floorName 楼层标题
 * @apiSuccess {Array} data.goodBrand.brandImg 品牌图片数组
 * @apiSuccess {String} data.goodBrand.brandImg.imgurl 品牌图片
 * 
 * @apiSuccess {Array} data.heatSingel  热销单品数组 
 * @apiSuccess {String} data.heatSingel.floorName 楼层标题
 * @apiSuccess {Array} data.heatSingel.productDetail 商品列表数组
 * @apiSuccess {String} data.heatSingel.productDetail.imgurl 商品图片
 * @apiSuccess {String} data.heatSingel.productDetail.productName 商品名称
 * @apiSuccess {String} data.heatSingel.productDetail.oldPrice 未登录价格
 * @apiSuccess {String} data.heatSingel.productDetail.vipPice 已登录价格
 * @apiSuccess {String} data.heatSingel.productDetail.uuid 商品id
 * 
 * @apiSuccess {Array} data.floorList  楼层数组
 * @apiSuccess {String} data.floorList.floorName  楼层标题
 * @apiSuccess {String} data.floorList.adImgurl  广告图片
 * @apiSuccess {String} data.floorList.uuid      广告图片uuid
 * @apiSuccess {Array} data.floorList.productDetail  商品列表数组
 * @apiSuccess {String} data.floorList.productDetail.imgurl  商品图片
 * @apiSuccess {String} data.floorList.productDetail.productName  商品名称
 * @apiSuccess {String} data.floorList.productDetail.oldPrice 未登录价格
 * @apiSuccess {String} data.floorList.productDetail.vipPice 已登录价格
 * @apiSuccess {String} data.floorList.productDetail.uuid  商品uuid
 * 
 * @apiSuccess {Array}  data.categoryList  分类数组
 * @apiSuccess {String} data.categoryList.tabName 一级分类名称
 * @apiSuccess {String} data.categoryList.uuid  一级分类uuid  
 * @apiSuccess {Array} data.categoryList.tabchildren  二级分类数组 
 * @apiSuccess {String} data.categoryList.tabchildren.childrenName 二级分类名称
 * @apiSuccess {String} data.categoryList.tabchildren.uuid  二级分类uuid 
 * @apiSuccess {Array} data.categoryList.tabchildren.productList 分类商品列表数组
 * @apiSuccess {String} data.categoryList.tabchildren.productList.productImg  商品图片
 * @apiSuccess {String} data.categoryList.tabchildren.productList.productName  商品名称
 * @apiSuccess {String} data.categoryList.tabchildren.productList.oldPrice 未登录价格
 * @apiSuccess {String} data.categoryList.tabchildren.productList.vipPrice 已登录价格
 * @apiSuccess {String} data.categoryList.tabchildren.productList.uuid  商品uuid
 * 
 **/
const userDB = [
  {
    username: 'admin',
    password: 'admin',
    uuid: 'admin-uuid',
    info: {
      name: 'huqiang',
      avatar: '../assets/images/img.jpg',
      access: ['admin'],
      userMenuList: [
        {
          path: '/',
          title: '仪表盘',
          header: 'home',
          icon: 'md-speedometer',
        },
        {
          path: '/example',
          title: '示例页面',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/example/exampleList`,
              title: '普通列表页',
              children: [
                {
                  path: `/example/tableFormGroup`,
                  title: '筛选条件循环输出'
                },
                {
                  path: `/example/tableFormSingle`,
                  title: '筛选条件自定义组合'
                }
              ]
            },
            {
              path: `/example/basePage`,
              title: '动态配置列表',
              children: [
                {
                  path: `/example/base/productList`,
                  title: '商品列表一'
                },
                {
                  path: `/example/base1/productList`,
                  title: '商品列表二'
                },
                {
                  path: `/example/base/memberList`,
                  title: '会员列表'
                },
                {
                  path: `/example/base/memberEdit`,
                  auth: ['hidden'],
                  title: '会员编辑'
                },
                {
                  path: `/example/base/memberView`,
                  auth: ['hidden'],
                  title: '详情页'
                },
                {
                  path: `/example/base/memberAdd`,
                  auth: ['hidden'],
                  title: '会员新增'
                }
              ]
            },
            {
              path: `/example/otherPage`,
              title: '动态配置列表内页',
              children: [
                {
                  path: `/example/base/memberAudit`,
                  title: '审核页面'
                }
              ]
            },
            {
              path: `/example/dynamicComp`,
              title: '动态引入组件',
              children: [
                {
                  path: `/example/dynamicComp`,
                  title: '列表页'
                },
                {
                  path: `/example/dynamicCompNewEdit`,
                  title: '新增/编辑页'
                },
                {
                  path: `/example/dynamicCompView`,
                  auth: ['hidden'],
                  title: '查看详情'
                }
              ]
            },
            {
              path: `/example/treeTableList`,
              auth: ['hidden'],
              title: '树形表格'
            },
            {
              path: `/example/exampleNewEdit`,
              title: '新增/编辑页面'
            },
            {
              path: `/example/exampleView`,
              title: '查看页面'
            }
          ]
        },
        {
          path: '/member',
          title: '会员管理',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/member/memberManagement/memberManagement`,
              title: '会员管理',
              children: [
                {
                  path: `/member/memberManagement/memberManagementList`,
                  title: '会员列表'
                },
                {
                  path: `/member/memberManagement/memberManagement/newEdit`,
                  title: '会员添加'
                }

              ]
            },
            {
              path: `/member/memberManagement/lableManagement`,
              title: '标签管理',
              children: [
                {
                  path: `/member/memberManagement/lableManagement/list`,
                  title: '标签列表'
                }
              ]
            },
            {
              path: `/member/memberManagement/flock`,
              title: '会员分群',
              children: [
                {
                  path: `/member/memberManagement/flock/list`,
                  title: '客户分群'
                }
              ]
            }
          ]
        },
        {
          path: '/business',
          title: '商品',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/business/businessList`,
              title: '商品管理'
            },
            {
              path: `/business/businessClassify`,
              auth: ['hidden'],
              title: '商品分类'
            },
            {
              path: `/business/attributeManage`,
              title: '属性管理'
            },
            {
              path: `/business/businessHandle`,
              title: '批量处理'
            },
            {
              path: `/business/basicData`,
              title: '基础数据',
              children: [
                {
                  path: `/business/basicData/brandList`,
                  title: '品牌管理'
                },
                {
                  path: `/business/basicData/brandNewEdit`,
                  auth: ['hidden'],
                  title: '品牌新增/编辑'
                },
                {
                  path: `/business/basicData/recomiconList`,
                  title: '推荐图标'
                },
                {
                  path: `/business/basicData/recomiconNewEdit`,
                  auth: ['hidden'],
                  title: '推荐图标新增/编辑'
                }
              ]
            }
          ]
        },
        {
          path: '/product',
          title: '商品系统',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/product/productMgrList`,
              title: '商品管理'
            },
            {
              path: `/product/productCategoryMgr`,
              title: '分类管理',
              children: [
                {
                  path: `/product/productCategoryMgr/productPlateCategoryList`,
                  title: '主分类'
                },
                {
                  path: `/product/productCategoryMgr/productFrontCategoryList`,
                  title: '前台分类'
                },
                {
                  path: `/product/productCategoryMgr/integralProductCategoryList`,
                  title: '积分商品分类'
                }
              ]
            },
            {
              path: `/product/productParam`,
              title: '属性管理',
              children: [
                {
                  path: `/product/productParam/productParamSetList`,
                  title: '分类属性设置'
                },
                {
                  path: `/product/productParam/productParamMgrList`,
                  title: '分类属性管理'
                }
              ]
            },
            {
              path: `/product/productBatch`,
              title: '批量处理',
              children: [
                {
                  path: `/product/productBatch/batchRelateCategory`,
                  title: '批量关联分类'
                },
                {
                  path: `/product/productBatch/batchProcessImage`,
                  title: '批量处理图片'
                },
                {
                  path: `/product/productBatch/batchImportProduct`,
                  title: '批量导入商品'
                },
                {
                  path: `/product/productBatch/batchImportCategory`,
                  title: '批量导入分类'
                },
                {
                  path: `/product/productBatch/batchSetLimitBuyNum`,
                  title: '批量设置每人限购'
                },
                {
                  path: `/product/productBatch/batchSetLimitBuyUser`,
                  title: '批量设置限定用户'
                },
                {
                  path: `/product/productBatch/batchSetDiscount`,
                  title: '批量设置用户折扣'
                },
                {
                  path: `/product/productBatch/batchSetProductName`,
                  title: '批量设置商品名称'
                },
                {
                  path: `/product/productBatch/batchImportParam`,
                  title: '批量导入属性'
                },
                {
                  path: `/product/productBatch/batchSetReleaseDate`,
                  title: '批量设置上架时间'
                }
              ]
            },
            {
              path: `/product/productBaseData`,
              title: '基础数据',
              children: [
                {
                  path: `/product/productBaseData/productBrandList`,
                  title: '品牌管理'
                },
                {
                  path: `/product/productBaseData/productTagList`,
                  title: '推荐图标管理'
                }
              ]
            }
          ]
        },
        {
          path: '/customer',
          title: '会员系统',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/customer/customerFile`,
              title: '会员档案',
              children: [
                {
                  path: `/customer/customerFile/customerFileList`,
                  title: '会员档案'
                }
              ]
            },
            {
              path: `/customer/customerMgr`,
              title: '会员管理',
              children: [
                {
                  path: `/customer/customerMgr/customerMgrList`,
                  title: '会员列表'
                },
                {
                  path: `/customer/customerMgr/customerCrowdList`,
                  title: '会员分群'
                },
                {
                  path: `/customer/customerMgr/customerImport`,
                  title: '会员导入'
                },
                {
                  path: `/customer/customerMgr/labelManageList`,
                  title: '标签管理'
                }
              ]
            },
            {
              path: `/customer/customerOperate`,
              title: '客户运营',
              children: [
                {
                  path: `/customer/customerOperate/memberCrowdList`,
                  title: '人群运营'
                },
                {
                  path: `/customer/customerOperate/sceneOperateList`,
                  title: '场景营销'
                }
              ]
            },
            {
              path: `/customer/loyaltyMgr`,
              title: '忠诚度管理',
              children: [
                {
                  path: `/customer/loyaltyMgr/levelManageList`,
                  title: '等级管理'
                },
                {
                  path: `/customer/loyaltyMgr/taskManageList`,
                  title: '任务管理'
                }
              ]
            },
            {
              path: `/customer/equityMgr`,
              title: '权益管理',
              children: [
                {
                  path: `/customer/equityMgr/equityCardList`,
                  title: '权益卡'
                },
                {
                  path: `/customer/equityMgr/equityDisposeList`,
                  title: '权益配置'
                },
                {
                  path: `/customer/equityMgr/pointsManageList`,
                  title: '积分管理'
                }
              ]
            },
            {
              path: `/customer/storedMgr`,
              title: '储值管理',
              children: [
                {
                  path: `/customer/storedMgr/storedRuleList`,
                  title: '储值规则'
                },
                {
                  path: `/customer/storedMgr/storedSelectList`,
                  title: '储值查询'
                },
                {
                  path: `/customer/storedMgr/operationManageList`,
                  title: '运营管理'
                }
              ]
            }
          ]
        },
        {
          path: '/data',
          title: '数据中心',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/data/home`,
              title: '数据概览'
            },
            {
              path: `/data/realTimeData`,
              title: '实时数据',
              children: [
                {
                  path: `/data/realTimeData/realTimeOverview`,
                  title: '实时概览'
                }
              ]
            },
            {
              path: `/data/flowAnalyse`,
              title: '流量分析',
              children: [
                {
                  path: `/data/flowAnalyse/flowOverview`,
                  title: '流量概览'
                },
                {
                  path: `/data/flowAnalyse/instorePath`,
                  title: '店内路径'
                },
                {
                  path: `/data/flowAnalyse/pageAnalyse`,
                  title: '页面分析'
                },
                {
                  path: `/data/flowAnalyse/chartAnalyse`,
                  title: '热力图分析'
                },
                {
                  path: `/data/flowAnalyse/visitCharacter`,
                  title: '访问特征'
                }
              ]
            },
            {
              path: `/data/productAnalyse`,
              title: '商品分析',
              children: [
                {
                  path: `/data/productAnalyse/productOverview`,
                  title: '商品概览'
                },
                {
                  path: `/data/productAnalyse/productEffect`,
                  title: '商品效果'
                },
                {
                  path: `/data/productAnalyse/productAnalyse`,
                  title: '单品分析'
                }
              ]
            },
            {
              path: `/data/orderAnalyse`,
              title: '交易分析',
              children: [
                {
                  path: `/data/orderAnalyse/orderOverview`,
                  title: '交易概览'
                }
              ]
            },
            {
              path: `/data/customerAnalyse`,
              title: '客户分析',
              children: [
                {
                  path: `/data/customerAnalyse/customerOverview`,
                  title: '客户概览'
                },
                {
                  path: `/data/customerAnalyse/customerObserve`,
                  title: '客户洞察'
                },
                {
                  path: `/data/customerAnalyse/integralAnalyse`,
                  title: '用户获取'
                }
              ]
            },
            {
              path: `/data/terminalAnalyse`,
              title: '多终端分析',
              children: [
                {
                  path: `/data/terminalAnalyse/wechat`,
                  title: '微信'
                }
              ]
            },
            {
              path: `/data/marketingAnalyse`,
              title: '营销分析',
              children: [
                {
                  path: `/data/marketingAnalyse/marketingOverview`,
                  title: '营销概览'
                },
                {
                  path: `/data/marketingAnalyse/pluginAnalyse`,
                  title: '插件分析'
                },
                {
                  path: `/data/marketingAnalyse/reviewReport`,
                  title: '复盘报告'
                }
              ]
            },
            {
              path: `/data/thematicData`,
              title: '专题数据',
              children: [
                {
                  path: `/data/thematicData/extensionAnalyse`,
                  title: '推广分析'
                },
                {
                  path: `/data/thematicData/distributeAnalyse`,
                  title: '分销分析'
                },
                {
                  path: `/data/thematicData/supplyAnalyse`,
                  title: '供货分析'
                },
                {
                  path: `/data/thematicData/sweepStat`,
                  title: '扫码统计'
                },
                {
                  path: `/data/thematicData/cardStat`,
                  title: '卡券统计'
                },
                {
                  path: `/data/thematicData/verifierPerformance`,
                  title: '核销员业绩'
                }
              ]
            },
            {
              path: `/data/marketInsight`,
              title: '市场洞察',
              children: [
                {
                  path: `/data/marketInsight/industryRealTime`,
                  title: '行业实时'
                },
                {
                  path: `/data/marketInsight/industryGrail`,
                  title: '行业大盘'
                },
                {
                  path: `/data/marketInsight/industryList`,
                  title: '行业榜单'
                }
              ]
            },
            {
              path: `/data/stat`,
              title: '数据报表',
              children: [
                {
                  path: `/data/stat/myStat`,
                  title: '我的报表'
                },
                {
                  path: `/data/stat/recommendStat`,
                  title: '推荐报表'
                },
                {
                  path: `/data/stat/downCenter`,
                  title: '下载中心'
                }
              ]
            }
          ]
        },
        {
          path: '/cms',
          title: 'CMS系统',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/cms/index`,
              title: '首页'
            },
            {
              path: `/cms/contentMgr`,
              title: '内容管理',
              children: [
                {
                  path: `/cms/contentMgr/contentCategoryList`,
                  title: '内容分类'
                },
                {
                  path: `/cms/contentMgr/contentList`,
                  title: '内容管理'
                }
              ]
            },
            {
              path: `/cms/helpCenterMgr`,
              title: '帮助中心及公告',
              children: [
                {
                  path: `/cms/helpCenterMgr/helpCenterList`,
                  title: '帮助中心'
                },
                {
                  path: `/cms/helpCenterMgr/storeNoticeList`,
                  title: '商户公告'
                },
                {
                  path: `/cms/helpCenterMgr/customerNoticeList`,
                  title: '会员公告'
                },
                {
                  path: `/cms/helpCenterMgr/shopNoticeList`,
                  title: '前台公告'
                },
                {
                  path: `/data/dataReport/bottomMenuList`,
                  title: '底部菜单'
                }
              ]
            },
            {
              path: `/cms/sourceMaterialMgr`,
              title: '素材管理',
              children: [
                {
                  path: `/cms/sourceMaterialMgr/imageSource`,
                  title: '图片'
                },
                {
                  path: `/cms/sourceMaterialMgr/videoSource`,
                  title: '视频'
                },
                {
                  path: `/cms/sourceMaterialMgr/audioSource`,
                  title: '音频'
                },
                {
                  path: `/cms/sourceMaterialMgr/pageSource`,
                  title: '页面'
                }
              ]
            }
          ]
        },
        {
          path: '/popularizeCenter',
          title: '推广中心',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/popularizeCenter/advertTrackList`,
              title: '广告跟踪'
            },
            {
              path: `/popularizeCenter/messagePush`,
              title: '消息推送',
              children: [
                {
                  path: `/popularizeCenter/messagePush/emailSendList`,
                  title: '邮件推送'
                },
                {
                  path: `/popularizeCenter/messagePush/smsSendList`,
                  title: '短信推送'
                },
                {
                  path: `/popularizeCenter/messagePush/noticeSendList`,
                  title: '消息推送'
                },
                {
                  path: `/popularizeCenter/messagePush/serviceIntegrateList`,
                  title: '服务集成'
                }
              ]
            }
          ]
        },
        {
          path: '/saleChannel',
          title: '销售渠道',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/saleChannel/home`,
              title: '销售渠道首页'
            },
            {
              path: `/saleChannel/weChatSubscription`,
              title: '微信公众号',
              children: [
                {
                  path: `/saleChannel/weChatSubscription/shotNoticeList`,
                  title: '快捷短语'
                },
                {
                  path: `/saleChannel/weChatSubscription/imageSourceList`,
                  title: '图文素材'
                },
                {
                  path: `/saleChannel/weChatSubscription/autoReplyList`,
                  title: '自动回复'
                },
                {
                  path: `/saleChannel/weChatSubscription/subscriptionSet`,
                  title: '公众号设置'
                }
              ]

            },
            {
              path: `/saleChannel/weChatApplet`,
              title: '微信小程序',
              children: [
                {
                  path: `/saleChannel/weChatApplet/shotNoticeList`,
                  title: '概况'
                },
                {
                  path: `/saleChannel/weChatApplet/imageSourceList`,
                  title: '统计'
                },
                {
                  path: `/saleChannel/weChatApplet/autoReplyList`,
                  title: '基础信息'
                },
                {
                  path: `/saleChannel/weChatApplet/subscriptionSet`,
                  title: '基础设置'
                }
              ]

            },
            {
              path: `/saleChannel/alipayLifeNo`,
              title: '支付宝生活号'
            },
            {
              path: `/saleChannel/APP`,
              title: 'APP'
            },
            {
              path: `/saleChannel/weChatGoodThings`,
              title: '微信好物圈'
            },
            {
              path: `/saleChannel/microblog`,
              title: '微博'
            },
            {
              path: `/saleChannel/sougou`,
              title: '搜狗'
            }
          ]
        },
        {
          path: '/marketing',
          title: '营销中心',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/marketing/home`,
              title: '首页'
            },
            {
              path: `/marketing/couponTreasureList`,
              title: '发券宝'
            },
            {
              path: `/marketing/couponList`,
              title: '优惠券'
            },
            {
              path: `/marketing/promocodeList`,
              title: '优惠码'
            },
            {
              path: `/marketing/groupCashbackList`,
              title: '团购返现'
            },
            {
              path: `/marketing/orderCashbackList`,
              title: '订单返现'
            },
            {
              path: `/marketing/limitDiscountList`,
              title: '限时折扣'
            },
            {
              path: `/marketing/secKillList`,
              title: '秒杀'
            },
            {
              path: `/marketing/paidPromotionList`,
              title: '支付有礼'
            },
            {
              path: `/marketing/presentList`,
              title: '赠品'
            },
            {
              path: `/marketing/orderRewardList`,
              title: '满减送'
            },
            {
              path: `/marketing/packageBugList`,
              title: '优惠套餐'
            },
            {
              path: `/marketing/balePriceList`,
              title: '打包一口价'
            },
            {
              path: `/marketing/grouponList`,
              title: '多人拼团'
            },
            {
              path: `/marketing/periodBuyList`,
              title: '周期购'
            },
            {
              path: `/marketing/auctionPriceList`,
              title: '降价拍'
            },
            {
              path: `/marketing/payForAnotherList`,
              title: '找人代付'
            },
            {
              path: `/marketing/sendGiftList`,
              title: '我要送礼'
            },
            {
              path: `/marketing/communitySendGiftList`,
              title: '我要送礼(社群)'
            },
            {
              path: `/marketing/scratchCardList`,
              title: '刮刮卡'
            },
            {
              path: `/marketing/crazyGuessList`,
              title: '疯狂猜'
            },
            {
              path: `/marketing/zodiacCardList`,
              title: '生肖翻翻看'
            },
            {
              path: `/marketing/wheelDrawList`,
              title: '幸运大抽奖'
            },
            {
              path: `/marketing/shakeDrawList`,
              title: '摇一摇'
            },
            {
              path: `/marketing/splitCouponList`,
              title: '好友瓜分券'
            },
            {
              path: `/marketing/helpCutList`,
              title: '砍价0元购'
            },
            {
              path: `/marketing/lotteryDrawList`,
              title: '0元抽奖'
            },
            {
              path: `/marketing/collectGiftList`,
              title: '收藏有礼'
            },
            {
              path: `/marketing/moneyDilationList`,
              title: '定金膨胀'
            },
            {
              path: `/marketing/plusBuyList`,
              title: '加价购'
            },
            {
              path: `/marketing/liveqrcodeList`,
              title: '活码管理'
            },
            {
              path: `/marketing/examList`,
              title: '趣味测试'
            },
            {
              path: `/marketing/evaluationGiftList`,
              title: '好评有礼'
            }
          ]
        },
        {
          path: '/thirdParty',
          title: '第三方平台',
          header: 'home',
          icon: 'md-speedometer',
          children: [
            {
              path: `/thirdParty/product`,
              title: '商品',
              children: [
                {
                  path: `/thirdParty/product/synchronization`,
                  title: '商品同步'
                }
              ]
            },
            {
              path: `/thirdParty/store`,
              title: '店铺',
              children: [
                {
                  path: `/thirdParty/store/managent`,
                  title: '第三方店铺管理'
                }
              ]
            }
          ]
        }
      ]
    }
  }
];
Mock.mock(`${MOCKHOST}/api/login`, /post|get/i, (options) => {
  console.log(options)
  let item= JSON.parse(options.body)
  let parame;
  userDB.forEach((v, k) => {
    if(v.username === item.data.userName && v.password === item.data.pwd){
      parame = {
        return_code: '1',
        msg: '登录成功',
        data: {
          userName:item.data.userName,
          password:item.data.pwd,
          token: 'A68NUPaXVBJYRStwvd9frcUn8rlf30h6',
          info: userDB[0].info
        }
      }
    }else{
      parame = {
        return_code: '401',
        msg: '用户名或密码错误',
        data: {}
      }
    }
  })
  return parame;
}) //调用模拟数据方法
