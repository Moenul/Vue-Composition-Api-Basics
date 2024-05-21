<template>
  <div class="home">
    <h1 ref="appTitleRef">{{appTitle}}</h1>

    <h3>{{ counter.title }}: </h3>
    <div>
      <button @click="counter.decreaseCounter(2)" class="btn">--</button>
      <button @click="counter.decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{counter.count}}</span>
      <button @click="counter.increaseCounter(1)" class="btn">+</button>
      <button @click="counter.increaseCounter(2)" class="btn">++</button>
    </div>

    <p>This counter is {{ counter.oddOrEven }}</p>

    <div class="edit">
      <h3>Edit Title</h3>
      <input v-model="counter.title" type="text" v-autofocus>
    </div>
  </div>
</template>

<!-- Composition APi 3+ Version -->

<script setup>
// Imports
import { ref, onMounted } from 'vue'
// import { useCounter } from '@/use/useCounter'
import { useCounterStore } from '@/stores/counter'

import { vAutofocus } from '@/directives/vAutofocus'
// Imports

// App Title
  const appTitle = 'My Awesome Counter APP'

  const appTitleRef = ref(null)
  onMounted(() => {
    console.log(`The App title is: ${appTitleRef.value.offsetWidth} px width.`)
  })
// App Title

// Counter
  // const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()
// Counter

// Counter 
  const counter = useCounterStore()

</script>


<!-- Composition APi Older Version -->
<!-- <script>
import { ref } from 'vue'
export default{
  setup(){
    const counter = ref(0)

    const increaseCounter = () => {
      counter.value++
    }
    const decreaseCounter = () => {
      counter.value--
    }

    return{
      counter,
      increaseCounter,
      decreaseCounter
    }
  }
}
</script> -->

<!-- Option Api -->
<!-- <script>
export default{
  data(){
    return{
      counter:0
    }
  },
  methods: {
    increaseCounter(){
      this.counter++
    },
    decreaseCounter(){
      this.counter--
    }
  }
}
</script> -->

<style>
.home{
  text-align: center;
  padding: 20px;
}
.btn, .counter{
  font-size: 20px;
  margin: 10px;
  width: 30px;
  height: 30px;
}
.edit{
  margin-top: 50px;
}
</style>