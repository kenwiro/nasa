<template>
  <v-container class="fill-height ma-0 align-end">
    <app-loader v-if="$fetchState.pending" />
    <app-posts-list
      v-else
      :posts="posts"
    />
    <app-pagination
      :page="page"
      :count="articlesLink.count"
      @changePage="setPage"
    />
  </v-container>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  watch: {
    'page': '$fetch',
  },
  async fetch() {
    this.posts = await fetch(
      `https://api.spaceflightnewsapi.net/v3/articles?_limit=${this.limit}&_start=${this.page * this.limit}`
    ).then(res => res.json())
  },
  data() {
    return {
      page: 1,
      limit: 5,
      posts: []
    }
  },
  methods: {
    setPage(page) {
      this.page = page;
    }
  },
  computed: {
    ...mapGetters({
      articlesLink: 'links/articlesLink'
    })
  },
}
</script>
