<script setup>
import { ref, onMounted } from 'vue';
import RadialMenu from './components/radialMenu.vue';

const menuVisible = ref(false);
const numMenuItems = ref(12);
const cursorX = ref(0);
const cursorY = ref(0);

const handleClick = (event) => {
  menuVisible.value = !menuVisible.value;
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
};

onMounted(() => {
  window.addEventListener('click', handleClick);
});
</script>

<template>
  <h1>This is a radial menu prototype</h1>
  <RadialMenu
    :numItems="numMenuItems"
    :visible="menuVisible"
    :menuPosX="cursorX"
    :menuPosY="cursorY"
  />
</template>

<style scoped></style>
