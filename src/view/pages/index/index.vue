<template>
  <div class="index_page_box">
    <div class="timeline_box">
      <ul class="list_box">
        <li class="item" v-for="(item, index) in listData" :key="index">
          <div class="style_pos" :class="{redbg: item.isRed}" :style="{width: item.width, bottom: item.bottom, left: item.left, animationDelay: item.delay, zIndex: index+1}">
            <div class="text">
              <div class="title">{{item.time}}</div>
              <div class="detail">{{item.detail}}</div>
            </div>
            <div class="line" :style="{height: item.line}"></div>
            <div class="point"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
@import "./index.scss";
</style>
