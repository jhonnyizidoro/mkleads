<template>
	<div>
		<Header></Header>
		<router-view></router-view>
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
		beforeMount() {

		}
	}
</script>