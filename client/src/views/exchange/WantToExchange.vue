<template>
	<div>
		<div class="title title--strong">Deseja incluir um veículo na troca?</div>
		<div class="button__centered__group">
			<router-link class="button button--large button--primary" to="/exchange/vehicle-information">
				Sim<i class="icon icon--check"></i>
			</router-link>
			<router-link class="button button--large button--secondary" to="/payment/method">
				Não<i class="icon icon--cancel"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'WantToExchange'
	}
</script>