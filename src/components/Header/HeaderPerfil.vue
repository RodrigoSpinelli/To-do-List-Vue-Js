<template>
  <button type="button"  class="flex items-center gap-x-1 text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown" data-dropdown-placement="bottom">
        <span class="sr-only">Open user menu</span>
        <img class="w-8 h-8 rounded-full" src="@/assets/img/minha-foto.jpg" alt="user photo">
        <svg class="w-4 h-4 mx-1.5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
      </button>
      <!-- Dropdown menu -->
      <div class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" id="dropdown" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(589px, 82px);">
        <div class="py-3 px-4">
          <span class="block text-sm text-gray-900 dark:text-white">{{ UserName }}</span>
          <span class="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">{{ UserEmail }}</span>
        </div>
        <ul class="py-1" aria-labelledby="user-menu-button">
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Perfil</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Configurações</a>
          </li>
          <li>
            <!-- <DarkMode/> -->
          </li>
          <li>
            <router-link to="/login" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sair</router-link>
          </li>
        </ul>
      </div>
</template>
<script>
// import DarkMode from '@/components/DarkMode.vue'
export default {
  name: 'HeaderPerfil',
  created(){
    this.$store.dispatch('getUsers')
  },
  computed: {
     UserName(){
      return this.$store.state.users.name
    },
    UserEmail(){
      return this.$store.state.users.email
    }
  }
}
</script>
<style lang="">
    
</style>