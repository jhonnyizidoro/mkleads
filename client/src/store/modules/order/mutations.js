import Vue from 'vue'

export default {
	ADD_EXCHANGE(state, data) {
		state.exchanges.push(Object.assign({}, data))
	},
	REMOVE_EXCHANGE(state, index) {
		state.exchanges.splice(index, 1)
	},
	SET_CLIENT(state, data) {
		state.client = data
	},
	SET_DOWN_PAYMENT(state, data) {
		Vue.set(state.payment, 'downPayment', data.downPayment)
	},
	SET_INSTALLMENT(state, data) {
		Vue.set(state.payment, 'installmentMonths', data.installmentMonths)
		Vue.set(state.payment, 'installmentValue', data.installmentValue)
	},
	SET_ID(state, id) {
		state.id = id
	},
}