<template lang="">
  <div class="px-3 py-10 md:px-10">
    <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
      <TodoSpinner  v-if="loading"/>
      <template v-else>
        <TodoFormAdd />
        <TodoItems 
          v-if="$store.state.todos.length"
        />
        <TodoEmpty v-else/>
      </template>
    </div>
  </div>
</template>
<script>
import TodoSpinner from "@/components/Todos/TodoSpinner.vue";
import TodoFormAdd from "@/components/Todos/TodoFormAdd.vue";
import TodoItems from "@/components/Todos/TodoItems.vue";
import TodoEmpty from "@/components/Todos/TodoEmpty.vue";

export default {
  name: "TodosView",
  components: {
    TodoSpinner,
    TodoFormAdd,
    TodoItems,
    TodoEmpty,
  },
  data() {
    return {
      loading: false,
    };
  },
  async created() {
    this.loading = true;
    this.$store.dispatch("getTodos").finally(() => {
      this.loading = false;
    });
  },
};
</script>
<style lang="">
</style>