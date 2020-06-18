<template>
  <div class="login-wrap page-login">
    <div class="page-login-header">
      <div class="qw-w1200 qw-disflexC qw-logo">
        <img src="@/assets/images/lwllogo.png" alt="logo">
      </div>
    </div>
    <div class="page-login-container">
      <div class="qw-w1200">
        <div class="qw-loginbox">
          <div class="qw-login-h2">账户登录</div>
          <div class="qw-login-form">
            <Form ref="loginForm" :model="data.loginData" :rules="data.loginRules">
              <FormItem label="" prop="userName">
                <Input v-model="data.loginData.userName" size="large" prefix="ios-contact-outline"
                  placeholder="请输入用户名"></Input>
              </FormItem>
              <FormItem label="" prop="pwd">
                <Input type="password" @keyup.enter.native="handleSubmit('loginForm')" v-model="data.loginData.pwd"
                  size="large" prefix="ios-lock-outline" placeholder="请输入密码"></Input>
              </FormItem>
              
              <FormItem label="">
                <Checkbox v-model="data.autoLogin" size="large">记住密码</Checkbox>
              </FormItem>
              <FormItem label="">
                <Button type="primary" long size="large" 
                  @click="handleSubmit('loginForm')">登录</Button>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
    </div>
    <div>
			<Copy-right></Copy-right>
		</div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style lang="scss" scope>
@import "./login.scss";
</style>

