<template>
  <div>
    <button
      @click="count++"
      @keydown.enter="count++"
    />
    <div />
  </div>
</template>

<script>
export const x = 0

export default {
  data() {
    return {
      count: 1,
    }
  },
}
</script>

<style lang="stylus">
hello
  color green
</style>
