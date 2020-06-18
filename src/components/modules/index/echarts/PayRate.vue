<template>
  <div class="PayRate-wrap">
    <div class="order_trend_top clearfix">
      <div class="title2 fl">订单支付方式占比</div>
    </div>
    <div style="height:320px;" ref="payRate"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
const echarts = require("echarts");

@Component({})
export default class PayRate extends Vue {
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
    var payRate = echarts.init(this.$refs.payRate);
    payRate.setOption({
      color: ["#5B8FF9", "#5AD8A6", "#8B9DBE"],
      legend: {
        top: "3%",
        x: "left",
        data: ["支付宝", "微信", "银联"],
        icon: "circle",
        itemWidth: 10, // 设置宽度
        itemHeight: 10, // 设置高度
        itemGap: 30 // 设置间距
      },
      series: [
        {
          name: "访问来源",
          type: "pie",
          selectedMode: "single",
          radius: ["35%", "65%"],
          label: {
            normal: {
              position: "inner",
              formatter: "{b} \n {d}%"
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {
              value: 1000,
              name: "支付宝"
              // selected: true //默认当前选中项
            },
            {
              value: 679,
              name: "微信"
            },
            {
              value: 335,
              name: "银联"
            }
          ]
        }
      ]
    });
    window.addEventListener("resize", function() {
      payRate.resize();
    });
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.PayRate-wrap {
  width: 100%;
}
</style>

