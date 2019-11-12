<template>
	<div class="auth__container">
		<slot/>
	</div>
</template>

<script>
	export default {
		name: 'AuthLayout'
	}
</script>

<style scoped lang="sass">
	.auth__container
		+flex(center, center)
		height: 100%
</style>