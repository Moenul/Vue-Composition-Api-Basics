<template>
  <div class="home">
    <h1 ref="appTitleRef">{{appTitle}}</h1>

    <h3>{{ counterData.title }}: </h3>
    <div>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="counter">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn">+</button>
    </div>

    <p>This counter is {{ oddOrEven }}</p>

    <div class="edit">
      <h3>Edit Title</h3>
      <input v-model="counterData.title" type="text" v-autofocus>
    </div>
  </div>
</template>

<!-- Composition APi 3+ Version -->

<script setup>
// Imports
import { ref, reactive, computed, watch, onMounted, nextTick } from 'vue'

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
  const counterData = reactive({
    count: 0,
    title: "My Title"
  })

  watch(() => counterData.count, (newCount) => {
    if(newCount === 10){
      alert("New Count is: " + newCount)
    }
  })

  const oddOrEven = computed(() => {
    if(counterData.count % 2 === 0) return 'Even'
    return 'Odd'
  })

  const increaseCounter = async (amount, e) => {
    counterData.count += amount
    await nextTick()
      console.log('Do something when counter is updated in DOM')
  }
  
  const decreaseCounter = amount => {
    counterData.count -= amount
  }

onMounted(() => {
  console.log("Do stuff related with Counter")
})

// Counter


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