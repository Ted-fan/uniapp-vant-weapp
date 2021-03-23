import Vue from 'vue';
export default Vue.extend({
	name: 'orderPage',
	data() {
		return {
			statusBarHeight: this.$store.state.statusBarHeight,
		}
	},
	created() {
	},
	methods: {

	}
});
