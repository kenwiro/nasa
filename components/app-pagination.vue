<template>
  <v-row>
    <v-col>
      <div class="text-center">
        <v-pagination
          circle
          :value="page"
          :length="Math.floor(count/5)"
          :total-visible="7"
          @input="changePage"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>

export default {

  props: {
    page: Number,
    count: Number
  },
  methods: {
    changePage(page) {
      this.$emit('changePage', page);
    }
  }
}

</script>
