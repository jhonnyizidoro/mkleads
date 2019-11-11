<template>
	<div>
		<div class="title title--strong">Resumo do pedido</div>
		<div>
			<strong>{{vehicle.title}}</strong>
			<strong>{{$currency(vehicle.value, 2)}}</strong>
		</div>
		<div v-if="exchanges.length > 0">
			<strong>Veículos de troca</strong>
			<div v-for="exchange in exchanges">
				<span>{{exchange.model}} - {{year}}</span>
				<span>{{exchange.evaluationValue}}</span>
			</div>
			<strong>{{values.exchanges}}</strong>
		</div>
		<div v-if="values.downPayment">
			<strong>Entrada em dinheiro</strong>
			<span>{{values.downPayment}}</span>
		</div>
		<div>
			<strong>Subtotal</strong>
			<span>{{values.subtotal}}</span>
		</div>

		<div>
			<strong></strong>
		</div>
	</div>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'

	export default {
		name: 'OrderConfirmation',
		computed: {
			...mapGetters('order', {
				values: 'values',
			}),
			...mapState('order', {
				vehicle: 'vehicle',
				exchanges: 'exchanges',
				payment: 'payment',
			}),
		},
		created() {
			this.$store.dispatch('app/setActiveStep', 2)
			this.$store.dispatch('app/hideHeader')
		},
	}
</script>