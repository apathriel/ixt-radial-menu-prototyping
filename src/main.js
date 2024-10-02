import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')

const menuButton = document.getElementById('menu-button')

menuButton.addEventListener('click', (e) => {
    console.log(`${e} is the object passed to the handler representing the event`)
})
