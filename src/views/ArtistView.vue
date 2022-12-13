<script setup lang="ts">
import { ref } from 'vue';
import { findArtist } from '@/api/spotify'
import { findArtistTopTracks } from '@/api/spotify';
import { useRoute } from 'vue-router';
import { trackSlotScopes } from '@vue/compiler-core';

const response = ref([]);

const track = ref([])

const route = useRoute()

//let date = new Date()

//<p class="ml-4 pt-2 text-white">{{tracks.artists[0].name}}</p>

async function init() {
  response.value = await findArtist(route.query.query)
  track.value = await findArtistTopTracks(route.query.query)
  console.log(track)
}

init()


</script>

<template>
    <div class="bloc-haut">
        <img :src="response.images[1].url" alt="artist-image">
        <p class="mt-20 ml-4 text-5xl text-white">{{response.name}}</p>
    </div>
    <div class="tracks">
        
    </div>
</template>

<style>

    
</style>