import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		manifest: true,
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				nest: resolve(__dirname, 'nest/index.html')
			}
		}
	},
	envPrefix: ['VITE', 'VUE'],
	clearScreen: true, // 是否清屏
  plugins: [
		vue({
			reactivityTransform: true
		}),
		AutoImport({
			imports: ["vue", "vue-router"]
		})
	],
	esbuild: {
		jsxInject: `import { createApp } from 'vue'`
	},
	css: {
		modules: {
			localsConvention: 'camelCase'
		},
		preprocessorOptions: {
			scss: {
				charset: false,
				additionalData: `@import './src/assets/common.scss';`
			}
		}
	},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
