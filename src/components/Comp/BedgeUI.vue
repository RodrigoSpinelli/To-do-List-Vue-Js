<template>
  <span
    :class="classObject"
    class="
      bedge
    "
    >{{status}}</span
  >
</template>
<script>
export default {
  props: {
    status: {
      type: String,
      default: ''
    },
  },
  computed: {
    classObject() {
      return {
        'dark:bg-yellow-200 dark:text-yellow-900 bg-yellow-100 text-yellow-800': this.status === 'Beta',
        'dark:bg-purple-200 dark:text-purple-900 bg-purple-100 text-purple-800': this.status === 'Em breve',
        'dark:bg-green-200 dark:text-green-900 bg-green-100 text-green-800': this.status === 'New'
      }
    }
  },
  }
</script>
<style lang="scss" scoped>
.bedge {
  @apply text-xs font-semibold mr-2 px-2.5 py-0.5 rounded
}
</style>
