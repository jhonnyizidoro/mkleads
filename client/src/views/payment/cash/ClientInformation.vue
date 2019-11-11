<template>
	<div>
		<div class="title title--strong">Informe seus dados</div>
		<form class="form__default" @submit.prevent="setClient">
			<input class="form__default__input" aria-label="Informe seu nome" placeholder="* Seu nome" v-model="name">
			<input class="form__default__input" aria-label="Informe seu celular" placeholder="* Celular" v-model="cellphone" v-mask="'(##) #####-####'" inputmode="numeric">
			<input class="form__default__input" aria-label="Informe seu email" placeholder="E-mail" v-model="email">
			<div class="button__aligned__right">
				<button class="button button--default button--primary" type="submit" :disabled="!canProceed">
					Avançar<i class="icon icon--arrow-right"></i>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'CashClientInformation',
		data() {
			return {
				name: null,
				cellphone: null,
				email: null,
			}
		},
		computed: {
			canProceed() {
				return this.name && this.$isValidCellphone(this.cellphone) && (!this.email || this.$isValidEmail(this.email))
			},
		},
		methods: {
			setClient() {
				const data = {
					name: this.name,
					cellphone: this.cellphone,
					email: this.email,
				}
				this.$store.dispatch('order/setClient', data)
				this.$router.push('/order/confirmation')
			},
		},
	}
</script>