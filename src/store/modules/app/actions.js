export default {
	setActiveStep({commit}, step) {
		commit('SET_ACTIVE_STEP', step)
	},
	hideHeader({commit}) {
		commit('HIDE_HEADER')
	},
}