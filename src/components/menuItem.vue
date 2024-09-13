<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  itemNumber: {
    type: Number,
    default: '0',
  },
});

const menuItemNumber = ref(props.itemNumber);

const handleMenuClick = () => {
  console.log(`Menu item number ${menuItemNumber.value} was clicked`);
};
</script>

<template>
  <div @click="handleMenuClick" class="menuItem">
    <p>{{ menuItemNumber }}</p>
  </div>
</template>

<style scoped>
.menuItem {
  position: absolute;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 3px solid var(--pine-black);
  cursor: pointer;
}

.menuItem:hover {
  background-color: #e0e0e0;
}

.menuItem > p {
  color: black;
  font-size: 1.25em;
  font-weight: 500;
}
</style>
