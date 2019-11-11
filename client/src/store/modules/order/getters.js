export default {
	hasExchanges: state => state.exchanges.length > 0,
	values(state) {
		const values = {}
		if (state.exchanges.length > 0) {
			values.exchanges = state.exchanges.map(exchange => exchange.evaluationValue).reduce((total, value) => total + value)
		} else {
			values.exchanges	= 0
		}
		if (state.payment.installmentMonths && state.payment.installmentValue) {
			values.installmentMonths = state.payment.installmentMonths
			values.installmentValue = state.payment.installmentValue
		}
		values.downPayment = parseInt(state.payment.downPayment) || 0
		values.subtotal = state.vehicle.value - values.exchanges - values.downPayment
		return values
	},
	clientFirstName: state => state.client.name ? state.client.name.split(' ')[0] : '',
}