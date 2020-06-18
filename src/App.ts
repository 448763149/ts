
import { Component, Vue, Prop, Provide} from "vue-property-decorator";
import { AppData } from "./types/views/App.interface";
import { Getter } from "vuex-class"
@Component
export default class App extends Vue {
	name!: string;
	@Provide()
	reload = this.provide()
	data: AppData = {
    isRouterAlive: true
	}
	created() {
		// console.log(this.data.isRouterAlive)
	}
	provide() {
    return {
      reload: this.reloadbox
    };
  }
	reloadbox() {
		this.data.isRouterAlive = false;
		this.$nextTick(() => {
			this.data.isRouterAlive = true;
		});
	}
};
