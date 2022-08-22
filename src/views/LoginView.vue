<template>
<div class="px-3 py-10 md:px-10">
  <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/3 mx-auto">
    <div class="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
      <LoginForm/>
    </div>
  </div>
</div>

</template>
<script>
import LoginForm from '@/components/Forms/LoginForm.vue'
export default {
  components: {
    LoginForm
  }
}
</script>
<style lang="">
    
</style>