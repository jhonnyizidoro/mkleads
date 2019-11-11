<template>
	<header class="header">
		<div class="header__title">{{vehicleTitle}}</div>
		<div class="header__subtitle" v-if="vehicleValue">
			<strong class="header__subtitle__label">Preço de venda: </strong>
			<strong class="header__subtitle__content header__subtitle__content--primary">{{$currency(vehicleValue)}}</strong>
		</div>
		<div class="header__subtitle" v-if="exchangesValue">
			<strong class="header__subtitle__label">Veículos de troca: </strong>
			<strong class="header__subtitle__content header__subtitle__content--secondary">{{$currency(exchangesValue)}}</strong>
		</div>
		<div class="header__subtitle" v-if="exchangesValue">
			<strong class="header__subtitle__label">Subtotal: </strong>
			<strong class="header__subtitle__content header__subtitle__content--success">{{$currency(subtotal)}}</strong>
		</div>
	</header>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		name: 'Header',
		data() {
			return {
				subtitles: [],
			}
		},
		computed: {
			...mapState('vehicle', {
				vehicleTitle: 'title',
				vehicleValue: 'value',
			}),
			...mapState('order', {
				exchanges: 'exchanges',
			}),
			exchangesValue() {
				if (this.exchanges.length) {
					return this.exchanges.map(exchange => exchange.evaluationValue).reduce((total, value) => total + value)
				}
				return 0
			},
			subtotal() {
				return this.vehicleValue - this.exchangesValue
			},
		},
	}
</script>

<style scoped lang="sass">
	.header
		+position(0, 0, $p: fixed)
		text-align: center
		width: 100%
		&__title
			+font(1.4rem, $lh: 1.8, $t: uppercase)
		&__subtitle
			display: inline-block
			margin: 0 7px
		&__subtitle__content
			&--primary
				color: $primary
			&--secondary
				color: $secondary
			&--success
				color: $success
</style>