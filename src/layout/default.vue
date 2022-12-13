<template>
  <div class="layout h-screen overflow-hidden flex flex-col">
    <nav class="h-20 p-4 bg-black shrink-0 text-white flex justify-between ">

      <div class="flex">
        <router-link to="/">
          <img src="/images/Logo.png" alt="Logo-spotify" class="logo"/>
        </router-link>
        <p class="text-xl mt-2 ml-4">Spotify Alternative</p>
      </div>
      

      <div class="flex">

          <form method="GET" action="/search">
            <input class="rounded-full text-black" type="text" name="query" placeholder="Search an album..."/>
          </form>


        <router-link to="/login"><button class="w-36 rounded-full bg-green-500 p-3">Log in</button></router-link>
      </div>

      


    </nav>

    <div class="flex-grow overflow-y-auto bg-neutral-800">
      <router-view />
    </div>

    <div class="h-20 bg-black shrink-0 flex items-center justify-center">
      Player
    </div>

  </div>
</template>

<script lang="ts" setup>

import { useStore } from '@/stores/store';

const store = useStore()

//console.log(store.search)

//@input="store.setSearch($event.target.value)"
</script>

<style>

form {
  margin-right: 20px;
}

input {
  height: 47px;
}

.logo {
  height: 45px;
}

</style>