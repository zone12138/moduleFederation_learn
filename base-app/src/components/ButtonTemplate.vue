<template>
  <div>
    <button type="button" @click="handleClick">
      click
      <slot></slot>
    </button>
  </div>
</template>

<script setup>
const handleClick = () => {
  console.log("click: click from base-app");
};
</script>

<style lang="scss" scoped></style>
