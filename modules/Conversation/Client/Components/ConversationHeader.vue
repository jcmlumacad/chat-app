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

<style lang="scss" scoped>
$header: #253878;

.conversation-header {
    height: 100%;
}
.is-info {
    background-color: $header;
    box-shadow: 0 1px 4px rgba(0,0,0,.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
}
</style>
