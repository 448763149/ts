<template>
  <div class="SalesRank-wrap">
    <div class="order_trend_top clearfix">
      <div class="title2 fl">商户销售排行</div>
    </div>
    <div style="height:320px;" ref="salesRank"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
const echarts = require("echarts");

@Component({})
export default class SalesRank extends Vue {
  name!: string;
  // @Prop({ type: Array, default() {return []}})
  // public Dayslist
  // // Watch
  // @Watch('Dayslist')
  // public handler(newval: any, old: any) {
  //    this.init();
  // }

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    //
    this.$nextTick(() => {
      this.init();
    });
  }

  // 初始化函数
  init() {
    let salesRank = echarts.init(this.$refs.salesRank);
    salesRank.setOption({
      grid: {
        // containLabel: true
        right: "15%"
      },
      xAxis: {
        name: "订单数",
        nameTextStyle: {
          color: "#73A0FA"
        },
        type: "value",
        axisLine: {
          lineStyle: {
            color: "rgba(0, 0, 0, 0.45)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0, 0, 0, 0.15)"
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        name: "订单金额",
        nameTextStyle: {
          color: "#FF5555"
        },
        type: "category",
        axisLine: {
          lineStyle: {
            color: "rgba(0, 0, 0, 0.15)"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0, 0, 0, 0.15)"
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: "rgba(0, 0, 0, 0.45)"
        },
        data: [
          {
            name: "光谷金融港店",
            value: "430"
          },
          {
            name: "店铺名称2323",
            value: "680"
          },
          {
            name: "光谷金融港店",
            value: "900"
          },
          {
            name: "店铺名称009434",
            value: "1600"
          },
          {
            name: "光谷金融港店",
            value: "1800"
          },
          {
            name: "北京阳光海岸直营店",
            value: "2000"
          }
        ]
      },
      series: [
        {
          type: "bar",
          label: {
            normal: {
              show: true,
              position: "insideLeft",
              formatter: (params) => {
                return params.data.name;
              }
            }
          },
          itemStyle: {
            normal: {
              color: (params) => {
                let colorList = ["#5B8FF9", "#83D0EF"];
                if (params.dataIndex % 2 === 0) {
                  return colorList[0];
                } else {
                  return colorList[1];
                }
              }
            }
          },
          barMaxWidth: 18,
          data: [
            {
              name: "光谷金融港店",
              value: 7000
            },
            {
              name: "店铺名称2323",
              value: 23489
            },
            {
              name: "光谷金融港店",
              value: 29034
            },
            {
              name: "店铺名称009434",
              value: 10000
            },
            {
              name: "光谷金融港店",
              value: 5000
            },
            {
              name: "北京阳光海岸直营店",
              value: 20000
            }
          ]
        }
      ]
    });
    window.addEventListener("resize", () => {
      salesRank.resize();
    });
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.SalesRank-wrap {
  width: 100%;
}
</style>

