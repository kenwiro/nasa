<template>
  <v-row>
    <v-col>
      <v-row v-if="posts.length">
        <app-posts-list-item
          v-for="post in posts"
          :key="post.id"
          :post="post"
        />
      </v-row>
      <v-row v-else>
        <v-col>
          <p>Nothing to show</p>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>

export default {
  props: {
    posts: Array,
  }
}

</script>
