<template>
  <div class="">
    <Row :gutter="30">
      <Col span="16">
      <div class="grid-content box-shadow" ref="total_area">
        <img src="@/assets/images/total.png" alt="" srcset="" class="total" @load="handleLoad">
        <div class="grid-data">
          <div style="position: absolute;top:9%;padding-left: 3%;width:100%;">
            <span class="label">访客数</span><img src="@/assets/images/up.png" alt="" srcset=""><span
              class="label">30</span>
          </div>
          <div style="position: absolute;top:35%;padding-left: 3%;width:100%;">
            <span class="label">加购买家数</span><img src="@/assets/images/down.png" alt="" srcset=""><span
              class="label">30</span>
            <span class="label span2">加购金额</span><img src="@/assets/images/down.png" alt="" srcset=""><span
              class="label">2300.00</span>
          </div>
          <div style="position: absolute;top:60%;padding-left: 3%;width:100%;">
            <span class="label">下单买家数</span><img src="@/assets/images/up.png" alt="" srcset=""><span
              class="label">30</span>
            <span class="label span2">下单金额</span><img src="@/assets/images/down.png" alt="" srcset=""><span
              class="label">2300.00</span>
          </div>
          <div style="position: absolute;bottom:9%;padding-left: 3%;width:100%;">
            <span class="label">支付买家数</span><img src="@/assets/images/up.png" alt="" srcset=""><span
              class="label">30</span>
            <span class="label span2">支付金额</span><img src="@/assets/images/up.png" alt="" srcset=""><span
              class="label">2300.00</span>
            <span class="label span2">支付金额</span><img src="@/assets/images/down.png" alt="" srcset=""><span
              class="label">2300.00</span>
          </div>
          <div class="grid-rate1">加购转化率<br>0%</div>
          <div class="grid-rate2">支付转化率<br>0%</div>
          <div class="grid-rate3">下单支付<br>转换率<br>0%</div>
        </div>
      </div>
      </Col>
      <Col span="8">
      <div class="grid-notice box-shadow" :style="{height: data.totalHeight}">
        <div class="title"><img src="@/assets/images/agent.png" alt="" srcset="">待办提醒</div>
        <Row :gutter="5">
          <Col span="12">
          <p class="number">1200000</p>
          <div class="notict"><img src="@/assets/images/goods.png" alt="" srcset=""><span>待审核商品</span></div>
          </Col>
          <Col span="12">
          <p class="number">20</p>
          <div class="notict"><img src="@/assets/images/tousu.png" alt="" srcset=""><span>待处理投诉</span></div>
          </Col>
          <Col span="12">
          <p class="number">132</p>
          <div class="notict"><img src="@/assets/images/withdraw.png" alt="" srcset=""><span>待处理提现申请</span></div>
          </Col>
          <Col span="12">
          <p class="number">15</p>
          <div class="notict"><img src="@/assets/images/promotion.png" alt="" srcset=""><span>待审核促销活动</span></div>
          </Col>
          <Col span="12">
          <p class="number">30</p>
          <div class="notict"><img src="@/assets/images/merchant.png" alt="" srcset=""><span>待审核商户</span></div>
          </Col>
          <Col span="12">
          <p class="number">2</p>
          <div class="notict"><img src="@/assets/images/invoice.png" alt="" srcset=""><span>待开票单</span></div>
          </Col>
        </Row>
      </div>

      </Col>
    </Row>

    <!-- 订单概况 -->
    <div class="order_area box-shadow">
      <div class="title clearfix">
        <div class="fl">
          订单概况
        </div>
        <div class="fr">
           <Select @on-change="switchDate" v-model="data.value" placeholder="请选择" style="width:100px;margin-right: 10px;" class="qw-datetime">
              <Option v-for="(item,index) in data.options" :value="item.value" :key="index">{{ item.label }}</Option>
           </Select>
           <DatePicker @on-change="setDate" v-model="data.value1" :clearable="true" class="date default-date" type="daterange" placement="bottom-end" placeholder="请选择" style="width: 220px"></DatePicker>
        </div>
      </div>
      <div class="order_content">
        <div class="order_content_top clearfix">
          <div class="order_total_item" :class="{'order_total_active':data.orderTab==1}" @click="data.orderTab=1">
            <div class="label">订单笔数<span class="unit" style="margin-left: 5%">(笔)</span></div>
            <div class="total_num">1200000</div>
            <div>
              <span class="unit">同比</span>
              <img src="resources/image/up.png" alt="" srcset="">
              <span class="rate" style="color: #53D4B9">80％</span>
              <span class="unit">环比</span>
              <img src="resources/image/down.png" alt="" srcset="">
              <span class="rate" style="color: #FA4646">80％</span>
            </div>
          </div>
          <div class="order_total_item" :class="{'order_total_active':data.orderTab==2}" @click="data.orderTab=2">
            <div class="label">订单金额<span class="unit" style="margin-left: 5%">(元)</span></div>
            <div class="total_num">1200.00</div>
            <div>
              <span class="unit">同比</span>
              <img src="resources/image/up.png" alt="" srcset="">
              <span class="rate" style="color: #53D4B9">80％</span>
              <span class="unit">环比</span>
              <img src="resources/image/down.png" alt="" srcset="">
              <span class="rate" style="color: #FA4646">80％</span>
            </div>
          </div>
          <div class="order_total_item" :class="{'order_total_active':data.orderTab==3}" @click="data.orderTab=3">
            <div class="label">客单价<span class="unit" style="margin-left: 5%">(元)</span></div>
            <div class="total_num">500000.00</div>
            <div>
              <span class="unit">同比</span>
              <img src="resources/image/up.png" alt="" srcset="">
              <span class="rate" style="color: #53D4B9">80％</span>
              <span class="unit">环比</span>
              <img src="resources/image/down.png" alt="" srcset="">
              <span class="rate" style="color: #FA4646">80％</span>
            </div>
          </div>
          <div class="order_total_item" :class="{'order_total_active':data.orderTab==4}" @click="data.orderTab=4">
            <div class="label">退款笔数<span class="unit" style="margin-left: 5%">(元)</span></div>
            <div class="total_num">10000</div>
            <div>
              <span class="unit">同比</span>
              <img src="resources/image/up.png" alt="" srcset="">
              <span class="rate" style="color: #53D4B9">80％</span>
              <span class="unit">环比</span>
              <img src="resources/image/down.png" alt="" srcset="">
              <span class="rate" style="color: #FA4646">80％</span>
            </div>
          </div>
          <div class="order_total_item" :class="{'order_total_active':data.orderTab==5}" @click="data.orderTab=5">
            <div class="label">退款金额<span class="unit" style="margin-left: 5%">(元)</span></div>
            <div class="total_num">10000.00</div>
            <div>
              <span class="unit">同比</span>
              <img src="resources/image/up.png" alt="" srcset="">
              <span class="rate" style="color: #53D4B9">80％</span>
              <span class="unit">环比</span>
              <img src="resources/image/down.png" alt="" srcset="">
              <span class="rate" style="color: #FA4646">80％</span>
            </div>
          </div>
        </div>

        <!-- 订单趋势图 -->
        <Trend-chart :Dayslist="data.Dayslist"></Trend-chart>
        <!-- 订单趋势图 end-->

        <!-- 订单支付方式分布 && 订单支付方式占比 && 商户销售排行 -->
        <Row :gutter="20">
          <Col span="8">
            <Pay-method></Pay-method>
          </Col>
          <Col span="8">
            <Pay-rate></Pay-rate>
          </Col>
          <Col span="8">
            <Sales-rank></Sales-rank>
          </Col>
        </Row>
      </div>
    </div>
    <!-- end  订单概况 -->

  </div>
</template>

<script lang="ts" src="./index.ts"></script>

<style lang="scss" scope>
@import "./index.scss";
</style>

