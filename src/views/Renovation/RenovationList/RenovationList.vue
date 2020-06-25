<template>
  <div class="RenovationList-wrap">
    <div class="hq-content">
      <div class="hq-page" :style="{backgroundColor:data.page.bgColor}">
        <div class="hq-design">
          <span>搭建</span>
        </div>
        <div class="zent-design-preview-item">
          <!--页面标题-->
          <div class="hq-design-component-config-preview">
            <div class="page-title">{{data.page.title}}</div>
          </div><!--页面标题 end-->
          <!--拖动组件-->
          <draggable class="hq-draggable"
          v-model="data.listdata" 
          :options="{group:'people',fallbackClass: 'sortable-fallback',animation:150,ghostClass:'sortable-ghost',chosenClass:'chosenClass',scroll:true,scrollSensitivity:200}">
              <template v-for="(item,index) in data.listdata">
                <!--搜索框-->
                <div :data-id="item.id" :class="item.checked?'hq_search hq-itme active':'hq_search hq-itme'"  @click="binscelect(item.id)" v-if="item.name === 'Search'" :key="index">
                  <van-icon @click="close(item.id)" class="hq-close" name="close" />
                  <component :is="item.name"></component>
                </div>
                <!--搜索框 end-->
                <template v-else>
                  <div :data-id="item.id" :class="item.checked?' hq-itme active':'hq-itme'"  @click="binscelect(item.id)" :key="index">
                    <van-icon @click="close(item.id)" class="hq-close" name="close" />
                    <component :is="item.name"></component>
                  </div>
                </template>
              </template>
          </draggable><!--拖动组件 end-->

        </div>
      </div>
    </div>
    <div class="hq-editor-wrap">
      <!--page 配置-->
      <div class="zent-design-preview-item">
        <div class="hq-config hq-design-editor-item">
          <div class="m-form">
            <label class="form-label">*页面名称:</label>
            <Input class="form_control" v-model="data.page.title" placeholder="请输入" clearable style="width: 220px" />
          </div>
          <div class="m-form">
            <label class="form-label">*页面描述:</label>
            <Input class="form_control" placeholder="请输入" clearable style="width: 220px" />
          </div>
          <div class="m-form">
            <label class="form-label">背景颜色:</label>
            <RadioGroup v-model="data.page.setbg">
              <Radio label="1">默认背景</Radio>
              <Radio label="2">自定义背景</Radio>
           </RadioGroup>
           <div class="m-colorselection" v-show="data.page.setbg === '2'">
             <ColorPicker v-model="data.page.bgColor" />
           </div>
          </div>
        </div>
      </div><!--page 配置 end-->
    </div>
  </div>
</template>

<script lang="ts" src="./RenovationList.ts"></script>

<style lang="scss" scope>
  @import './RenovationList.scss';

</style>

