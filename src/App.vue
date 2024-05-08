<template>
  <div class="user-data">
    {{ userData.name }} | Network Status: <span class="netStatus" :style="{ color : online ? 'darkgreen' : 'darkred'}">{{ online ? 'Online' : 'Offline' }}</span>
    <div class="user-detail">
      Username: @{{ userData.username }} |
    {{ userInfo.profession }}
    </div>
    
  </div>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/modals">Modals</RouterLink>
        <RouterLink to="/posts">Posts</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView :userData="userData" />
</template>


<script setup>
import { reactive, provide } from 'vue';
import { useOnline } from '@vueuse/core'


const userData = reactive({
  name: 'Moenul',
  username: 'moenul22'
})

const userInfo = reactive({
  profession: 'Web Design',
})

provide('userInfo', userInfo)

// Online Status

const online = useOnline()


</script>

<style scoped>
.user-data{
  position: absolute;
  top: 0;
  right: 0;
  background: lightblue;
  font-size: 14px;
  padding: 5px;
}
.user-data .netStatus{
  font-weight: bold;
}

.user-detail{
  font-size: 12px;
  color: rgb(87, 87, 87);
}
header {
  line-height: 1.5;
  max-height: 100vh;
  display: block;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
