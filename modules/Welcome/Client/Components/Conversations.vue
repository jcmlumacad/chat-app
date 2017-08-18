<template lang="html">
  <div :class="{ 'conversation-template': conversations.length == 0 }">
    <div class="box" v-for="conversation in conversations" @click="viewConversation({ conversation, store })">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <i class="fa fa-address-card-o default-image"></i>
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>Be Chat</strong>
              <small class="conversation-date">
                <i class="fa fa-clock-o"></i>
                {{ conversation.updated_at | ago }}
              </small>
              <div class="truncate">
                <small v-text="conversation.last_message"></small>
              </div>
            </p>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Conversation from '~/modules/Conversation/Client/Resources/Conversation'
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'conversations',
    computed: {
        ...mapGetters({
            conversations: 'conversations'
        }),
        store() {
            return this
        }
    },
    filters: {
        ago(date) {
            return Moment.utc(date).fromNow()
        }
    },
    methods: mapActions([
        'viewConversation'
    ]),
    created() {
        this.$store.dispatch('getAllConversations')
    }
}
</script>
