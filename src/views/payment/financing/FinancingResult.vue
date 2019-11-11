<template>
	<div>
		<div class="title title--regular">
			<span>Entrada em dinheiro: </span>
			<strong class="title--success">{{$currency(values.downPayment, 2)}}</strong>
		</div>
		<div class="button__centered__group">
			<router-link class="button button--default button--primary" to="/payment/financing/down-payment-value">Alterar valor de entrada</router-link>
		</div>
		<div class="title title--strong">
			<span>Seu financiamento de </span>
			<strong class="title--success">{{$currency(values.subtotal, 2)}}</strong>
			<span> está em análise. Selecione o prazo que você deseja</span>
		</div>
	</div>
</template>

<script>
	import {mapGetters} from 'vuex'

	export default {
		name: 'FinancingResult',
		computed: {
			...mapGetters('order', {
				values: 'values',
			}),
		},
	}
</script>