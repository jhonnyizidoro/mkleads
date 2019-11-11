<template>
	<div>
		<div class="title title--strong">Como você deseja realizar o pagamento?</div>
		<div class="button__centered__group">
			<router-link class="button button--large button--primary" to="/payment/cash/client-information">À vista</router-link>
			<router-link class="button button--large button--secondary" to="/payment/financing/client-information">Financiar</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'PaymentMethod'
	}
</script>