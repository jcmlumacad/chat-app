<template>
  <div>
    <!-- HEADER -->
    <section class="hero is-info">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container is-fullhd">
            <div class="nav-left">
              <!-- <p class="nav-item">
                <i class="fa fa-comments-o"></i>
              </p> -->
              <p class="nav-item">
                Conversations
              </p>
            </div>
            <div class="nav-right">
              <p class="nav-item">
                <create-conversation></create-conversation>
              </p>
              <!-- <p class="nav-item">
                <settings></settings>
              </p> -->
              <p class="nav-item" v-if="config.isLoggedIn">
                <logout></logout>
              </p>
            </div>
          </div>
        </header>
      </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Logout from './Logout'
import Settings from './Settings'
import CreateConversation from './CreateConversation'

export default {
    name: 'home-header',
    components: {
        Logout,
        Settings,
        CreateConversation
    },
    computed: mapGetters({
        config: 'config'
    })
}
</script>
