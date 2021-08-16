<template>
  <v-col
    cols="12"
  >
    <v-card
      class="mx-auto"
    >
      <v-card-text>
        <div>{{ post.newsSite }}</div>
        <p class="text-h6 text--primary">
          {{ post.title }}
        </p>
        <div class="text--primary">
          {{ post.summary }}
        </div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          text
          color="primary"
          @click="toPost"
        >
          Learn More
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>

  export default {
    props: {
      post: Object
    },
    methods: {
      toPost() {
        this.$router.push(this.$route.fullPath + '/' + this.post.id);
      }
    }
  }

</script>
