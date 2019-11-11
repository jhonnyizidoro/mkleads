import formatter from '../../../mixins/formatter'

export default {
	SET_INFORMATION(state, data) {
		state.year = data.ano_modelo
		state.fuel = data.combustivel
		state.model = data.veiculo
		state.maker = data.marca
		state.fipeValue = formatter.methods.$toFloat(data.preco)
	},
	SET_CONDITION(state, data) {
		state.exterior = data.exterior
		state.mechanics = data.mechanics
		state.mileage = data.mileage
	},
	SET_SITUATION(state, data) {
		state.situation = data.situation
	},
	SET_EVALUATION_VALUE(state, data) {
		state.evaluationValue = data.evaluationValue
	},
	CLEAR_EXCHANGE(state) {
		state.year = null
		state.fuel = null
		state.model = null
		state.maker = null
		state.exterior = null
		state.mechanics = null
		state.mileage = null
		state.situation = null
		state.fipeValue = null
		state.evaluationValue = null
	}
}