import { instance } from './index';

export function search(query: string, type: string, limit = 10) {
  return instance.get('/search', {
    params: {
      q: query,
      type,
      limit,
    }
  })
  .then(response => {
    return response.data;
  })
}

export function findAlbum(id: string) {
   return instance.get(`/albums/${id}`).then(response => {
    return response.data
  })
}

export function findArtist(id:string) {
  return instance.get(`/artists/${id}`).then(response => {
    return response.data
  })
}

export function findArtistTopTracks(id:string) {
  return instance.get(`/artists/${id}/top-tracks`).then(response => {
    return response.data
  })
}