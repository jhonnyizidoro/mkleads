<template>
	<div>
		<div class="title title--strong">Deseja incluir outro veículo na troca?</div>
		<div class="button__centered__group">
			<router-link class="button button--large button--primary" to="/exchange/vehicle-information">
				Sim<i class="icon icon--check"></i>
			</router-link>
			<router-link class="button button--large button--secondary" to="/payment/method">
				Não<i class="icon icon--cancel"></i>
			</router-link>
		</div>
		<div v-if="exchanges.length" class="title title--medium">Veículos já inclusos na negociação:</div>
		<div class="cards">
			<div v-for="(exchange, index) in exchanges" class="card__wrapper">
				<div class="card">
					<i class="icon icon--close card__close__icon" @click="removeExchange(index)"></i>
					<div class="card__text">
						<strong>Marca: </strong>
						<span>{{exchange.maker}}</span>
					</div>
					<div class="card__text">
						<strong>Modelo: </strong>
						<span>{{exchange.model}}</span>
					</div>
					<div class="card__text">
						<strong>Ano: </strong>
						<span>{{exchange.year}}</span>
					</div>
					<div class="card__text">
						<strong>Pré-avaliação: </strong>
						<span>{{$currency(exchange.evaluationValue, 2)}}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState} from 'vuex'

	export default {
		name: 'AddAnotherVehicle',
		computed: {
			...mapState('order', {
				exchanges: 'exchanges',
			}),
		},
		methods: {
			removeExchange(index) {
				this.$store.dispatch('order/removeExchange', index)
			}
		},
	}
</script>