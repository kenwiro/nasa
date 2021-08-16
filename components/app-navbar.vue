<template>
    <v-app-bar
      color="primary lighten-1"
      flat
      light
      dense
    >
      <v-tabs align-with-title>
        <v-tab
          active-class="white--text"
          to="/"
        >Home</v-tab>
        <v-tab
          active-class="white--text"
          text
          v-for="link in links"
          :key="link.to"
          :to="link.to">{{ link.title }} ({{ link.count }})</v-tab>
      </v-tabs>
    </v-app-bar>

</template>

<script>

import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      links: 'links/links',
      userName: 'user/login'
    })
  }
}

</script>
