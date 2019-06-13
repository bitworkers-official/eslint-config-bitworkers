<template>
  <button @click="count++" @keydown.enter="count++"></button>
</template>

<script>
export default Vue.extend({
  data() {
    return {
      count: 1,
    }
  },
})
</script>

<style></style>
