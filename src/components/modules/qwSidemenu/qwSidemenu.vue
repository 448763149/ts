<template>
  <div class="qwSidemenu-wrap">
    <div class="qw-sidemenu-two">
      <div class="qw-first-menu-name">
        {{title || ''}}
      </div>
      <div class="qw-menu-light">
        <div @click="childnav(item.title,item)" v-for="(item,index) in childrenMenu" :key="index">
          <router-link :class="data.childtitle === item.title?'active':''" :to="item.path" >
           {{item.title}}
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { QwSidemenuData } from '@/types/components/qwSidemenu.interface'
  // import {  } from "@/components" // 组件

  @Component({})
  export default class QwSidemenu extends Vue {
    // prop
    @Prop()
    public title!: string;
    @Prop({ type: Array, default() {return []}})
    public childrenMenu 
    // Watch
    @Watch('childrenMenu')
    public handler(newval: any, old: any) {
      if (newval && newval.length > 0) {
        this.data.childtitle = newval[0].title
      }
    }
    // data
    data: QwSidemenuData = {
      componentName: 'qwSidemenu',
      childtitle: this.childrenMenu ? this.childrenMenu[0].title : ''
    }

    created() {
      //
      // console.log(this.title)
      // debugger
      // if (this.childrenMenu) {
      //   this.data.childtitle = this.childrenMenu[0].title
      // }
      // console.log(this.childrenMenu)
    }
    
    activated() {
      //
    }

    mounted() {
      //
    }
    // 子导航选中
    childnav(activetitle, inkk) {
      this.data.childtitle = activetitle;
    }

  }
</script>

<style lang="scss" scope>
  @import "@/assets/scss/variables.scss";

  .qwSidemenu-wrap {
    width: 110px;
    background-color: #fbfdfc;
    border-right: 1px solid #eee;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      display: none;
    }
  }
//  .qw-sidemenu-two {
   
// }
.qw-first-menu-name {
    min-width: 110px;
    height: 64px;
    line-height: 64px;
    padding: 0 15px;
    border-bottom: 1px solid #eee;
    margin-bottom: 12px;
    font-size: 16px;
    color: #697b8c;
}
.qw-menu-light a{
  display: block;
  padding: 10px 10px;
  padding-left: 15px!important;
  position: relative;
  text-align: left;
  color: #515a6e;
  &.active{
    color: #2d8cf0;
    background: #f0fbff;
  }
  &.active:after {
    content: "";
    width: 2px;
    position: absolute;
    right: auto;
    top: 8px;
    bottom: 8px;
    left: 0;
    width: 3px;
    background: #2898ed;
  }
}


</style>

