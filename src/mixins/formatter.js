export default {
	methods: {
		$currency(value, decimals = 0) {
			const formattedValue = value.toLocaleString('pt-BR').replace(',', '.')
			if (decimals > 0) {
				return `R$${formattedValue},${'0'.repeat(decimals)}`
			}
			return `R$${formattedValue}`
		},
		$toFloat(value) {
			return parseFloat(String(Number(String(value).replace(/[^\d-,]/g, '').replace(',', '.'))))
		},
	},
}