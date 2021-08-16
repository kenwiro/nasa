<template>
  <v-container>

    <v-row>
      <v-col>
        <v-btn
          class="mx-2"
          small
          color="primary"
          @click="$router.back()"
        >
          <v-icon>
            mdi-arrow-left
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-img
          height="200px"
          :src="post.imageUrl"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <p class="grey--text lighten-4--text">{{ post.newsSite }}</p>
      </v-col>
      <v-col cols="6">
        <p class="text-right grey--text lighten-4--text">{{ constructDate(post.publishedAt) }}</p>
      </v-col>
      <v-col>
        <p class="font-weight-bold" >{{ post.title }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="text-justify">{{ post.summary }}</p>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <p class="text-right grey--text lighten-4--text">Last update: {{ constructDate(post.updatedAt) }}</p>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="auto">
        <v-btn
          color="primary"
          target="_blank"
          :href="post.url">
          read more
        </v-btn>
      </v-col>
    </v-row>


  </v-container>
</template>

<script>

export default {
  props: {
    post: Object
  },
  methods: {
    constructDate(timestamp) {
      const date = new Date(timestamp);
      return `${date.getDate()}.${date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth() }.${date.getFullYear()}`;
    }
  }
}

</script>
