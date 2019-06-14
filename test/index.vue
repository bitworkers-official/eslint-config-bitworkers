<template>
  <div>
    <button
      @click="count++"
      @keydown.enter="count++"
    />
    <div />
  </div>
</template>

<script lang="ts">
export const x = 0

export default {
  data() {
    return {
      count: 1,
    }
  },
  methods: {
    update(event: any) {
      this.$emit('update', event)
    },
  },
}
</script>

<style lang="stylus">
hello
  color green
</style>
