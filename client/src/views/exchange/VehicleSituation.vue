<template>
	<div>
		<div class="title title--strong">Qual a situação atual do veículo?</div>
		<div class="button__centered__group">
			<button class="button button--large button--primary" @click="setSituation('Quitado')">Quitado</button>
			<button class="button button--large button--secondary" @click="setSituation('Financiado')">Financiado</button>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'VehicleSituation',
		methods: {
			setSituation(situation) {
				const data = {situation}
				this.$store.dispatch('exchange/setSituation', data)
				this.$router.push('/exchange/vehicle-evaluation-result')
			},
		}
	}
</script>