import type { VueElement } from "vue";

const math = {
	install(app: VueElement, options: object) {
		console.log(app, options)
	}
}

export default math;