<template>
	<header class="header">
		<div class="header__title">{{vehicleTitle}}</div>
		<div class="header__subtitle" v-if="vehicleValue">
			<strong class="header__subtitle__label">Preço de venda: </strong>
			<strong class="header__subtitle__content header__subtitle__content--primary">{{$currency(vehicleValue)}}</strong>
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
			})
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
		&__subtitle__content
			&--primary
				color: $primary
			&--secondary
				color: $secondary
			&--success
				color: $success
</style>