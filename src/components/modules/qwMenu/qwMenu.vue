<template>
  <div>
    <div class="Navigation-wrap">
      <div class="qw-logo-img"><img src="@/assets/images/logo-small.png"></div>
      <div class="qw-sidemenu">
        <ul class="qw-menu">
          <li :class="menutitle === itme.title ? 'qw-menu-item active':'qw-menu-item'" v-for="(itme,index) in data.MenuList" @click="binmenu(itme.title,itme.children)">
           <template v-if="itme.children && itme.children.length > 0">
              <span :name="itme.path">
                <Icon :type="itme.icon" :key="index" />
                {{itme.title}}
              </span>
            </template>
            <template v-else>
              <router-link :to="itme.path" :name="itme.path">
                <Icon :type="itme.icon" :key="index" />
                {{itme.title}}
              </router-link>
            </template>
          </li>
        </ul>
      </div>
    </div>
    <template v-if="childrenMenu && childrenMenu.length > 0">
      <QwSidemenu :title="menutitle" :childrenMenu="childrenMenu"></QwSidemenu>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import qwSidemenu from "../qwSidemenu/qwSidemenu.vue"; // 组件
import { QwMenuData } from "@/types/components/qwMenu.interface";
@Component({
  components: {
    QwSidemenu: qwSidemenu
  }
})
export default class QwMenu extends Vue {
  // 全局声明一下不然活报红警告
  $router
  @Getter("admin/login/info") info;
  @Getter("admin/login/childrenMenu") childrenMenu;
  @Getter("admin/login/menutitle") menutitle;
  @Getter("admin/login/UrlLink") UrlLink;
  @Action('admin/login/UPDATE_STATE_ASYN') UPDATE_STATE_ASYN
  // prop
  @Prop({
    required: false,
    default: ""
  })name!: string;
  
  // data
  data: QwMenuData = {
    componentName: "Navigation",
    MenuList: [],
    title: '',
    childrenMenu: []
  };
  // 访问父级方法设置导航
  private parent: any = this.$parent;
  created() {
    // 
  }

  activated() {
    //
  }

  mounted() {
    // 初始化导航设置
    this.data.MenuList = this.info.userMenuList;
    if (this.data.MenuList && this.data.MenuList.length > 0) {
      // 判断下之后是否有选中的导航如果有直接回选
      if (this.menutitle && this.menutitle !== '仪表盘') {
        for (let value of this.data.MenuList) {
          if (this.menutitle === value.title && value.children && value.children.length > 0) {
            this.UPDATE_STATE_ASYN({childrenMenu: value.children})
            // 如果有缓存地址就跳转回之前缓存的地址
            if (this.UrlLink) {
              this.$router.push({ path: `${this.UrlLink}` })
            }
            this.parent.setnavigation(true);
            break;
          }
        }
      } else {
        // 存储一下当前默认选中
        this.UPDATE_STATE_ASYN({menutitle: this.data.MenuList[0].title})
        // 调用父级方法设置当前是否是二级导航
        this.parent.setnavigation(false)
      }
    }
  }
  // 设置导航
  binmenu(title, childrenMenu) {
    this.UPDATE_STATE_ASYN({menutitle: title, childrenMenu})
    if (childrenMenu && childrenMenu.length > 0) {
      this.data.childrenMenu = childrenMenu;
      // 调用父级方法设置当前是否是二级导航
      this.parent.setnavigation(true)
      // 跳转之前记录下当前跳转的路由
      this.UPDATE_STATE_ASYN({UrlLink: childrenMenu[0].path})
      this.$router.push({ path: `${childrenMenu[0].path}` })
    } else {
      this.data.childrenMenu = childrenMenu;
      // 调用父级方法设置当前是否是二级导航
      this.parent.setnavigation(false)
    }
    
  }
}
</script>

<style lang="scss" scope>
@import "@/assets/scss/variables.scss";

.Navigation-wrap {
  width: 110px;
  float: left;
  height: 100vh;
  background: #191a23;
}
.qw-logo-img {
  padding: 20px 0 27px;
  text-align: center;
  img {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    border-radius: 60px;
    background: #fff;
    display: block;
  }
}
.qw--menu {
  display: block;
  margin: 0;
  padding: 0;
  outline: none;
  list-style: none;
  color: #515a6e;
  font-size: 14px;
  position: relative;
  z-index: 900;
}
.qw-menu-item {
  padding: 10px 10px;
  display: block;
  outline: none;
  list-style: none;
  font-size: 14px;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-align: left;
  a,span {
    color: #fff;
    cursor: pointer;
    transition: color .2s ease;
  }
  span:hover {
    color: #57a3f3;
  }
  &.active{
    background: #fff;
    a,span{
    color: #2898ed;
    }
  }
}
</style>

