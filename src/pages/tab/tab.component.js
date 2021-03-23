import Vue from 'vue';
import { mapState } from 'vuex';
import homePage from '../home/home.vue';
import orderPage from '../order/order.vue';
import minePage from '../mine/mine.vue';
export default Vue.extend({
	components: { homePage, orderPage, minePage },
	data() {
		return {
			active: 0,
		}
	},
	computed: {
		...mapState({
			tabbarTextColor: "tabbarTextColor",
			tabbarTextActiveColor: "tabbarTextActiveColor",
			tabbar: "tabbar"
		})
	},
	methods: {
		changeTab(event, index) {
			this.active = index
			uni.setNavigationBarTitle({
				title: event.title
			})
		},
	}
});
