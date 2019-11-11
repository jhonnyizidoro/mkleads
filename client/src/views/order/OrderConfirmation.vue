<template>
	<div>
		<div class="title title--strong">Resumo do pedido</div>
		<div class="order">
			<div class="order__row order__bordered__row">
				<strong class="order__label">{{vehicle.title}}</strong>
				<strong class="order__primary">{{$currency(vehicle.value)}}</strong>
			</div>
			<div class="order__bordered__row" v-if="exchanges.length > 0">
				<strong class="order__label">Veículos de troca</strong>
				<div class="order__row order__label__small" v-for="exchange in exchanges">
					<span>{{exchange.model}} - {{exchange.year}}</span>
					<span>{{$currency(exchange.evaluationValue)}}</span>
				</div>
				<strong class="order__label__right order__secondary">{{$currency(values.exchanges)}}</strong>
			</div>
			<div class="order__row order__bordered__row" v-if="values.downPayment">
				<strong class="order__label">Entrada em dinheiro</strong>
				<strong class="order__secondary">{{$currency(values.downPayment)}}</strong>
			</div>
			<div class="order__row order__bordered__row">
				<strong class="order__label">Subtotal</strong>
				<strong class="order__success">{{$currency(values.subtotal)}}</strong>
			</div>
			<div class="order__row order__bordered__row" v-if="values.installmentMonths && values.installmentValue">
				<strong class="order__label">Financiamento (pré-aprovado)</strong>
				<strong class="order__primary">{{values.installmentMonths}} x {{$currency(values.installmentValue)}}</strong>
			</div>
			<div class="button__centered__group">
				<button class="button button--large button--primary button--fullwidth" @click="sendOrder">
					Confirmar pedido<i class="icon icon--check"></i>
				</button>
			</div>
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
		methods: {
			sendOrder() {
				//fetch JSON.stringify(this.$store.state.order)
				this.$store.dispatch('order/setId', 999)
				this.$router.push('/order/summary')
			},
		},
		created() {
			this.$store.dispatch('app/setActiveStep', 2)
			this.$store.dispatch('app/hideHeader')
		},
	}
</script>

<style scoped lang="sass">
	.order
		margin-top: 40px
		&__row
			+flex(space-between)
		&__bordered__row
			border-bottom: 1px solid $light
			margin-bottom: 20px
			padding-bottom: 20px
		&__label
			display: inline-block
			margin-right: 120px
		&__label__small
			padding: 7px
		&__label__right
			border-top: 1px solid $lighter
			display: block
			text-align: right
			padding-top: 10px
		&__sub__row
			+flex(space-between)
			padding: 7px 0
		&__primary
			color: $primary
		&__secondary
			color: $secondary
		&__success
			color: $success
</style>