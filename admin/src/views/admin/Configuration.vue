<template>
	<div>
		<div class="title title--regular">Configuração</div>
		<div class="card">
			<form class="form__default">
				<div class="card__title">Desvalorização do valor da FIPE nas avaliações</div>
				<div class="form__default__inline">
					<fieldset class="form__default__fieldset">
						<label class="form__default__label">* Desvalorização padrão</label>
						<input class="form__default__input" placeholder="Valor" aria-label="Desvalorização padrão nas avaliações do veículos" v-model="configuration.evaluation.defaultDevaluation">
					</fieldset>
					<fieldset class="form__default__fieldset">
						<label class="form__default__label">* Desvalorização para cada atributo "Bom"</label>
						<input class="form__default__input" placeholder="Valor" aria-label="Desvalorização padrão nas avaliações do veículos" v-model="configuration.evaluation.devaluationForGoodCondition">
					</fieldset>
					<fieldset class="form__default__fieldset">
						<label class="form__default__label">* Desvalorização para cada atributo "Normal"</label>
						<input class="form__default__input" placeholder="Valor" aria-label="Desvalorização padrão nas avaliações do veículos" v-model="configuration.evaluation.devaluationForRegularCondition">
					</fieldset>
				</div>
				<div class="card__title">Seletores do DOM</div>
				<div class="form__default__inline" v-for="(attribute, index) in configuration.attributes">
					<fieldset class="form__default__fieldset">
						<label class="form__default__label">
							{{attribute.label}}
							<span  class="form__default__label__link" v-if="index > 2" @click="removeAttribute(index)">(remover atributo)</span>
						</label>
						<input class="form__default__input" placeholder="Seletor" aria-label="Insira o seletor CSS do atributo" v-model="attribute.selector">
					</fieldset>
					<fieldset class="form__default__fieldset">
						<label class="form__default__label">* Local do dado</label>
						<select class="form__default__select" aria-label="Selecione onde o atributo se encontra" v-model="attribute.location">
							<option v-if="attribute.location === null" :value="null">Selecione</option>
							<option v-for="(location, locationIndex) in locations" :value="locationIndex">{{location}}</option>
						</select>
					</fieldset>
					<fieldset class="form__default__fieldset" v-if="attribute.location === 2">
						<label class="form__default__label">* Nome do atributo no elemento HTML</label>
						<input class="form__default__input" aria-label="Insira o atributo do elemento HTML" placeholder="Atributo" v-model="attribute.attribute">
					</fieldset>
				</div>
				<div class="button__spaced">
					<button @click="showModal = true" class="button button--default button--primary" type="button">Adicionar atributo</button>
					<button class="button button--default button--secondary" type="submit">Salvar alterações</button>
				</div>
			</form>
		</div>
		<Modal title="Digite o nome do novo atributo" v-if="showModal" @close="showModal = false">
			<form class="form__default" @submit="addAttribute">
				<fieldset class="form__default__fieldset">
					<input v-model="newAttributeName" class="form__default__input" aria-label="Insira o nome do novo atributo" placeholder="Atributo (Ex: quilometragem, cor)">
					<button class="button button--default button--primary button--fullwidth" type="submit">Adicionar atributo</button>
				</fieldset>
			</form>
		</Modal>
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	import Modal from '../../components/Modal'

	export default {
		name: 'Configuration',
		components: {
			Modal
		},
		data() {
			return {
				showModal: false,
				newAttributeName: null,
				locations: [
					'Inner Text',
					'Inner HTML',
					'Atributo'
				],
			}
		},
		computed: {
			...mapState('dealer', {
				configuration: 'configuration'
			}),
		},
		methods: {
			addAttribute() {
				this.showModal = false
				const data = {newAttributeName: this.newAttributeName}
				this.$store.dispatch('dealer/addConfigurationAttribute', data)
				this.newAttributeName = null
			},
			removeAttribute(index) {
				this.$store.dispatch('dealer/removeConfigurationAttribute', index)
			}
		},
	}
</script>