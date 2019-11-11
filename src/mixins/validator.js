export default {
	methods: {
		$isValidCellphone: cellphone => String(cellphone).match(/^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/),
		$isValidEmail: email => String(email).match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/),
		$isValidCpf: cpf => String(cpf).match(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/)
	},
}