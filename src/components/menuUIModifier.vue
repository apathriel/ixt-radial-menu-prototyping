<script setup>

import { ref, watch } from 'vue';

const props = defineProps({
    radius: {type: Number, default: 200}
})

const emit = defineEmits(['update:radius'])

const sliderValue = ref(props.radius)

const handleClick = (e) => {
    e.stopPropagation()
}

const updateRadius = () => {
    emit('update:radius', Number(sliderValue.value))
}

// Watch for changes from the parent component, if it should pass any. 
watch(() => props.radius, (newValue) => {
  if (sliderValue.value !== newValue) {
    sliderValue.value = newValue;
  }
});

// Call updateRadius each time sliderValue is updated. Event is emitted with new (current) value.
watch(sliderValue, (newValue) => {
  updateRadius();
});

</script>

<template>
<div @click="handleClick" class="ui-modifier-menu-container">
    <input v-model="sliderValue" type="range" min="100" max="500" class="inputSlider">
    <input v-model="sliderValue" type="number" min="100" max="500">
</div>

</template>

<style scoped>
.ui-modifier-menu-container {
    border-radius: 1rem;
    padding: 1rem;
    min-width: 20vw;
    position: fixed;
    top: 1rem;
    right: 1rem;
    border: 3px solid red;
}

</style>
