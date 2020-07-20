<template>
  <div class="m-form">
    <label class="form-label">{{configdata.data.label}}:</label>
    <ColorPicker @on-change="colorPicker(configdata.data.value,configdata.uuid)" v-model="configdata.data.value" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { HRadioData } from '@/types/components/common/HRadio.interface'
  import { setup } from "@/utils/common.ts" // 组件

  @Component({})
  export default class HColorPicker extends Vue {
    // prop
    @Prop()
    public configdata?: any;
    @Prop()
    public name?: any;
    @Prop()
    public uuid?: any;

    @Getter("admin/buildsystem/page") page
    @Action('admin/buildsystem/UPDATE_STATE_ASYN') UPDATE_STATE_ASYN
    // data
    data: HRadioData = {
      componentName: '#ffffff',
    }

    created() {
     //
    //  console.log(this.configdata)
    }
    
    activated() {
      //
    }

    mounted() {
      //
    }

    colorPicker(value, uuid) {
      // 组件值变化
      setup(this.page, value, this.uuid, uuid, this.UPDATE_STATE_ASYN)
    }
    

  }
</script>

<style lang="scss" scope>
  @import "@/assets/scss/variables.scss";
  
</style>

