<template>
  <div>
    <div v-if="isLoggedIn" class="image-container">
      <div v-for="image in allImages" :key="image.id">
        <router-link :to="`images/${image.id}`">
          <img :src="image.link" />
        </router-link>
      </div>
    </div>
    <h2 v-else>login to get started!</h2>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ImageList',
  computed: mapGetters(['allImages', 'isLoggedIn']),
  methods: mapActions(['fetchImages']),
  created() {
    this.fetchImages();
  },
};
</script>

<style scopped>
.image-container {
  column-count: 3;
  column-gap: 0;
}
img {
  max-width: 100%;
  padding: 5px;
}
</style>
