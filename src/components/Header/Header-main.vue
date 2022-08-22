<template>

<nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
  <HeaderLogo/>
  <div class="flex items-center md:order-2">  
      <header-perfil/>
      <header-mobile-button/>
  </div>
  <div class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
    <header-menu-list/>
  </div>
  </div>
</nav>

</template>

<script>
import HeaderLogo from '@/components/Header/HeaderLogo.vue'
import HeaderPerfil from './HeaderPerfil.vue'
import HeaderMobileButton from './HeaderMobileButton.vue'
import HeaderMenuList from './HeaderMenuList.vue'
export default {
    name: 'HeaderMain',
    components: {
      HeaderLogo,
        HeaderPerfil,
        HeaderMobileButton,
        HeaderMenuList,
    }
}
</script>
<style lang="">
    
</style>