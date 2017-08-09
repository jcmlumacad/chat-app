<template lang="html">
  <div>
    <div class="box" v-for="conversation in conversations" @click="viewConversation(conversation)">
      <article class="media">
        <div class="media-left">
          <figure class="image is-64x64">
            <img :src="conversation.user.image" alt="Image">
          </figure>
        </div>
        <div class="media-content">
          <div class="content">
            <p>
              <strong v-text="conversation.user.name"></strong>
              <small v-text="conversation.user.username"></small>
              <small v-text="conversation.updated_at"></small>
              <br>
              <span v-text="conversation.last_message"></span>
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
    computed: mapGetters({
        conversations: 'conversations'
    }),
    methods: {
        viewConversation(conversation) {
            this.$router.push({
                name: 'conversation.show',
                params: {
                    id: conversation.id
                }
            })
        }
    },
    created() {
        this.$store.dispatch('getAllConversations')
    }
}
</script>
