<script setup>
import { defineProps, ref, computed } from 'vue';

const props = defineProps({
  visible: { type: Boolean, default: false },
  numItems: { type: Number, default: 4 },
  menuPosX: { type: Number, default: 0 },
  menuPosY: { type: Number, default: 0 },
  radius: { type: Number, default: 500 }, // Radius of the menu circle
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

const pieSliceStyle = (index) => {
  const degreePerSlice = 360 / props.numItems;
  const rotation = index * degreePerSlice;
  
  return {
    position: 'absolute',
    width: `${props.radius * 2}px`,
    height: `${props.radius * 2}px`,
    clipPath: 'polygon(50% 50%, 0 0, 100% 0)',
    transform: `rotate(${rotation}deg)`,
    transformOrigin: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
};

const handleItemClick = (itemNumber) => {
  console.log(`Clicked menu item: ${itemNumber}`);
};
</script>

<template>
  <div
    v-if="visibilityToggle"
    class="radial-menu"
    :style="menuStyle"
  >
    <div 
      v-for="(item, index) in menuItems"
      :key="item"
      :style="pieSliceStyle(index)"
      class="pie-slice"
      @click="handleItemClick(item)"
    >
      <div 
        class="menu-item"
        :style="{
          width: `${props.radius * 0.4}px`,
          height: `${props.radius * 0.4}px`,
          backgroundColor: `hsl(${(index * 360) / props.numItems}, 70%, 50%)`,
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer',
        }"
      >
      </div>
    </div>
  </div>
</template>

<style scoped>
.radial-menu {
  position: absolute;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  overflow: hidden;
}

.pie-slice {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
}
</style>