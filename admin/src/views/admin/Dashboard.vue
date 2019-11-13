<template>
	
</template>

<script>
	export default {
		name: 'Dashboard',
		created() {
			this.$store.dispatch('app/disableAuthLayout')
		},
	}
</script>