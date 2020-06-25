import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { IndexData } from '@/types/views/index.interface'
import modules from "@/components" // 组件
import { getDays } from '@/utils/common'
// const echarts = require('echarts');
@Component({
  components: {
    TrendChart: modules.TrendChart,
    PayMethod: modules.PayMethod,
    PayRate: modules.PayRate,
    SalesRank: modules.SalesRank
  }
})
export default class About extends Vue {
  // Getter
  // @Getter('admin/index/author') author

  // Action
  // @Action('admin/index/GET_DATA_ASYN') GET_DATA_ASYN

  // data
  private data: IndexData = {
    pageName: 'index',
    totalHeight: '',
    tab: 1,
    orderTab: 1,
    check: '1',
    options: [
      {
        value: 0,
        label: '最近7天'
      },
      {
        value: 1,
        label: '最近15天'
      },
      {
        value: 2,
        label: '最近30天'
      },
      {
        value: 3,
        label: '最近90天'
      }
    ],
    value: 0,
    value1: '',
    Dayslist: []
  }

  created() {
    // this.GET_DATA_ASYN()
  }
  mounted() {
    // 动态设置高度
    window.addEventListener('resize', this.getHeight)
    this.getHeight();
    this.switchDate();


  }

  // 设置高度
  handleLoad() {
    this.getHeight()
  }
  getHeight() {
    let refs: any = this.$refs
    // console.log(refs.total_area.offsetHeight);
    if (refs.total_area) {
      this.data.totalHeight = refs.total_area.offsetHeight + 'px'
    }
  }
  // 设置日期
  switchDate() {
    let end = new Date();
    let start = new Date();
    if (this.data.value === 0) {
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 6);
    } else if (this.data.value === 1) {
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 14);
    } else if (this.data.value === 2) {
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 29);
    } else {
      start.setTime(start.getTime() - 3600 * 1000 * 24 * 89);
    }
    this.data.value1 = [start, end]
    this.setDate([this.formatDate(start), this.formatDate(end)]);
  }

  // 设置时间
  setDate(e) {
    this.data.value1 = e;
    // 获取选中的开始时间，和结束时间，获取中间的时间，返回给报表
    let getdate = new getDays(this.formatDate(e[0]), this.formatDate(e[1]));
    this.data.Dayslist = getdate.rundate();
  }

  // 格式化时间
  formatTen(num) {
    return num > 9 ? (num + "") : ("0" + num);
  }
  formatDate(datekk) {
    let date: any = new Date(datekk)
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    // let hour = date.getHours();
    // let minute = date.getMinutes();
    // let second = date.getSeconds();
    // tslint:disable-next-line: max-line-length
    return year + "-" + this.formatTen(month) + "-" + this.formatTen(day);
  }


   

}
