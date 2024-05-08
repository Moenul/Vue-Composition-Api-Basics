<template>
  <div class="posts">
    <h1 class="pageTitle">This is our Post page</h1>

    <ul>
      <li v-for="post in posts" :key="post.id">
        <RouterLink :to="`/postDetail/${ post.id }`">{{post.title}}</RouterLink>
      </li>
    </ul>


    <label for="textarea">Write Here ..</label>
    <textarea v-autofocus cols="130" rows="10"></textarea>

    <div>
      <button @click="increaseCounter(1)" class="counter-btn" :class="{ 'yellow' : oddOrEven === 'Odd'}">{{ counterData.count }}</button>
    </div>
  </div>
</template>

<script setup>
// Imports
import { ref } from 'vue'
import { vAutofocus } from '@/directives/vAutofocus'
import { useCounter } from '@/use/useCounter'


// Counter
const { counterData, oddOrEven, increaseCounter, decreaseCounter } = useCounter()

// Counter

const posts = ref([
  {
    id:'id1',
    title:'Post 1'
  },
  {
    id:'id2',
    title:'Post 2'
  },
  {
    id:'id3',
    title:'Post 3'
  },
])


</script>

<style scoped>
.posts{
  width: 80%;
  margin: 0 auto;
}
.posts .pageTitle{
  text-align: center;
}
ul{
  list-style: none;
  margin-bottom: 30px;
}
.counter-btn{
  width: 100%;
  font-size: 24px;
}
.counter-btn.yellow{
  background: yellow;
}
</style>