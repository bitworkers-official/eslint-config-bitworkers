<template>
  <div>
    <button
      @click="count++"
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
