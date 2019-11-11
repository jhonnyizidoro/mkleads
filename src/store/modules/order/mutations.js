export default {
	ADD_EXCHANGE(state, data) {
		state.exchanges.push(Object.assign({}, data))
	},
	REMOVE_EXCHANGE(state, index) {
		state.exchanges.splice(index, 1)
	},
}