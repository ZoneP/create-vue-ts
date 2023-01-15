<template>
  <div class="about">
    <h1 :class="[red, bgGray]">This is an about page</h1>
		<p class="set">这是全局设定的暗色</p>
		<p>{{ x }} - {{ y }}</p>
		<button @click="toggle">切换全屏</button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { red, bgGray } from "@/css/common.module.scss";
import { useTodos } from '@/stores/todos'
import { debounceFilter, useEventListener, useFullscreen, useMouse } from '@vueuse/core'

const props = defineProps({
	id: String | Number,
});
console.log(props);

const todos = useTodos();
console.log(todos.todos)
todos.changeTodos('123');
console.log(todos.todos)
console.log(todos.count)
console.log(todos.test)
console.log(todos.hello)

const { x, y } = useMouse({
	eventFilter: debounceFilter(100)
});

const { isFullscreen, enter, exit, toggle } = useFullscreen();

useEventListener('mousemove', (e) => {
	// console.log(e)
})
</script>

<style lang="scss">
.set {
	color: $color;
}
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
