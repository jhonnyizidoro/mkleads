<template>
	<div class="summary">
		<div class="title title--strong">Parabéns {{clientFirstName}}</div>
		<p class="title title--medium">Seu pedido de número <strong>#{{id}}</strong> foi recebido e está sendo processado. Em breve entraremos em contato com você!</p>
		<img :src="vehicle.image" :title="`Imagem do veículo ${vehicle.title}`" :alt="`Imagem do veículo ${vehicle.title}`" class="summary__image">
		<div class="title title--regular">Em caso de dúvidas entre em contato</div>
		<div v-if="dealer.whatsapp.length > 0" class="summary__contact">
			<strong>WhatsApp: </strong>
			<span v-for="whatsapp in dealer.whatsapp">{{whatsapp}}</span>
		</div>
		<div v-if="dealer.phones.length > 0" class="summary__contact">
			<strong>Telefone: </strong>
			<span v-for="phone in dealer.phones">{{phone}}</span>
		</div>
		<div v-if="dealer.email" class="summary__contact">
			<strong>Email: </strong>
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

<style lang="sass">
	.summary
		text-align: center
		&__image
			+size(300px, 200px)
			border: 1px solid $light
			border-radius: 7px
			object-fit: cover
		&__contact
			margin: 5px 0

</style>