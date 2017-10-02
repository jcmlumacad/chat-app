<template lang="html">
  <div class="conversation">
    <conversation-header></conversation-header>

    <div class="container-section" v-if="config.isLoggedIn">
      <div class="conversation-section">
        <div class="is-fullhd">
          <conversations></conversations>
        </div>
      </div>
      <div class="mini-message-section">
        <conversation-timeline></conversation-timeline>
        <conversation-response></conversation-response>
      </div>
    </div>

    <div v-if="!config.isLoggedIn">
      <conversation-timeline></conversation-timeline>
      <conversation-response></conversation-response>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as types from '~/modules/Message/Client/Assets/js/message.mutation'
import Conversations from '~/modules/Welcome/Client/Components/Conversations'
import ConversationHeader from '~/modules/Conversation/Client/Components/ConversationHeader'
import ConversationTimeline from '~/modules/Conversation/Client/Components/ConversationTimeline'
import ConversationResponse from '~/modules/Conversation/Client/Components/ConversationResponse'

export default {
    name: 'conversation',
    components: {
        Conversations,
        ConversationHeader,
        ConversationTimeline,
        ConversationResponse
    },
    beforeRouteLeave(to, from, next) {
        socket.emit('leaveRoom', {
            id: from.params.id
        })
        this.$store.commit(types.CLEAR_STATE)
        next()
    },
    computed: mapGetters({
        config: 'config'
    })
}
</script>
