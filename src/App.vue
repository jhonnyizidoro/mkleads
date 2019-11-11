<template>
	<div id="app">
		<Header></Header>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
		<Steps></Steps>
	</div>
</template>

<script>
	import Steps from './components/Steps'
	import Header from './components/Header'

	export default {
		name: 'app',
		components: {
			Steps,
			Header,
		},
	}
</script>

<style lang="sass">
	#app
		margin: 0 auto
		max-width: 1000px

	.fade-enter-active,
	.fade-leave-active
		transition-duration: 250ms
		transition-property: opacity
		transition-timing-function: ease

	.fade-enter,
	.fade-leave-active
		opacity: 0

</style>