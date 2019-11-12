module.exports = {
	css: {
		loaderOptions: {
			sass: {
				prependData: '' +
					'@import "@/assets/sass/_variables.sass";' +
					'@import "@/assets/sass/_mixins.sass";'
			}
		}
	}
};