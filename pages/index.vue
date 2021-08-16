<template>
  <v-container class="fill-height">
        <v-row justify="start" align="center">
          <v-col
            v-for="link in links"
            :key="link.to"
            cols="4"
          >
            <div>
              <v-img
                contain
                max-height="250"
                max-width="250"
                min-height="250"
                min-width="250"
                class="ma-auto"
                :src="link.img"
              />
              <p class="text-h4 text--primary">
                <NuxtLink :to="link.to">{{ link.title }}</NuxtLink>
              </p>
              <div class="text--primary">
                {{ link.description }}
              </div>
            </div>
          </v-col>
        </v-row>
  </v-container>
</template>

<script>

import {mapGetters} from "vuex";

export default {
  computed: {
    ...mapGetters({
      links: 'links/links'
    })
  },
}

</script>
