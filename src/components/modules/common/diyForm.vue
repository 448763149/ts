<template>

  <div :class="name" v-if="componentconfig && Object.keys(componentconfig).length != 0">
    <Form :ref="name" :model="componentconfig">
      <template v-for="(item,index) in componentconfig.config">
          <async-load-comp :app="item.fileName" :configdata="item" :uuid="componentconfig.uuid"/>
      </template>
    </Form>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop, Watch } from "vue-property-decorator"
  import { Getter, Action } from 'vuex-class'
  import { DiyFormData } from '@/types/components/common/diyForm.interface'
  // import HRadio from './HRadio.vue'
  import AsyncLoadComp from '../asyncLoadComp.vue'
  // import {  } from "@/components" // 组件
  @Component({
     components: {
       asyncLoadComp: AsyncLoadComp,
     }
  })
  export default class DiyForm extends Vue {
    // prop
    @Prop({ type: String, default: ''})
    public name 
    @Prop()
    public componentconfig? 
    // @Action('admin/login/UPDATE_STATE_ASYN') UPDATE_STATE_ASYN
    // data
    data: DiyFormData = {
      componentName: this.name,
    }

    created() {
     //
    }
    
    activated() {
      //
    }

    mounted() {
      //
      
    }
    

  }
</script>

<style lang="scss" scope>
  @import "@/assets/scss/variables.scss";
  .m-form .form-label{
    width: 100px;
    margin-right: 5px;
  }
</style>

