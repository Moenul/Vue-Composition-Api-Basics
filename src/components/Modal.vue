<template>
    <teleport to=".modals-container">
        <div v-if="modelValue" class="modal">
            <h1><slot name="title"/></h1>
            <h3>{{ author }}</h3>
            <slot />
            User Name: @{{ userData.username }}
            User Profession is: @{{ userInfo.profession }}
            <button @click="$emit('update:modelValue', false)">Hide Modal</button>
        </div>
    </teleport>
</template>

<script setup>
// Imports
import { inject } from 'vue';


// Props
const props = defineProps({
    author:{
        type: String,
        default: "Author Not Found!"
    },
    modelValue:{
        type: Boolean,
        default: false
    },
    userData:{
        type: Object
    }
})


// Emits
// const emit = defineEmits(['update:modelValue'])

// Handle Button

// const handleButtonClick = () => {
//     emit('update:modelValue', false)
// }

// UserInfo

const userInfo = inject('userInfo')

</script>

<style>
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