<template>
	<div>
		<div class="title title--strong">Informe o valor da entrada</div>
		<form class="form__default" @submit.prevent="setDownPayment">
			<input class="form__default__input" aria-label="Insira o valor da entrada" placeholder="* Valor" v-model="downPayment" inputmode="numeric" @keyup="downPayment = $currency(downPayment)">
			<div class="button__aligned__right">
				<button class="button button--default button--primary" type="submit">
					Avançar<i class="icon icon--arrow-right"></i>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'DownPaymentValue',
		data() {
			return {
				downPayment: null,
			}
		},
		methods: {
			setDownPayment() {
				const data = {downPayment: this.downPayment}
				this.$store.dispatch('order/setDownPayment', data)
				this.$router.push('/payment/financing/result')
			},
		},
	}
</script>