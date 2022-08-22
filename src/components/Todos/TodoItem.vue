<template>
  <div class="bg-gray-300 rounded-sm dark:bg-gray-900">
    <div
      class="
        flex
        items-center
        px-4
        py-3
        border-b
        last:border-b-0
      "
      :class="{
          'border-l-4 border-green-800': isCompleted,
          'border-l-4 border-orange-400': !isCompleted,
          }"
    >
      <div class="flex items-center justify-center mr-2">
        <button
          class="hover:text-green-600"
          :class="{
            'text-green-600': isCompleted,
            'text-gray-400': !isCompleted,
          }"
          @click="onCheckClick"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        </button>
      </div>

      <div class="w-full">
        <input
          v-model="title"
          :disabled="isCompleted"
          :class="{
            'dark:text-green-700 cursor-not-allowed': isCompleted,
            'dark:text-orange-600': !isCompleted,}"
          type="text"
          placeholder="Digite a sua tarefa"
          class="
            dark:bg-gray-900
            border border-gray-150
            text-gray-900 text-sm
            border-none
            rounded-lg
            focus:ring-blue-500 focus:border-blue-500
            block
            w-full
            p-2.5
            dark:border-gray-600
            dark:placeholder-gray-400
            dark:focus:ring-blue-500
            dark:focus:border-blue-500"
          @keyup.enter="onTitleChange"
        />
      </div>

      <div class="ml-auto flex items-center justify-center">
        <button class="focus:outline-none" @click="onDelete">
          <svg
            class="ml-3 h-4 w-4 hover:text-red-800 text-gray-500"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 7L18.1327 19.1425C18.0579
                20.1891 17.187 21 16.1378 21H7.86224C6.81296 21 5.94208 20.1891 5.86732
                19.1425L5 7M10 11V17M14 11V17M15 7V4C15 3.44772 14.5523 3 14 3H10C9.44772
                3 9 3.44772 9 4V7M4 7H20"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  props: {
    todo: {
      type: Object,
      default: () => ({}),
    },
  },

  data() {
    return {
      title: this.todo.title,
      isCompleted: this.todo.completed,
    };
  },

  methods: {
    updateTodo() {
      const payload = {
        id: this.todo.id,
        data: {
          title: this.title,
          completed: this.isCompleted,
        },
      };
      this.$store.dispatch("updateTodo", payload);
    },

    onTitleChange() {
      if (!this.title) {
        return;
      }

      this.updateTodo();
    },

    onCheckClick() {
      this.isCompleted = !this.isCompleted;
      this.updateTodo();
    },
    onDelete() {
      this.$store.dispatch("deleteTodo", this.todo.id);
    },
  },
};
</script>