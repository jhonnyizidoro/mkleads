<template>
	<div class="menu">
		<figure class="menu__figure">
			<img src="@/assets/images/logo.svg" alt="" class="menu__image">
		</figure>
		<div class="menu__items">
			<router-link class="menu__item" to="/dashboard">
				<i class="icon icon--dashboard menu__item__icon"></i>
				<div class="menu__item__text">Dashboard</div>
			</router-link>
			<router-link class="menu__item" to="/orders">
				<i class="icon icon--money menu__item__icon"></i>
				<div class="menu__item__text">Propostas</div>
			</router-link>
			<router-link class="menu__item" to="/information">
				<i class="icon icon--information menu__item__icon"></i>
				<div class="menu__item__text">Minhas informações</div>
			</router-link>
			<router-link class="menu__item" to="/configuration">
				<i class="icon icon--settings menu__item__icon"></i>
				<div class="menu__item__text">Configurações</div>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Menu'
	}
</script>

<style scoped lang="sass">
	.menu
		+position(0, 0)
		+size(100%)
		+font($c: $white, $a: center)
		background: $main
		box-shadow: $shadow-2
		&__figure
			background: $secondary
			box-shadow: $shadow-1
			padding: 10px
		&__image
			max-height: 30px
		&__item
			display: block
			padding: 25px 0
			transition: 250ms $cubic-bezier
			&:hover,
			&.router-link-active
				background: $darker-main
				box-shadow: $shadow-1
		&__item__icon
			font-size: 1.5rem
			margin-bottom: 7px
</style>