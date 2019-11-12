<template>
	<div class="admin__container">
		<div class="admin__container__left">
			<Menu/>
		</div>
		<div class="admin__container__right">
			<Navbar/>
			<div class="admin__container__content">
				<slot/>
			</div>
		</div>
	</div>
</template>

<script>
	import Menu from '../components/Menu'
	import Navbar from '../components/Navbar'

	export default {
		name: 'AdminLayout',
		components: {
			Menu,
			Navbar
		},
	}
</script>

<style scoped lang="sass">
	.admin__container
		display: flex
		height: 100%
		&__left
			width: 15%
		&__right
			width: 85%
		&__left,
		&__right
			position: relative
		&__content
			padding: 20px
</style>