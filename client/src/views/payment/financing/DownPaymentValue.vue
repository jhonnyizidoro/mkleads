<template>
	<div>
		<div class="title title--strong">Informe o valor da entrada</div>
		<form class="form__default" @submit.prevent="setDownPayment">
			<input class="form__default__input" aria-label="Insira o valor da entrada" placeholder="* Valor" v-model="downPayment" inputmode="numeric" v-money="{prefix: 'R$', thousands: '.', decimal: ','}">
			<div class="button__aligned__right">
				<button class="button button--default button--primary" type="submit">
					Avançar<i class="icon icon--arrow-right"></i>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import {VMoney} from 'v-money'

	export default {
		name: 'DownPaymentValue',
		directives: {
			money: VMoney
		},
		data() {
			return {
				downPayment: null,
			}
		},
		methods: {
			setDownPayment() {
				const data = {downPayment: this.$toFloat(this.downPayment)}
				this.$store.dispatch('order/setDownPayment', data)
				this.$router.push('/payment/financing/result')
			},
		},
	}
</script>