import { defineStore } from 'pinia'

// export const useTodos = defineStore('todos', () => {
// 	let todos = ref([]);
// 	const changeTodos = (val: string) => {
// 		todos.value.push(val);
// 	}
// 	return {
// 		todos,
// 		changeTodos,
// 	}
// });

export const useTodos = defineStore('todos', {
	state: () => ({
		todos: [] as string[]
	}),
	getters: {},
	actions: {
		changeTodos(val: string) {
			console.log(val);
			console.log(this, this.todos)
			this.todos.push(val);
		}
	},
});
