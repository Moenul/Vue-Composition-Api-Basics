<template>
    <div class="modals">
        <h1>Modal Page</h1>
        <button @click="showModal = true">Show Modal</button>
        <Modal v-model="showModal" author="Moenul Islam">
            <template #title>My New Title</template>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cumque consectetur perferendis quae repellat nesciunt error dolorem, itaque aut. Quaerat eius non placeat autem enim libero tempore nemo pariatur blanditiis?</p>
        </Modal>
    </div>
</template>

<script setup>
// Import
import {ref} from 'vue'
import Modal from '@/components/Modal.vue'
// Import

const showModal = ref(false)



</script>


<style>
.modals{
    width: 500px;
    margin: auto;
}

</style>