<template>
	<nav class="navbar">
		<div class="navbar__item">Bem vindo, BMZ Veículos</div>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar'
	}
</script>

<style scoped lang="sass">
	.navbar
		+font($a: right, $w: $font-1)
		background: $white
		box-shadow: $shadow-1
		padding: 17px 20px 18px
</style>