export default {
	addExchange({commit}, data) {
		commit('ADD_EXCHANGE', data)
	},
	removeExchange({commit}, index) {
		commit('REMOVE_EXCHANGE', index)
	},
	setClient({commit}, data) {
		commit('SET_CLIENT', data)
	},
	setDownPayment({commit}, data) {
		commit('SET_DOWN_PAYMENT', data)
	},
	setInstallment({commit}, data) {
		commit('SET_INSTALLMENT', data)
	},
	setId({commit}, id) {
		commit('SET_ID', id)
	},
}