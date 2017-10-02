<template lang="html">
  <div>
    <home-header></home-header>
    <section></section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeHeader from '~/modules/Welcome/Client/Components/HomeHeader'

export default {
    name: 'settings',
    components: {
        HomeHeader
    },
    computed: mapGetters({
        config: 'config'
    })
}
</script>
