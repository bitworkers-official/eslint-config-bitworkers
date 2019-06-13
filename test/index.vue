<template>
  <div>
    <button @click="count++" @keydown.enter="count++" />
    <div />
  </div>
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
