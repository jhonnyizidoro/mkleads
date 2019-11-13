export default {
	addConfigurationAttribute({commit}, data) {
		commit('ADD_CONFIGURATION_ATTRIBUTE', data)
	},
	removeConfigurationAttribute({commit}, index) {
		commit('REMOVE_CONFIGURATION_ATTRIBUTE', index)
	},
}