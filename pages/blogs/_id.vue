<template>
  <div>
    <app-post :post="post" />
  </div>
</template>

<script>

export default {

  async fetch() {
    this.post = await fetch(
      `https://api.spaceflightnewsapi.net/v3/blogs/${this.$route.params.id}`
    ).then(res => res.json())

  },
  data() {
    return {
      post: {}
    }
  },
}

</script>
