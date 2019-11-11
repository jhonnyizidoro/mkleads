<template>
	<div>
		<div class="title title--strong">Parabéns {{clientFirstName}}</div>
		<p>Seu pedido de número <strong>#{{id}}</strong> foi recebido e está sendo processado. Em breve entraremos em contato com você!</p>
		<img :src="vehicle.image" :title="`Imagem do veículo ${vehicle.model}`" :alt="`Imagem do veículo ${vehicle.model}`">
		<div class="title title--medium">Em caso de dúvidas entre em contato</div>
		<div v-if="dealer.whatsapp.length > 0">
			<strong>WhatsApp</strong>
			<span v-for="whatsapp in dealer.whatsapp">{{whatsapp}}</span>
		</div>
		<div v-if="dealer.phones.length > 0">
			<strong>Telefone</strong>
			<span v-for="phone in dealer.phones">{{phone}}</span>
		</div>
		<div v-if="dealer.email">
			<strong>Email</strong>
			<span>{{dealer.email}}</span>
		</div>
	</div>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'

	export default {
		name: 'OrderSummary',
		computed: {
			...mapState('order', {
				id: 'id',
				vehicle: 'vehicle',
				dealer: 'dealer',
				client: 'client',
			}),
			...mapGetters('order', {
				clientFirstName: 'clientFirstName',
			}),
		},
	}
</script>