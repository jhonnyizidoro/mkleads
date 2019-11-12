<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
  import AdminLayout from './layouts/AdminLayout'
  import AuthLayout from './layouts/AuthLayout'
  import {mapState} from 'vuex'

  export default {
    name: 'app',
    comments: {
      AdminLayout,
      AuthLayout,
    },
    computed: {
      ...mapState('app', {
        authLayout: 'authLayout',
      }),
      layout() {
        return this.authLayout ? AuthLayout : AdminLayout
      },
    },
  }
</script>

<style lang="sass">
    .fade-enter-active,
    .fade-leave-active
      transition-duration: 250ms
      transition-property: opacity
      transition-timing-function: ease

    .fade-enter,
    .fade-leave-active
      opacity: 0

</style>