<template>
    <div class="modals">
        <h1>Modal Page</h1>
        <button @click="showModal = true">Show Modal</button>
        <teleport to=".modals-container">
            <div v-if="showModal" class="modal">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur cumque consectetur perferendis quae repellat nesciunt error dolorem, itaque aut. Quaerat eius non placeat autem enim libero tempore nemo pariatur blanditiis?</p>
                <button @click="showModal = false">Hide Modal</button>
            </div>
        </teleport>
    </div>
</template>

<script setup>
// Import
import {ref} from 'vue'
// Import

const showModal = ref(false)



</script>


<style>
.modals{
    width: 500px;
    margin: auto;
}
.modal{
    background: wheat;
    padding: 10px;

    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
}


</style>