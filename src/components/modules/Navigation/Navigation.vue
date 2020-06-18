<template>
  <div>
    <div class="Navigation-wrap">
      <div class="qw-logo-img"><img src="@/assets/images/logo-small.png"></div>
      <div class="qw-sidemenu">
        <ul class="qw-menu">
          <li :class="data.title === itme.title ? 'qw-menu-item active':'qw-menu-item'" v-for="(itme,index) in data.MenuList" @click="binmenu(itme.title,itme.children)">
            <router-link :to="itme.title === '仪表盘' ? itme.path : ''">
              <Icon :type="itme.icon" :key="index" />
              {{itme.title}}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <template v-if="data.childrenMenu && data.childrenMenu.length > 0">
      <QwSidemenu :title="data.title" :childrenMenu="data.childrenMenu"></QwSidemenu>
    </template>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { Getter, Action } from "vuex-class";
import qwSidemenu from "../qwSidemenu/qwSidemenu.vue"; // 组件
import { NavigationData } from "@/types/components/Navigation.interface";
@Component({
   components: {
      QwSidemenu: qwSidemenu
   }
})
export default class Navigation extends Vue {
  @Getter("admin/login/info") info;
  // prop
  @Prop({
    required: false,
    default: ""
  })name!: string;

  // data
  data: NavigationData = {
    componentName: "Navigation",
    MenuList: [],
    title: '',
    childrenMenu: []
  };
  // 访问父级方法设置导航
  private parent: any = this.$parent;
  created() {
    //
    this.data.MenuList = this.info.userMenuList;
    if (this.data.MenuList && this.data.MenuList.length > 0) {
      this.data.title = this.data.MenuList[0].title;
    }
    if (this.data.MenuList && this.data.MenuList.children && this.data.MenuList.children.length > 0) {
      this.parent.setnavigation(true)
    } else {
      this.parent.setnavigation(false)
    }
    // console.log(this.info);
    // console.log(this.data.MenuList)
  }

  activated() {
    //
  }

  mounted() {
    //
  }
  // 设置导航
  binmenu(title, childrenMenu) {
    this.data.title = title;
    if (childrenMenu && childrenMenu.length > 0) {
      this.data.childrenMenu = childrenMenu;
      this.parent.setnavigation(true)
    } else {
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
  a {
    color: #fff;
  }
  &.active{
    background: #fff;
    a{
    color: #2898ed;
    }
  }
}
</style>

