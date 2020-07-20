<template>
  <div class="RenovationList-wrap">
    <div class="hq-content">
      <div class="hq-page" :style="{backgroundColor:page.bgColor}">
        <div class="hq-design">
          <span>搭建</span>
        </div>
        <div class="zent-design-preview-item">
          <!--页面标题-->
          <div class="hq-design-component-config-preview" @click="binscelect()">
            <div class="page-title">{{page.title}}</div>
          </div><!--页面标题 end-->
          <!--拖动组件-->
          <draggable class="hq-draggable"
          v-model="page.components" 
          :options="{group:'people',fallbackClass: 'sortable-fallback',animation:150,ghostClass:'sortable-ghost',chosenClass:'chosenClass',scroll:true,scrollSensitivity:200}">
              <template v-for="(item,index) in page.components">
                <div :data-uuid="item.uuid" :class="item.checked?' hq-itme active':'hq-itme'"  @click="binscelect(item.uuid,item,item.name)" :key="index">
                  <van-icon @click.stop="close(item.uuid)" class="hq-close" name="close" />
                  <!-- <component :is="item.name" :configdata="item" ></component> -->
                   <async-load-comp :app="item.name" :configdata="item" />
                </div>
              </template>
          </draggable><!--拖动组件 end-->
        </div>
      </div>
    </div>
    <div class="hq-editor-wrap">
      <template v-if="data.ispage">
        <!--page 配置-->
        <div class="zent-design-preview-item">
          <div class="hq-config hq-design-editor-item">
            <div class="m-form">
              <label class="form-label">*页面名称:</label>
              <Input class="form_control" v-model="page.title" placeholder="请输入" clearable style="width: 220px" />
            </div>
            <div class="m-form">
              <label class="form-label">*页面描述:</label>
              <Input class="form_control" placeholder="请输入" clearable style="width: 220px" />
            </div>
            <div class="m-form">
              <label class="form-label">背景颜色:</label>
              <RadioGroup v-model="page.setbg" @on-change="bgRadio">
                <Radio label="1">默认背景</Radio>
                <Radio label="2">自定义背景</Radio>
            </RadioGroup>
            <div class="m-colorselection" v-show="page.setbg === '2'">
              <ColorPicker v-model="page.bgColor" />
            </div>
            </div>
          </div>
        </div><!--page 配置 end-->
      </template>
      <template v-else>
        <DiyForm :componentconfig="data.componentconfig" :name="data.name"></diyForm>
      </template>
    </div>
  </div>
</template>

<script lang="ts" src="./RenovationList.ts"></script>

<style lang="scss" scoped>
  @import './RenovationList.scss';
</style>

