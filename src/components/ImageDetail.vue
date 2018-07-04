<template>
  <div>
    <div v-if="isLoggedIn" class="image-item">
      <router-link to="/">
        <img :src="`https://i.imgur.com/${id}.png`">
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ImageDetail',
  computed: mapGetters(['isLoggedIn']),
  props: ['id'],
};
</script>

<style scoped>
.image-item {
  margin-top: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
img {
  transition: all 0.3s;
}
img:hover {
  box-shadow: 1px 1px 10px #aaa;
  transition: all 0.3s;
}
</style>
