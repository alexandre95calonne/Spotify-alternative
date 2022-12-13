<script setup lang="ts">
import { ref } from 'vue';
import { findAlbum } from '@/api/spotify'
import { useRoute } from 'vue-router';

const response = ref([]);

const route = useRoute()

//let date = new Date()

//<p class="ml-4 pt-2 text-white">{{tracks.artists[0].name}}</p>

async function init() {
  response.value = await findAlbum(route.query.query)
  console.log(response.value)
}


init()
</script>

<template>
    <div class="bloc-haut">
        <img :src="response.images[1].url" alt="album-image" class="img-alb"/>
        <div class="infos">
          <p class="title">{{response.name}}</p>
          <p class="artist">{{response.artists[0].name}}</p>
          <p class="nb-tracks">{{response.total_tracks}} track(s)</p>
          <p class="duration">{{Number(response.tracks.items[0].duration_ms / 60000).toFixed(2)}} minutes</p>
        </div>
    </div>

    <div v-if="response != 0" v-for="tracks in response.tracks.items">
      <div class="tracks">
        <p class="ml-4 pt-2">{{tracks.track_number}}</p>
        <p class="ml-2 pt-2">{{tracks.name}}</p>
        <div v-if="response != 0" v-for="artists in tracks.artists">
          <router-link :to="`/artist/?query=${artists.id}`"><p class="ml-4 pt-2 text-white">{{artists.name}}</p></router-link>
        </div> 
      </div>
    </div>

   
</template>

<style>

.bloc-haut {
  height: 380px;
  width: 100%;
  background-color: #363737;
  display: flex;
}

.img-alb {
  margin-left: 25px;
  padding-top: 25px;
  padding-bottom: 25px;
}

.infos {
  color: white;
  margin-left: 30px;
  margin-top: 200px;
}

.title {
  font-size: 45px;
}

.artist {
  margin-left: 5px;
}

.nb-tracks {
  margin-left: 5px;
}

.duration {
  margin-left: 5px;
}

.tracks {
  display: flex;
  height: 40px;
  background-color: #808383;
  position: relative;
}



.tracks:hover {
  background-color: #A9ACAC;
}

</style>