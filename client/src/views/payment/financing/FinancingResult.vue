<template>
	<div>
		<div class="title title--regular">
			<span>Entrada em dinheiro: </span>
			<strong class="title--success">{{$currency(values.downPayment)}}</strong>
		</div>
		<div class="button__centered__group">
			<router-link class="button button--default button--primary" to="/payment/financing/down-payment-value">Alterar valor de entrada</router-link>
		</div>
		<div class="title title--strong">
			<span>Seu financiamento de </span>
			<strong class="title--success">{{$currency(values.subtotal)}}</strong>
			<span> está em análise. Selecione o prazo que você deseja</span>
		</div>
		<form class="form__default" @submit.prevent="setInstallment">
			<div class="form__default__buttons">
				<div class="form__default__button__wrapper" v-for="installment in installments">
					<button class="button button--secondary button--default button--fullwidth" type="button" @click="selectedInstallment = installment" :class="{ 'button--muted': selectedInstallment && selectedInstallment !== installment }">{{installment.months}} x {{$currency(installment.amount)}}</button>
				</div>
			</div>
			<div class="button__aligned__right">
				<button class="button button--default button--primary" type="submit" :disabled="!selectedInstallment">
					Avançar<i class="icon icon--arrow-right"></i>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'FinancingResult',
		data() {
			return {
				installments: [],
				selectedInstallment: null,
			}
		},
		computed: {
			...mapGetters('order', {
				values: 'values',
			}),
		},
		methods: {
			fetchInstallments() {
				return [
					{months: 12, amount: this.values.subtotal / 12},
					{months: 18, amount: this.values.subtotal / 18},
					{months: 24, amount: this.values.subtotal / 24},
					{months: 36, amount: this.values.subtotal / 36},
					{months: 48, amount: this.values.subtotal / 48},
					{months: 60, amount: this.values.subtotal / 60},
				]
			},
			setInstallment() {
				const data = {
					installmentMonths: this.selectedInstallment.months,
					installmentValue: this.selectedInstallment.amount,
				}
				this.$store.dispatch('order/setInstallment', data)
				this.$router.push('/order/confirmation')
			},
		},
		created() {
			this.installments = this.fetchInstallments()
		},
	}
</script>