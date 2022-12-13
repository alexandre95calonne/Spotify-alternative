<script setup lang="ts">
import { ref } from 'vue';
import { search } from '@/api/spotify';
import { useRoute } from 'vue-router';

const response = ref([]);

const route = useRoute()

//let date = new Date()


async function init() {
  response.value = await search(route.query.query, 'album')
}


init()
</script>

<template>
  <main class="p-16 flex flex-wrap">

   <div class="ml-10 mt-8" v-if="response != 0" v-for="albums in response.albums.items">
      <router-link :to="`/albums/?query=${albums.id}`">
        <img :src="albums.images[1].url" alt="image-album">
        <div id="card">
          <h1>{{albums.name}}</h1>
          <p>{{albums.artists[0].name}}</p>
          <p>{{new Date(albums.release_date).getFullYear()}}</p>
        </div>
      </router-link>
   </div>

  </main>
</template>

<style scoped>

  #card {
    width: 300px;
    background-color: #CFD0D0;
    overflow-wrap: break-word;
  }


</style>
