<template lang="html">
  <section class="conversation-timeline">
    <div class="messages-container">
      <message-bubble slot="content">
        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </template>
      </message-bubble>
      <message-bubble slot="content">
        <template slot="content">
          Test message
        </template>
      </message-bubble>
      <message-bubble slot="content">
        <template slot="content">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </template>
      </message-bubble>
      <message-bubble slot="content">
        <template slot="content">
          Sample
        </template>
      </message-bubble>
      <message-bubble slot="content">
        <template slot="content">
          Hi
        </template>
      </message-bubble>
    </div>
  </section>
</template>

<script>
import MessageBubble from '~/modules/Message/Client/Components/MessageBubble'

export default {
    name: 'conversation-timeline',

    components: { MessageBubble },

    data() {
        return {
            messages: []
        }
    },

    mounted() {
        console.log('Timeline mounted')
    }
}
</script>

<style lang="scss" scoped>
$timeline: #FFE19F;

.conversation-timeline {
    top: 52px;
    background-color: $timeline;
    padding: 0.75rem;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 55px;
    overflow: auto;
}
.messages-container {
    position: absolute;
    max-height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
