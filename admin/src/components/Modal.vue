<template>
	<div class="modal">
		<div class="modal__content">
			<i class="icon icon--close modal__close" @click="$emit('close')"></i>
			<div class="modal__title">{{title}}</div>
			<slot/>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'Modal',
		props: {
			title: {
				required: true,
				type: String
			}
		},
	}
</script>

<style scoped lang="sass">
	.modal
		+position(0, 0, 0, 0, fixed)
		background: rgba($black, .5)
		z-index: 5
		&__content
			+position(50%, 50%)
			background: $white
			box-shadow: $shadow-1
			border-radius: 7px
			padding: 20px
			transform: translate(50%, -50%)
		&__title
			+font(1.5rem, $font-2, $a: center, $c: $darker-main)
			margin-bottom: 15px
		&__close
			+position(0, 0)
			background: $secondary
			border-radius: 50%
			color: $white
			cursor: pointer
			padding: 10px
			transform: translate(50%, -50%)
			transition: 250ms $cubic-bezier
			&:hover
				box-shadow: $shadow-2
				padding: 12px

</style>