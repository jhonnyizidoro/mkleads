export default {
	addExchange({commit}, data) {
		commit('ADD_EXCHANGE', data)
	},
	removeExchange({commit}, index) {
		commit('REMOVE_EXCHANGE', index)
	},
}