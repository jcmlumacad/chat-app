<template lang="html">
  <div>
    <!-- HEADER -->
    <section class="hero is-info">
      <!-- Hero header: will stick at the top -->
      <div class="hero-head">
        <header class="nav">
          <div class="container is-fullhd">
            <div class="nav-left">
              <p class="nav-item">
                <i class="fa fa-comments-o"></i>
              </p>
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

<style lang="scss" scoped>
$header: #253878;

.is-info {
  background-color: $header;
  box-shadow: 0 1px 4px rgba(0,0,0,.2);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.conversation-section {
  position: relative;
  right: 0;
  left: 0;
  top: 52px;
}
</style>
