<template lang="">
  <div class="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
    <label for="default-toggle-1" class="inline-flex relative items-center w-full cursor-pointer">
      <input type="checkbox" @click="onCheckClick" v-model="DarkMode" id="default-toggle-1" class="sr-only peer">
      <div class="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-500 peer-checked:bg-blue-600"></div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Modo Dark</span>
    </label>
  </div>
</template>
<script>

export default {

}
</script>
<style lang="">
    
</style>