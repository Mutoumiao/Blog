<template>
  <div>{{ item.title }}</div>
</template>

<script>
export default {
  name: 'ItemPage',
  serverPrefetch() {
    this.dispatch('fetchItem', this.$route.params.id)
  },
  computed: {
    item() {
      return this.$store.state.items[this.$route.params.id];
    },
  },
};
</script>
