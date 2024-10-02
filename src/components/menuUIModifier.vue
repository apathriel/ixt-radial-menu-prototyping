<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  radius: { type: Number, default: 200 },
  menuItems: {type: Number, default: 4}
})

const emit = defineEmits(['update:radius', 'update:menuItems'])
const radiusSliderValue = ref(props.radius)
const itemsSliderValue = ref(props.menuItems)

const handleClick = (e) => {
  e.stopPropagation()
}

const updateRadius = () => {
  emit('update:radius', Number(radiusSliderValue.value))
}

const updateMenuItems = () => {
  emit('update:menuItems', Number(itemsSliderValue.value))
}

// Watch for changes from the parent component, if it should pass any.
watch(() => props.radius, (newValue) => {
  if (radiusSliderValue.value !== newValue) {
    radiusSliderValue.value = newValue;
  }
});

// Watching for menuItems as well.
watch(() => props.menuItems, (newValue) => {
  if (itemsSliderValue.value !== newValue) {
    itemsSliderValue.value = newValue;
  }
})

// Call updateRadius each time sliderValue is updated. Event is emitted with new (current) value.
watch(radiusSliderValue, (_) => {
  updateRadius();
});

watch(itemsSliderValue, (_) => {
  updateMenuItems();
})
</script>

<template>
  <div @click="handleClick" class="ui-modifier-menu-container">
    <div class="slider-container" id="radius-slider-container">
      <label for="radiusSlider" class="slider-label">Radius:</label>
      <input id="radiusSlider" v-model="radiusSliderValue" type="range" min="100" max="500" class="inputSlider">
      <input v-model="radiusSliderValue" type="number" min="100" max="500">
    </div>
    <div class="slider-container" id="menu-items-slider-container">
      <label for="itemsSlider" class="slider-label">Items:</label>
      <input id="itemsSlider" v-model="itemsSliderValue" type="range" min="1" max="20" class="inputSlider">
      <input v-model="itemsSliderValue" type="number" min="1" max="20">
    </div>
  </div>
</template>

<style scoped>
.ui-modifier-menu-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-radius: 1rem;
  padding: 1rem;
  min-width: 20vw;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border: 2px solid white;
  box-shadow: 6px 6px #fff;
}

.slider-container {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.5rem;
  justify-content: center;
}

.slider-label {
 
  min-width: 60px;
}

.inputSlider {
  flex-grow: 1;
}
</style>