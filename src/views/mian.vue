<template>
  <div class="index-wrap page-index">
    <div class="qw-layout">
      <!-- <transition name="fade-quick"></transition> -->
        <div class="qw-layout-sider" :style="{width:data.navigationswitch ? '220px':'110px'}">
          <qw-menu></qw-menu>
        </div>
        <div class="qw-layout-inside" :style="{paddingLeft:data.navigationswitch ? '220px':'110px'}">
          <div :class="data.navigationswitch ? 'qw-disflex clearfix': 'qw-disflex qw-navigation clearfix'" >
            <div class="qw-header-right">
              <div class="qw-header-trigger ">
                  <Dropdown trigger="click" @on-click="handleClick">
                    <a href="javascript:void(0)">
                      <!-- <Icon type="ios-person-outline" size="24" /> -->
                      <!-- <img class="qw-portrait" :src="info.avatar" /> -->
                      <img class="qw-portrait" src="../assets/images/img.jpg" />
                      {{info.name}}
                    </a>
                    <DropdownMenu slot="list">
                      <DropdownItem name="Logout">退出登录</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
              </div>
            </div>
          </div>
          <div class="qw-layout-content">
            <router-view></router-view>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" src="./mian.ts"></script>

<style lang="scss" scope>
@import "./mian.scss";
.qw-disflex{
  position: fixed;
  top: 0;
  right: 0;
  left: 220px;
  z-index: 11;
  width: calc(100% - 220px);
  background: #fff;
  padding: 0;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  transition: all .2s ease-in-out;
  z-index: 3;
  display: block;
  height: 64px;
  line-height: 64px;
  &.qw-navigation{
    left: 110px;
    width: calc(100% - 110px);
  }
}
.qw-layout-content{
  padding-top: 64px;
  margin: 24px;
}
.qw-header-right{
  float: right;
}

.qw-header-trigger {
  padding: 0 10px;
  font-size: 14px;
  display: inline-block;
  // width: 64px;
  height: 64px;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease-in-out;
}

.qw-portrait{
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  overflow: hidden;
  border-radius:50%;
  vertical-align: middle;
}
</style>

