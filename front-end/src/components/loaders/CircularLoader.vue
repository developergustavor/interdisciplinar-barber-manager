<template>
  <img :src="require('@/assets/gif/preloader.gif')" class="preloader" />
  <!-- <v-progress-circular
      id="circular-loader"
      size="60"
      width="3"
      indeterminate
      color="accent"
      class="progress-circular"
    ></v-progress-circular> -->
</template>

<script>
export default {
  name: 'CircularLoader'
}
</script>