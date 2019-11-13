export default {
	ADD_CONFIGURATION_ATTRIBUTE(state, data) {
		state.configuration.attributes.push({
			label: data.newAttributeName,
			selector: null,
			location: null,
			attribute: null,
		})
	},
	REMOVE_CONFIGURATION_ATTRIBUTE(state, index) {
		state.configuration.attributes.splice(index, 1)
	},
}