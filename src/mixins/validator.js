export default {
	methods: {
		$isValidCellphone(cellphone) {
			return String(cellphone).match(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/)
		},
	},
}