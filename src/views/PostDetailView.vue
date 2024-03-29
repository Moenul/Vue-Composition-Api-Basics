<template>
  <div class="post-detail">
    <h1 class="pageTitle">This is our Post page</h1>
    <p>Display the content of post with ID {{ $route.params.id }} here!</p>

    <div>
      <button @click="showPostId">Show Post Id</button>
    </div>
    <div>
      <button @click="goBackIn3Seconds">Go Back in 3 seconds</button>
    </div>
    <div>
      <button @click="goToFirstPost">Go To First Post</button>
    </div>

    
    <RouterLink to="/posts"> &lt; Back</RouterLink>
    
  </div>
</template>

<script setup>
// Imports
import { useRoute, useRouter } from 'vue-router';
// Imports

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(`The Id of this post is: ${ route.params.id }`)
}

const goBackIn3Seconds = () => {
  setTimeout(() => {
    router.push({ name: 'home' })
  }, 3000);
}

const goToFirstPost = () => {
  router.push({
    name: 'postDetail',
    params: {
      id: 'id1'
    }
  })
}

</script>



<style scoped>


.post-detail{
  width: 80%;
  margin: 0 auto;
}
.pageTitle{
  text-align: center;
}

button{
  display: block;
  float: left;
  margin: 5px;
  padding: 5px;
}

</style>