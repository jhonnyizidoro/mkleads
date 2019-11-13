<template>
	<div class="card">
		<h1 class="card__title__strong">Efetue o login</h1>
		<form @submit.prevent="login" class="form__default">
			<input class="form__default__input" aria-label="Insira seu email" placeholder="* Email" v-model="email">
			<input type="password" class="form__default__input" aria-label="Insira sua senha" placeholder="* Senha" v-model="password">
			<button class="button button--default button--primary button--fullwidth" type="submit">Acesse sua conta</button>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'Login',
		data() {
			return {
				email: null,
				password: null,
			}
		},
		methods: {
			login() {
				this.$router.push('/dashboard')
			}
		},
		created() {
			this.$store.dispatch('app/enableAuthLayout')
		},
	}
</script>