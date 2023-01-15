<script setup lang="ts">
// import { defineAsyncComponent } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'
// const TheWelcome = defineAsyncComponent(() => import('../components/TheWelcome.vue'));
const count = ref(0);
const a = $ref(0);
onMounted(() => {
	console.log('mounted');
})
count.value ++;
console.log(count, a)

const props = defineProps({
	name: String
});
console.log(props)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
