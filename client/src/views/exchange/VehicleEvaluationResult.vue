<template>
	<div>
		<div class="title title--regular">
			<span>Pré avaliação: </span>
			<strong class="title--success">{{$currency(evaluationValue)}}</strong>
		</div>
		<div class="cards">
			<div class="card">
				<div class="card__text">
					<strong>Marca: </strong>
					<span>{{maker}}</span>
				</div>
				<div class="card__text">
					<strong>Modelo: </strong>
					<span>{{model}}</span>
				</div>
				<div class="card__text">
					<strong>Ano: </strong>
					<span>{{year}}</span>
				</div>
			</div>
		</div>
		<div>
			<div class="title title--strong">Deseja incluir o veículo na negociação?</div>
			<div class="button__centered__group">
				<button class="button button--large button--primary" @click="addExchange">
					Sim<i class="icon icon--check"></i>
				</button>
				<button class="button button--large button--secondary" @click="cancelExchange">
					Não<i class="icon icon--cancel"></i>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
	import {mapState, mapGetters} from 'vuex'

	export default {
		name: 'VehicleEvaluationResult',
		computed: {
			...mapState('exchange', {
				year: 'year',
				model: 'model',
				maker: 'maker',
				fipeValue: 'fipeValue',
			}),
			...mapGetters('order', [
				'hasExchanges'
			]),
			evaluationValue() {
				return parseInt(String(this.fipeValue * 0.9))
			},
		},
		methods: {
			addExchange() {
				const data = {evaluationValue: this.evaluationValue}
				this.$store.dispatch('exchange/setEvaluationValue', data)
				this.$store.dispatch('order/addExchange', this.$store.state.exchange)
				this.$router.push('/exchange/add-another-vehicle')
			},
			cancelExchange() {
				if (this.hasExchanges) {
					this.$router.push('/exchange/add-another-vehicle')
				} else {
					this.$router.push('/')
				}
			},
		},
		destroyed() {
			this.$store.dispatch('exchange/clearExchange')
		},
	}
</script>