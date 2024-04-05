<template>
    <div class="modals">
        <h1>Modal Page</h1>
        <div>
            <label>Dark Mood </label>
            <input type="checkbox" v-model="showDarkModal">
        </div>
        <button @click="showModal = true">Show Modal</button>
        <component :is="showDarkModal ? ModalDark : Modal" v-model="showModal" :userData="userData" author="Moenul Islam">
            <template #title>My New Title</template>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cumque consectetur perferendis quae repellat nesciunt error dolorem, itaque aut. Quaerat eius non placeat autem enim libero tempore nemo pariatur blanditiis?</p>
        </component>
    </div>
</template>

<script setup>
// Import
import {ref} from 'vue'
import Modal from '@/components/Modal.vue'
import ModalDark from '@/components/ModalDark.vue'
// Import

const showModal = ref(false)

const showDarkModal = ref(false)

// Props

const props = defineProps({
    userData:{
        type: Object
    }
})

</script>


<style>
.modals{
    width: 500px;
    margin: auto;
}

</style>