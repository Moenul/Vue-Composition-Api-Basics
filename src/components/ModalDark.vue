<template>
    <teleport to=".modals-container">
        <div v-if="modelValue" class="modal-dark">
            <h1><slot name="title"/></h1>
            <h3>{{ author }}</h3>
            <slot />
            <button @click="$emit('update:modelValue', false)">Hide Modal</button>
        </div>
    </teleport>
</template>

<script setup>
// Props
const props = defineProps({
    author:{
        type: String,
        default: "Author Not Found!"
    },
    modelValue:{
        type: Boolean,
        default: false
    }
})


// Emits
// const emit = defineEmits(['update:modelValue'])

// Handle Button

// const handleButtonClick = () => {
//     emit('update:modelValue', false)
// }



</script>

<style>
.modal-dark{
    background: darkslategray;
    color: white;
    padding: 10px;
    width: 100%;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
}
</style>