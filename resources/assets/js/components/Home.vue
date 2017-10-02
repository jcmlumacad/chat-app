<template lang="html">
  <div class="home-pane">
    <home-header></home-header>

    <!-- CONTAINER -->
    <section class="container-section">
      <div class="conversation-section" :class="{ 'is-auth': config.isLoggedIn }">
        <div class="is-fullhd">
          <conversations></conversations>
        </div>
      </div>
      <div class="message-section" v-if="config.isLoggedIn"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeHeader from '~/modules/Welcome/Client/Components/HomeHeader'
import Conversations from '~/modules/Welcome/Client/Components/Conversations'

export default {
    name: 'home',
    components: {
        HomeHeader,
        Conversations
    },
    computed: mapGetters({
        config: 'config'
    })
}
</script>
