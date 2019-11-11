<template>
	<div>
		<div class="title title--strong">Selecione as condições do veículo</div>
		<form class="form__default" @submit.prevent="setCondition">
			<div class="title title--medium">Exterior</div>
			<div class="form__default__buttons">
				<div class="form__default__button__wrapper">
					<button class="button button--secondary button--default button--fullwidth" type="button" @click="selectedExterior = 1" :class="{ 'button--muted': selectedExterior && selectedExterior !== 1 }">Normal</button>
				</div>
				<div class="form__default__button__wrapper">
					<button class="button button--secondary button--default button--fullwidth" type="button" @click="selectedExterior = 2" :class="{ 'button--muted': selectedExterior && selectedExterior !== 2 }">Bom</button>
				</div>
				<div class="form__default__button__wrapper">
					<button class="button button--secondary button--default button--fullwidth" type="button" @click="selectedExterior = 3" :class="{ 'button--muted': selectedExterior && selectedExterior !== 3 }">Excelente</button>
				</div>
			</div>
			<div class="title title--medium">Mecânica</div>
			<div class="form__default__buttons">
				<div class="form__default__button__wrapper">
					<button class="button button--secondary button--default button--fullwidth" type="button" @click="selectedMechanics = 1" :class="{ 'button--muted': selectedMechanics && selectedMechanics !== 1 }">Normal</button>
				</div>
				<div class="form__default__button__wrapper">
					<button class="button button--secondary button--default button--fullwidth" type="button" @click="selectedMechanics = 2" :class="{ 'button--muted': selectedMechanics && selectedMechanics !== 2 }">Boa</button>
				</div>
				<div class="form__default__button__wrapper">
					<button class="button button--secondary button--default button--fullwidth" type="button" @click="selectedMechanics = 3" :class="{ 'button--muted': selectedMechanics && selectedMechanics !== 3 }">Excelente</button>
				</div>
			</div>
			<div class="title title--medium">Quilometragem</div>
			<select class="form__default__select" aria-label="Selecione a marca do veículo" v-model="selectedMileage">
				<option :value="null">-- Selecione a quilometragem --</option>
				<option v-for="mileage in mileages" :value="mileage">Menor que {{mileage}}KM</option>
			</select>
			<div class="button__aligned__right">
				<button class="button button--default button--primary" type="submit" :disabled="!selectedExterior || !selectedMechanics || !selectedMileage">
					Avançar<i class="icon icon--arrow-right"></i>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		name: 'VehicleCondition',
		data() {
			return {
				selectedExterior: null,
				selectedMechanics: null,
				selectedMileage: null,
			}
		},
		computed: {
			mileages() {
				const mileageArray = []
				for (let i = 10000; i < 100000; i += 10000) {
					mileageArray.push(i)
				}
				return mileageArray
			}
		},
		methods: {
			setCondition() {
				const data = {
					exterior: this.selectedMechanics,
					mechanics: this.selectedMechanics,
					mileage: this.selectedMechanics,
				}
				this.$store.dispatch('exchange/setCondition', data)
				this.$router.push('/exchange/vehicle-situation')
			}
		},
	}
</script>