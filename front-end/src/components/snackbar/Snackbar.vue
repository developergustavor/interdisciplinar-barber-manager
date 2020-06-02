<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="snackbar"
      :color="type"
      right 
      top
    >
      {{ text }}
      <v-btn
        text
        @click="close()"
      >
        <v-icon>close</v-icon> 
      </v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: 'Snackbar',
  computed: {
    snackbar: {
      get () {
        return this.$store.getters['SnackbarStore/snackbar']
      },
      set () {
        this.close()
      }  
    },
    text () {
      return this.$store.getters['SnackbarStore/text']
    },
    type () {
      return this.$store.getters['SnackbarStore/type']
    }
  },
  methods: {
    close () {
      this.$store.dispatch('SnackbarStore/hideSnackbar').then(() => {})
    }
  }
}
</script>
