<template>
	<div>
		<div class="title title--strong">Informações do veículo</div>
		<form class="form__default" @submit.prevent="setInformation">
			<select class="form__default__select" aria-label="Selecione o tipo do veículo" @change="fetchMakers()" v-model="selectedType">
				<option :value="null">-- Selecione o tipo do veículo --</option>
				<option value="carros">Carro</option>
				<option value="motos">Moto</option>
				<option value="caminhoes">Caminhão</option>
			</select>
			<select class="form__default__select" aria-label="Selecione a marca do veículo" @change="fetchModels()" v-model="selectedMaker" :disabled="makers.length === 0">
				<option :value="null">-- Selecione a fabricante --</option>
				<option v-for="maker in makers" :value="maker.id">{{maker.name}}</option>
			</select>
			<select class="form__default__select" aria-label="Selecione a marca do veículo" @change="fetchVersions()" v-model="selectedModel" :disabled="models.length === 0">
				<option :value="null">-- Selecione o modelo --</option>
				<option v-for="model in models" :value="model.id">{{model.name}}</option>
			</select>
			<select class="form__default__select" aria-label="Selecione a marca do veículo" v-model="selectedVersion" :disabled="versions.length === 0">
				<option :value="null">-- Selecione a versão --</option>
				<option v-for="version in versions" :value="version.key">{{version.name}}</option>
			</select>
			<div class="button__aligned__right">
				<button class="button button--default button--primary" type="submit" :disabled="!canProceed">
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
				selectedType: null,
				selectedMaker: null,
				selectedModel: null,
				selectedVersion: null,
			}
		},
		computed: {
			canProceed() {
				return this.selectedType && this.selectedMaker && this.selectedModel && this.selectedVersion
			}
		},
		methods: {
			fetchMakers() {
				fetch(`http://fipeapi.appspot.com/api/1/${this.selectedType}/marcas.json`)
					.then(res => res.json())
					.then(data => this.makers = data)
			},
			fetchModels() {
				fetch(`http://fipeapi.appspot.com/api/1/${this.selectedType}/veiculos/${this.selectedMaker}.json`)
					.then(res => res.json())
					.then(data => this.models = data)
			},
			fetchVersions() {
				fetch(`http://fipeapi.appspot.com/api/1/${this.selectedType}/veiculo/${this.selectedMaker}/${this.selectedModel}.json`)
					.then(res => res.json())
					.then(data => this.versions = data)
			},
			setInformation() {
				fetch(`http://fipeapi.appspot.com/api/1/${this.selectedType}/veiculo/${this.selectedMaker}/${this.selectedModel}/${this.selectedVersion}.json`)
					.then(res => res.json())
					.then(data => {
						this.$store.dispatch('exchange/setInformation', data)
						this.$router.push('/exchange/vehicle-condition')
					})
			},
		},
	}
</script>