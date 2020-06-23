<template>
  <div class="RenovationList-wrap">
    <div class="hq-content">
      <div class="hq-page" :style="{backgroundColor:data.page.bgColor}">
        <div class="hq-design">
          <span>搭建</span>
        </div>
        <div class="zent-design-preview-item">
          <div class="hq-design-component-config-preview">
            <div class="page-title">{{data.page.title}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="hq-editor-wrap">
      <!--page 配置-->
      <div class="zent-design-preview-item">
        
        <div class="hq-config hq-design-editor-item">
          <div class="m-form">
            <label class="form-label">*页面名称:</label>
            <Input class="form_control" v-model="data.page.title" placeholder="请输入" clearable style="width: 250px" />
          </div>
          <div class="m-form">
            <label class="form-label">*页面描述:</label>
            <Input class="form_control" placeholder="请输入" clearable style="width: 250px" />
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
  .hq-page{
    width: 320px;
    height: 1000px;
    background: #fff;
    position: relative;
    .hq-design{
      z-index: 2;
      color: #fff;
      position: absolute;
      left: 0px;
      span{
        display: block;
        width: 50px;
        text-align: center;
        line-height: 24px;
        height: 50px;
        transform: rotate(-40deg);
        position: relative;
        z-index: 999;
        font-size: 12px;
       
      }
      &:before{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        border-top: 50px solid #f44;
        border-right: 50px solid transparent;
        opacity: .9;
      }
    }
    
    .zent-design-preview-item{
      position: relative;
      z-index: 1;
    }
    
    .hq-config{
      position: absolute;
      left: 100%;
      top: 0;
      padding: 15px;
      min-height: 28px;
      background: #fff;
      border-radius: 5px;
      border: 1px solid #e5e5e5;
      width: 420px;
      margin-left: 20px;
      font-size: 12px;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      z-index: 5;
      
      
    }
  }
  .hq-editor-wrap{
      width: 376px;
      position: absolute;
      padding-bottom: 100px;
      top: 56px;
      right: 0;
      overflow-x: hidden;
      overflow-y: auto;
      bottom: 0;
      background: #fff;
  }
</style>

