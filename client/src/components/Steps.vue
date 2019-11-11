<template>
	<nav class="steps">
		<div v-for="step in steps"class="steps__item" :class="{ 'steps__item__active': isActive(step) }">{{formattedLabel(step)}}</div>
	</nav>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		name: 'Steps',
		data() {
			return {
				steps: [
					{label: '1: Veículo de troca', id: 0},
					{label: '2: Pagamento', id: 1},
					{label: '3: Revisão', id: 2},
				]
			}
		},
		computed: {
			...mapState('app', {
				activeStep: 'activeStep',
			})
		},
		methods: {
			isActive(step) {
				return this.activeStep === step.id
			},
			formattedLabel(step) {
				return (window.innerWidth < 800 && this.isActive(step)) || window.innerWidth > 800 ? step.label : step.label.slice(0, 1)
			},
		},
	}
</script>

<style scoped lang="sass">
	.steps
		+columns(3)
		background: $lighter
		width: 100%
		&__item
			+font(1.3rem, $a: center, $c: $muted)
			border-left: 1px solid $light
			border-right: 1px solid $light
			padding: 15px 0
		&__item__active
			+font($w: $font-3, $c: $dark)
			background: $light
			border-top: 3px solid $secondary

	+mobile
		.steps
			+flex(center, center, $g: 1)
			margin-top: 25px
			>*
				width: auto
</style>