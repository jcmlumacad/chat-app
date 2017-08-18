<template lang="html">
  <div class="conversation-header">
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
</template>

<script>
import Back from '~/modules/Conversation/Client/Components/Back'

export default {
    name: 'conversation-header',
    components: { Back }
}
</script>
