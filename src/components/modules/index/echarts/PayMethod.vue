<template>
  <div class="PayMethod-wrap">
    <div class="order_trend_top clearfix">
      <div class="title2 fl">订单支付方式分布</div>
    </div>
    <div style="height:320px;" ref="payMethod"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { PayMethodData } from "@/types/components/index/PayMethod.interface";
const echarts = require("echarts");
import 'echarts/map/js/china.js';
@Component({})
export default class PayMethod extends Vue {
  name!: string;
  // @Prop({
  //   type: Array,
  //   default() {
  //     return [];
  //   }
  // })
  // public Dayslist;
  // Watch
  // @Watch("Dayslist")
  // public handler(newval: any, old: any) {
  //   this.init();
  // }
  // data
  data: PayMethodData = {
    componentName: "TrendChart"
  };

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
    this.$nextTick(() => {
      this.initChart();
    });
  }

  // 初始化函数
  initChart() {
    // 数据纯属虚构
    let data = [
      {
        name: "北京",
        value: 5.3
      },
      {
        name: "天津",
        value: 3.8
      },
      {
        name: "上海",
        value: 4.6
      },
      {
        name: "重庆",
        value: 3.6
      },
      {
        name: "河北",
        value: 3.4
      },
      {
        name: "河南",
        value: 3.2
      },
      {
        name: "云南",
        value: 1.6
      },
      {
        name: "辽宁",
        value: 4.3
      },
      {
        name: "黑龙江",
        value: 4.1
      },
      {
        name: "湖南",
        value: 2.4
      },
      {
        name: "安徽",
        value: 3.3
      },
      {
        name: "山东",
        value: 3.0
      },
      {
        name: "新疆",
        value: 1
      },
      {
        name: "江苏",
        value: 3.9
      },
      {
        name: "浙江",
        value: 3.5
      },
      {
        name: "江西",
        value: 2.0
      },
      {
        name: "湖北",
        value: 2.1
      },
      {
        name: "广西",
        value: 3.0
      },
      {
        name: "甘肃",
        value: 1.2
      },
      {
        name: "山西",
        value: 3.2
      },
      {
        name: "内蒙古",
        value: 3.5
      },
      {
        name: "陕西",
        value: 2.5
      },
      {
        name: "吉林",
        value: 4.5
      },
      {
        name: "福建",
        value: 2.8
      },
      {
        name: "贵州",
        value: 1.8
      },
      {
        name: "广东",
        value: 3.7
      },
      {
        name: "青海",
        value: 0.6
      },
      {
        name: "西藏",
        value: 0.4
      },
      {
        name: "四川",
        value: 3.3
      },
      {
        name: "宁夏",
        value: 0.8
      },
      {
        name: "海南",
        value: 1.9
      },
      {
        name: "台湾",
        value: 0.1
      },
      {
        name: "香港",
        value: 0.1
      },
      {
        name: "澳门",
        value: 0.1
      }
    ];

    let yData: any = [];
    data.sort((o1, o2) => {
      if (isNaN(o1.value) || o1.value == null) {
        return -1;
      }
      if (isNaN(o2.value) || o2.value == null) {
        return 1;
      }
      return o1.value - o2.value;
    });

    for (let value of data) {
      yData.push(value);
    }
    // console.log(echarts)
    let payMethod = echarts.init(this.$refs.payMethod);
    let op = {
      tooltip: {
        show: true,
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: 10,
        formatter: (params) => {
          let key = "value";
          let html = `<span class="block1"></span><span class="tip-txt">分布地区:${params.name}</span><br>
          <span class="block2"></span><span class="tip-txt">地区占比: ${params.data[key]}%</span><br>`;
          return html;
        }
      },
      visualMap: {
        type: "continuous",
        seriesIndex: [0],
        min: 0,
        max: 7,
        inRange: {
          color: ["#A1D1FF", "#A7C9FF", "#98BEFF", "#A0C1F5"]
        },
        show: false
      },
      geo: {
        // roam: true,
        map: "china",
        label: {
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            areaColor: "#5696FC"
          },
          borderColor: "#fff"
        },
        regions: [
          {
            name: "南海诸岛",
            value: 0,
            itemStyle: {
              normal: {
                opacity: 0,
                label: {
                  show: false
                }
              }
            }
          }
        ]
      },
      series: [
        {
          name: "mapSer",
          type: "map",
          roam: false,
          geoIndex: 0,
          label: {
            show: false
          },
          data 
        }
      ]
    }
    payMethod.setOption(op);
    window.addEventListener("resize", () => {
      payMethod.resize();
    });
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.TrendChart-wrap {
  width: 100%;
}
</style>

