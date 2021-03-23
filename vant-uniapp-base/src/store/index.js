import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		statusBarHeight: 0, // 状态栏高度
		navbarHeight: 0, // 导航栏高度
		menuRight: 0, // 胶囊距右方间距（方保持左、右间距一致）
		menuBottom: 0, // 胶囊距底部间距（保持底部间距一致）
		menuHeight: 0, // 胶囊高度（自定义内容可与胶囊高度保证一致）
		tabar: [], // tab
	},
	mutations: {
		SET_STATUS_HEIGHT(state, size) {
			state.statusBarHeight = size
		},
		SET_NAVBAR_HEIGHT(state, size) {
			state.navbarHeight = size
		},
		SET_MENU_RIGHT(state, size) {
			state.menuRight = size
		},
		SET_MENU_BOTTOM(state, size) {
			state.menuBottom = size
		},
		SET_MENU_HEIGHT(state, size) {
			state.menuHeight = size
		},
		SET_TABBAR(state, tabbar) {
			state.tabbar = tabbar || []
		}
	},
	actions: {
	}
})

export default store
