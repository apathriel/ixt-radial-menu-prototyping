<script setup>
import { defineProps, ref, computed } from 'vue';
import MenuItem from './menuItem.vue';

const props = defineProps({
  visible: { type: Boolean, default: false },
  numItems: { type: Number, default: 4 },
  menuPosX: { type: Number, default: 0 },
  menuPosY: { type: Number, default: 0 },
  radius: { type: Number, default: 200 }, // Radius of the menu circle
});

const visibilityToggle = computed(() => props.visible);

const menuStyle = computed(() => ({
  left: `${props.menuPosX}px`,
  top: `${props.menuPosY}px`,
  width: `${props.radius * 2}px`,
  height: `${props.radius * 2}px`,
}));

const menuItems = computed(() =>
  Array.from({ length: props.numItems }, (_, i) => i + 1)
);

const menuItemSize = computed(() => {
  const circumference = 2 * Math.PI * props.radius;
  const itemWidth = (circumference / props.numItems) * 0.8;
  return Math.min(itemWidth, props.radius * 0.7);
});

const menuBackgroundStyle = computed(() => ({
  width: '100%',
  height: '100%',
  border: '2px dashed #ccc',
  pointerEvents: 'none',
  borderRadius: props.numItems > 4 ? '50%' : '0%',
}));

const calculatePosition = (index) => {
  const angle = (2 * Math.PI * index) / props.numItems;
  const x = props.radius * Math.cos(angle);
  const y = props.radius * Math.sin(angle);
  return { x, y };
};
</script>

<template>
  <div
    v-if="visibilityToggle"
    class="radial-menu"
    :style="menuStyle"
    ref="menuRef"
  >
    <div class="menu-background" :style="menuBackgroundStyle"></div>
    <MenuItem
      v-for="(item, index) in menuItems"
      :itemNumber="item"
      :key="item"
      :index="index"
      :style="{
        position: 'absolute',
        left: `calc(50% + ${calculatePosition(index).x}px)`,
        top: `calc(50% + ${calculatePosition(index).y}px)`,
        transform: 'translate(-50%, -50%)',
        width: `${menuItemSize}px`,
        height: `${menuItemSize}px`,
      }"
    />
  </div>
</template>

<style scoped>
.radial-menu {
  position: absolute;
  transform: translate(-50%, -50%);
}
</style>
