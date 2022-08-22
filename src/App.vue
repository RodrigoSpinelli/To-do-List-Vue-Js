<template>
<div class="dark">
  <HeaderMain />
  <router-view></router-view>
</div>
</template>

<script>
import HeaderMain from '@/components/Header/Header-main.vue'
export default {
  name: "App",
  components: {
    HeaderMain
  },
};
</script>
