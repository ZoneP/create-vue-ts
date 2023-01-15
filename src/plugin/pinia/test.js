export function myPiniaPlugin(context) {
  // context.pinia // 用 `createPinia()` 创建的 pinia。 
  // context.app // 用 `createApp()` 创建的当前应用程序（仅 Vue 3）。
  // context.store // 该插件想扩展的 store
  // context.options // 定义传给 `defineStore()` 的 store 的可选对象。
  return {
		test: 'test'
	}
}