<template>
	<div>
		<div class="title title--strong">Informações do veículo</div>
		<form class="form__default" @submit.prevent="fetchVehicleInformation">
			<select class="form__default__select" aria-label="Selecione a marca do veículo" @change="fetchModels()" v-model="selectedMaker">
				<option :value="null">-- Selecione a fabricante --</option>
				<option v-for="maker in makers" :value="maker.id">{{maker.name}}</option>
			</select>
			<select class="form__default__select" aria-label="Selecione a marca do veículo" @change="fetchVersions()" v-model="selectedModel">
				<option :value="null">-- Selecione o modelo --</option>
				<option v-for="model in models" :value="model.id">{{model.name}}</option>
			</select>
			<select class="form__default__select" aria-label="Selecione a marca do veículo">
				<option>-- Selecione a versão --</option>
				<option v-for="version in versions" :value="version.id">{{version.name}}</option>
			</select>
			<select class="form__default__select" aria-label="Selecione o ano do modelo" v-model="selectedYear">
				<option :value="null">-- Ano do modelo --</option>
				<option v-for="version in versions" :value="version.key">{{version.key.slice(0, 4)}}</option>
			</select>
			<div class="button__aligned__right">
				<button class="button button--default button--primary" type="submit">
					Avançar<i class="icon icon--arrow-right"></i>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: 'VehicleInformation',
				makers: [],
				models: [],
				versions: [],
				selectedMaker: null,
				selectedModel: null,
				selectedYear: null,
			}
		},
		methods: {
			fetchMakers() {
				fetch('http://fipeapi.appspot.com/api/1/carros/marcas.json')
					.then(res => res.json())
					.then(data => this.makers = data)
			},
			fetchModels() {
				fetch(`http://fipeapi.appspot.com/api/1/carros/veiculos/${this.selectedMaker}.json`)
					.then(res => res.json())
					.then(data => this.models = data)
			},
			fetchVersions() {
				fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.selectedMaker}/${this.selectedModel}.json`)
					.then(res => res.json())
					.then(data => this.versions = data)
			},
			fetchVehicleInformation() {
				fetch(`http://fipeapi.appspot.com/api/1/carros/veiculo/${this.selectedMaker}/${this.selectedModel}/${this.selectedYear}.json`)
					.then(res => res.json())
					.then(data => {
						this.$router.push('/exchange/vehicle-conditions')
						this.$store.dispatch('exchange/setMainInformation', data)
					})
			},
		},
		created() {
			this.fetchMakers()
		},
	}
</script>