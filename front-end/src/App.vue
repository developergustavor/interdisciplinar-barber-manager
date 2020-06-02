<template>
  <v-app id="app">
    <router-view />
    <snackbar />
  </v-app>
</template>

<script>
import Snackbar from "@/components/snackbar/Snackbar";
export default {
  name: "App",
  components: { Snackbar }
};
</script>
