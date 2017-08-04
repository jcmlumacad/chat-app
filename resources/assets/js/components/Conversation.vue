<template lang="html">
  <div class="conversation">
    <conversation-header></conversation-header>
    <conversation-timeline></conversation-timeline>
    <conversation-response></conversation-response>
  </div>
</template>

<script>
import ConversationHeader from '~/modules/Conversation/Client/Components/ConversationHeader'
import ConversationTimeline from '~/modules/Conversation/Client/Components/ConversationTimeline'
import ConversationResponse from '~/modules/Conversation/Client/Components/ConversationResponse'

export default {
    name: 'conversation',

    components: {
        ConversationHeader,
        ConversationTimeline,
        ConversationResponse
    }
}
</script>

<style lang="scss" scoped>
.conversation {
    height: 3.25rem;
}
</style>
