<script setup>
import { ref, onMounted } from "vue";
import RadialMenu from "./components/radialMenu.vue";
import UIModifier from "./components/menuUIModifier.vue";

const menuVisible = ref(false);
const numMenuItems = ref(12);
const menuRadius = ref(200);
const cursorX = ref(0);
const cursorY = ref(0);

const handleClick = (event) => {
  menuVisible.value = !menuVisible.value;
  cursorX.value = event.clientX;
  cursorY.value = event.clientY;
};

onMounted(() => {
  window.addEventListener("click", handleClick);
});


</script>

<template>
  <h1>This is a radial menu prototype</h1>
  <UIModifier v-model:radius="menuRadius" v-model:menuItems="numMenuItems" />
  <RadialMenu
    :numItems="numMenuItems"
    :visible="menuVisible"
    :menuPosX="cursorX"
    :menuPosY="cursorY"
    :radius="menuRadius"
  />
</template>

<style scoped></style>
