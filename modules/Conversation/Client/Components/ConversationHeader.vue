<template lang="html">
  <div class="conversation-header">
    <section class="hero is-info">
      <div class="hero-head">
        <header>
          <div class="is-fullhd">
            <div class="nav-left">
              <p class="nav-item">
                <back></back>
              </p>
              <p class="nav-item">
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
