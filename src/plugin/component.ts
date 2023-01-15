import { defineAsyncComponent } from 'vue';
const components = import.meta.glob([
	'@/components/**/*.vue',
	'!@/components/icons/*.vue'
]); // 异步方式
// console.log(components)

export default function install(app) {
  for (const [key, value] of Object.entries(components)) {
    const name = key.slice(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
    app.component(name, defineAsyncComponent(value));
  }
}
