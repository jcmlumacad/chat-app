<template lang="html">
  <div>
    <div class="conversation-header" v-if="!config.isLoggedIn">
      <section class="hero is-info">
        <div class="hero-head">
          <header class="nav">
            <div class="container is-fullhd">
              <div class="nav-left">
                <p class="nav-item back-icon">
                  <back></back>
                </p>
                <p class="nav-item back-text">
                  Back
                </p>
              </div>
            </div>
          </header>
        </div>
      </section>
    </div>
    <home-header v-if="config.isLoggedIn"></home-header>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Back from '~/modules/Conversation/Client/Components/Back'
import HomeHeader from '~/modules/Welcome/Client/Components/HomeHeader'

export default {
    name: 'conversation-header',
    components: {
        Back,
        HomeHeader
    },
    computed: mapGetters({
        config: 'config'
    })
}
</script>
