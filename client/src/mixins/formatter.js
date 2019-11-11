export default {
	methods: {
		$currency(value, decimals = 2) {
			const formattedValue = parseFloat(String(Math.abs(value))).toFixed(decimals).replace('.', ',').replace(/\B(?=(\d{3})+(?!\d))/g, '.')
			return value >= 0 ? `R$${formattedValue}` : `-R$${formattedValue}`
		},
		$toFloat(value) {
			return parseFloat(String(Number(String(value).replace(/[^\d-,]/g, '').replace(',', '.'))))
		},
	},
}