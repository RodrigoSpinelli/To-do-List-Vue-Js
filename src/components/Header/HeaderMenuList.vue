<template>
  <ul
    class="
      flex flex-col
      p-4
      mt-4
      bg-gray-50
      rounded-lg
      border border-gray-100
      md:flex-row
      md:space-x-8
      md:mt-0
      md:text-sm
      md:font-medium
      md:border-0
      md:bg-white
      dark:bg-gray-800
      md:dark:bg-gray-900
      dark:border-gray-700
    "
  >
    <li v-for="(lista, index) in MenuLista"
    :key="index">
      <router-link
        :to="lista.routeName"
        class="
          block
          py-2
          pr-4
          pl-3
          text-white
          bg-blue-700
          rounded
          md:bg-transparent md:text-blue-700 md:p-0
          dark:text-white
        "
        >{{lista.name}} &nbsp;
        <BedgeUi v-if="lista.status" :status="lista.status"/>
        </router-link
      >
    </li>
  </ul>
</template>
<script>
import BedgeUi from '@/components/Comp/BedgeUI.vue';
export default {
  components: {
    BedgeUi,
  },
  data() {
    return {
      MenuLista: [{
        name: 'Tarefas',
        status: 'Beta',
        routeName: '/'
      }, {
        name: 'Help Desk',
        status: 'Em breve',
        routeName: 'helpdesk'
      }, {
        name: 'Novas telas',
        status: 'New',
        routeName: 'new'
      }, {
        name: 'Oque vem por aí',
        status: '',
        routeName: 'next'
      }]
    }
  },
};
</script>
<style lang="">
</style>