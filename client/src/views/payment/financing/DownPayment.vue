<template>
	<div>
		<div class="title title--strong">Deseja dar entrada em dinheiro?</div>
		<div class="button__centered__group">
			<router-link class="button button--large button--primary" to="/payment/financing/down-payment-value">
				Sim<i class="icon icon--check"></i>
			</router-link>
			<router-link class="button button--large button--secondary" to="/payment/financing/result">
				Não<i class="icon icon--cancel"></i>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'DownPayment'
	}
</script>