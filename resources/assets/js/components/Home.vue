<template lang="html">
  <div class="home-pane">
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
            </div>
          </div>
        </header>
      </div>
    </section>

    <!-- CONTAINER -->
    <section class="conversation-section">
      <div class="is-fullhd">
        <conversations></conversations>
      </div>
    </section>
  </div>
</template>

<script>
import Conversations from '~/modules/Welcome/Client/Components/Conversations'
import CreateConversation from '~/modules/Welcome/Client/Components/CreateConversation'

export default {
    name: 'home',
    data() {
        return { active: false }
    },
    components: {
        Conversations,
        CreateConversation
    },
    methods: {
        toggle() {
            this.active = !this.active
        }
    }
}
</script>
