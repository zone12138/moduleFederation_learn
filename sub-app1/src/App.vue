<!--
 * @Author: xie 1459547902@qq.com
 * @Date: 2024-08-13 09:12:11
 * @LastEditors: xie 1459547902@qq.com
 * @LastEditTime: 2024-08-13 14:24:04
 * @FilePath: \moduleFederation\sub-app1\src\App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <ButtonTemplate>123</ButtonTemplate>
  <!-- <p>{{ sum(1, 2) }}</p> -->
</template>

<script setup>
import { defineAsyncComponent, onMounted, } from "vue";

const ButtonTemplate = defineAsyncComponent(() =>
  import("base/ButtonTemplate")
);

onMounted(async () => {
  console.log("app mounted");
  // const { sum } = await import("base/utils");
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
