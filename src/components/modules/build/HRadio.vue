<template>
  <div class="m-form">
    <label class="form-label">{{configdata.data.label}}:</label>
    <RadioGroup v-model="configdata.data.value" @on-change="RadioGroup(configdata.data.value,configdata.uuid)">
      <Radio :label="item.id" :key="index" v-for="(item,index) in configdata.data.selectList">{{item.label}}</Radio>
    </RadioGroup>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { HRadioData } from '@/types/components/common/HRadio.interface'
  // import {  } from "@/components" // 组件
  import { setup } from "@/utils/common.ts" // 组件

  @Component({})
  export default class HRadio extends Vue {
    // prop
    @Prop()
    public configdata?: any;
    @Prop()
    public name?: any;
    @Prop()
    public uuid?: any;

    @Getter("admin/buildsystem/page") page

    @Action('admin/buildsystem/UPDATE_STATE_ASYN') UPDATE_STATE_ASYN
    // @Prop({ type: Array, default: () => ({})})
    // public componentconfig 
    // @Action('admin/login/UPDATE_STATE_ASYN') UPDATE_STATE_ASYN
    // data
    data: HRadioData = {
      componentName: '',
    }

    created() {
     //
     console.log(this.configdata)
    }
    
    activated() {
      //
    }

    mounted() {
      //
    }
    // 组件值变化
    // value 值 uuid 配置组件的uuid 用于查找组件设置值 this.name 组件名称
    // this.uuid 页面组件uuid
    // this.name 页面组件的名称
    RadioGroup(value, uuid) {
      setup(this.page, value, this.uuid, uuid, this.UPDATE_STATE_ASYN)
    }
    

  }
</script>

<style lang="scss" scope>
  @import "@/assets/scss/variables.scss";
</style>

