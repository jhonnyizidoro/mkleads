<template>
	<header class="header" v-if="showHeader">
		<div class="header__title">{{vehicle.title}}</div>
		<div class="header__subtitle">
			<strong class="header__subtitle__label">Preço de venda: </strong>
			<strong class="header__subtitle__content header__subtitle__content--primary">{{$currency(vehicle.value, 0)}}</strong>
		</div>
		<div class="header__subtitle" v-if="values.exchanges">
			<strong class="header__subtitle__label">Veículos de troca: </strong>
			<strong class="header__subtitle__content header__subtitle__content--secondary">{{$currency(values.exchanges, 0)}}</strong>
		</div>
		<div class="header__subtitle" v-if="values.downPayment">
			<strong class="header__subtitle__label">Entrada: </strong>
			<strong class="header__subtitle__content header__subtitle__content--primary">{{$currency(values.downPayment, 0)}}</strong>
		</div>
		<div class="header__subtitle" v-if="values.exchanges || values.downPayment">
			<strong class="header__subtitle__label">Subtotal: </strong>
			<strong class="header__subtitle__content header__subtitle__content--success">{{$currency(values.subtotal, 0)}}</strong>
		</div>
	</header>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'

	export default {
		name: 'Header',
		computed: {
			...mapState('order', {
				vehicle: 'vehicle',
			}),
			...mapState('app', {
				showHeader: 'showHeader',
			}),
			...mapGetters('order', {
				values: 'values',
			}),
		},
	}
</script>

<style scoped lang="sass">
	.header
		background: $lighter
		padding-bottom: 10px
		text-align: center
		width: 100%
		&__title
			+font(1.3rem, $lh: 1.7, $t: uppercase)
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

	+mobile
		.header
			&__title
				+font(1.1rem, $lh: 1.3, $t: uppercase)
				padding: 5px
			&__subtitle
				display: block
				margin: 3px 0
</style>