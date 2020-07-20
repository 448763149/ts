<template>
  <div class="ProductList-wrap">
    {{data.pageName}}
    商品管理
    <div style="height: 800px; width: 1200px; border: 1px solid red; position: relative;margin: 0 auto">
      <!-- <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        @refLineParams="getRefLineParams"
        class="test1">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :x="210"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        @refLineParams="getRefLineParams"
        class="test2">
      </vue-draggable-resizable>
      <vue-draggable-resizable
        :w="200"
        :h="200"
        :parent="true"
        :x="420"
        :debug="false"
        :min-width="200"
        :min-height="200"
        :isConflictCheck="true"
        :snap="true"
        :snapTolerance="10"
        v-on:resizing="onResize"
        v-on:dragging="onDrag"
        @refLineParams="getRefLineParams"
        class="test3">
        <p>Hello! I'm a flexible component. You can drag me around and you can resize me.<br>
      X: {{ data.x }} / Y: {{ data.y }} - Width: {{ data.width }} / Height: {{ data.height }}</p>
      </vue-draggable-resizable> -->
      <!--辅助线-->
      <!-- <span class="ref-line v-line"
            v-for="item in data.vLine"
            :key="item.id"
            v-show="item.display"
            :style="{ left: item.position, top: item.origin, height: item.lineLength}"
      />
      <span class="ref-line h-line"
            v-for="item in data.hLine"
            :key="item.id"
            v-show="item.display"
            :style="{ top: item.position, left: item.origin, width: item.lineLength}"
      /> -->
      <!--辅助线END-->
    </div>
  </div>
</template>

<script lang="ts" src="./ProductList.ts"></script>

<style lang="scss">
  @import './ProductList.scss'
</style>

