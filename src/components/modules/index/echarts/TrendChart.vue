<template>
  <div class="TrendChart-wrap">
    <div class="order_trend">
      <div class="order_trend_top clearfix">
        <div class="title2 fl">订单趋势图</div>
        <div class="fr">
          <RadioGroup v-model="data.check">
            <Radio label="1">全终端</Radio>
            <Radio label="2">PC端</Radio>
            <Radio label="3">移动端</Radio>
          </RadioGroup>
        </div>
      </div>
      <div class="qw-echart" style="height:380px;" ref="trendChart"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import { TrendChartData } from "@/types/components/index/TrendChart.interface";
const echarts = require("echarts");

@Component({})
export default class TrendChart extends Vue {
  // prop
  // @Prop({
  //   required: false,
  //   default: ""
  // })
  name!: string;
  @Prop({ type: Array, default() {return []}})
  public Dayslist 
  // Watch
  @Watch('Dayslist')
  public handler(newval: any, old: any) {
     this.init();
  }
  // data
  data: TrendChartData = {
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
      this.init();
    });
  }

  // 初始化函数
  init() {
    function sum(m, n) {
      let num = Math.floor(Math.random() * (m - n) + n);
      return num;
    }
    function randomData(now: any) {
      // now = new Date(+now + oneDay);
      value = value + Math.random() * 21 - 10;
      return {
        date: now,
        num1: sum(10, 100),
        num2: sum(1000, 10000)
      };
    }
    // 基于准备好的dom，初始化echarts实例
    let time: any = [];
    let oneDay = 24 * 3600 * 1000;
    let value = Math.random() * 1000;
    // for (let i = 0; i < this.Dayslist.length; i++) {
    for (let value of this.Dayslist) {
      time.push(randomData(value));
    }
      
    // }
    let xAxis: any = [];
    let yAxis: any = [];
    for (let i = 0; i < this.Dayslist.length; i++) {
      xAxis.push(time[i].date);
      yAxis.push({ value: time[i].num2, num2: time[i].num1 });
    }
    let trendChart = echarts.init(this.$refs.trendChart);
    trendChart.setOption({
      grid: {
        left: "5%",
        right: "1%"
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "none"
        },
        confine: true,
        triggerOn: "mousemove",
        backgroundColor: "rgba(255, 255, 255, 1)",
        padding: 10,
        formatter(params) {
          let html = `<span style="color:rgba(140, 160, 179, 1)">${params[0].axisValue}</span><br>
          <span class="block1"></span><span class="tip-txt">终端总订单数(笔):${params[0].data.num2}</span><br>
          <span class="block2"></span><span class="tip-txt">终端总订单金额(元): ${params[0].data.value}</span><br>`;
          return html;
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: "#D9D9D9"
          }
        },
        axisLabel: {
          color: "rgba(0, 0, 0, 0.45)",
          formatter(value, idx) {
            let date = new Date(value);
            return [date.getMonth() + 1, date.getDate()].join("-");
          }
        },
        data: xAxis
      },
      yAxis: {
        type: "value",
        axisLine: {
          lineStyle: {
            color: "#D9D9D9"
          }
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0, 0, 0, 0.15)"
          }
        },
        axisTick: { show: false },
        axisLabel: {
          margin: 20,
          color: "rgba(0, 0, 0, 0.45)"
        }
      },
      series: [
        {
          // tslint:disable-next-line: max-line-length
          symbol: "image://data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAD60lEQVQ4T42U/WtbVRjHn+ecc1+Sm+SWZtnquq6+zI6uq2hbxxgDW1sKVcSfUgcT6X/S9M/Y9IcxFcHgUCmt7AcbEHSIlaJzzM52dQ1tbWbSpDc3yb3nRU6koXak+MDlwLmHz/Oc8zzfL0KbUEphJpPRH+RyOVJIpQg8eCDS6bQCAIWIen0m8OiOBgEAfra/2qkMZxAo7VWAcSUloYTWQaotEvDfyTffr6XTaXkU/B+ght1cvsmifVOXicmGJBcmBaCSC6oTE8akAiWR0RAQ85Gt+t2VW7cqmUymVXEL+C9smSX6uyYlYj8KYSkuDAJIhRCMECAAqEFCEeRAaaAoLZpPi1/89lF2b25uTuqkTaCG5XI5ujN0blhQeANCbmtgmQcvFcP6lUCqbgBFKJK9GGW/PBdx7iFlNYHQIIax2bG0kp2amgr09Q+A5MuNlYR/6tQHEAYuhiKy26hdKvL6mwdJD7+1Scjm83bic2oanqSkRkJxt2vl8a9jY2O8CVxaWmJbg71DYLIJ5DzqN+pnN8PadaUUaTcFLjV+PG3HlqRBqwC4Edz5NjszM9NAfd3FxUWzeGXgHYJwgYTceeLvv+UpfrEdrNkgxHqf7d5Ag1WUQT32w8Mb6YmJfZydnSUjIyN2+ergNQKql3IZf+SXrwcgTx4H1P9eMKIf27a9KRmr2n+Vbnfmizu6QpLNZqPh+Mh7hJBeaATuWsO79n+ALzLnUztib0qDetGNndvu0+p2CyjGX38bCA5o4Fbgj5cVHziuQoro97HYJ2ibRclIJb68/mEMYK/5hvPz8xF/6OXXRNSaxIDHwyA4u65q70oFrB30BBrLKcO+B5ZRVkr9kfp5/U6pVPKaMltYWDDDRCJZvdD9PpEyCUHo7oWNi9sYXlYKmio5HHGgf56hdg4t828wmceK3kJ8NX9/cnKy1hobzrmzf+7Mq7WENUG4cAgXbl3w7l0Z9NdQnVAAxALwXGDrncRYlYzugWXuA1dr7k8PvwaASnO4dWbd6dHRUTMIgkRp8OxVZVvDEIoICumgEFGQymwOOGrJkZqipKoY9ZWCndh6/qu4LwuFQqE2PT0tWtLLZrPEdV1bKZUon+96RXYkLqFQMZDSVEIyRALaGBRiiAZtkIZcde4//i70vGJPT091eHiYt6R3WM+FQsG2LMuBZLyjcfrkeRExehQlCSRIgasqCfiOXa48Ihu727Zte6VSqZZOp8MDG3vGvnSlqVTKAABbCGEJIUwpJQ3DECORiPB9nwshGo7j1JPJZHBQ2UHT2hqsdmkAYEEQUMdxSKVS0UBpWZbI5/MCALR7H2+w7dz7yH5b+9fn/gER3hHxs/v1eAAAAABJRU5ErkJggg==",
          symbolSize: 14,
          showSymbol: false,
          data: yAxis,
          type: "line",
          // smooth: true, // 平滑曲线 注释
          lineStyle: {
            color: "#6885FE"
          },
          areaStyle: {
            // 颜色自上而下渐变
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                // 1代表上面
                offset: 0,
                color: "rgba(217, 224, 255, 0.43)"
              },
              {
                offset: 1,
                color: "rgba(255, 255, 255, 0.47)"
              }
            ]),
            opacity: 1 // 填充区域透明度
          }
        }
      ]
    });
    // tslint:disable-next-line: only-arrow-functions
    window.addEventListener("resize", function() {
      trendChart.resize();
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

