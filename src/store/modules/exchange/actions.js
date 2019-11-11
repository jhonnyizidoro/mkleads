export default {
	setInformation({commit}, data) {
		commit('SET_INFORMATION', data)
	},
	setCondition({commit}, data) {
		commit('SET_CONDITION', data)
	},
	setSituation({commit}, data) {
		commit('SET_SITUATION', data)
	},
	setEvaluationValue({commit}, data) {
		commit('SET_EVALUATION_VALUE', data)
	},
	clearExchange({commit}) {
		commit('CLEAR_EXCHANGE')
	},
}