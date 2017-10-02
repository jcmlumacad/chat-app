<template lang="html">
  <div>
    <div :class="{ 'conversation-template': conversations.length == 0 }">
      <div class="box" v-for="conversation in conversations" @click="viewConversation({ conversation, store })">
        <article class="media">
          <div class="media-left">
            <figure class="image is-64x64">
              <i class="fa fa-user-circle fa-4x"></i>
              <!-- <i class="fa fa-address-card-o default-image"></i> -->
              <!-- <img src="/assets/images/group.png" class="image-content"> -->
              <label class="tag is-small is-danger" v-if="conversation.count > 99">99+</label>
              <label class="tag is-small is-danger" v-if="conversation.count < 100 && conversation.count > 0" v-text="conversation.count"></label>
            </figure>
          </div>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>
                  Be Mini Chat
                </strong>
                <small class="conversation-date">
                  <i class="fa fa-clock-o"></i>
                  {{ conversation.data.updated_at | ago }}
                </small>
                <div class="truncate">
                  <strong v-if="conversation.count > 0">
                    <small v-text="conversation.data.last_message"></small>
                  </strong>
                  <small v-if="conversation.count == 0" v-text="conversation.data.last_message"></small>
                </div>
              </p>
            </div>
          </div>
        </article>
      </div>
    </div>
    <toast-manager ref="toast"></toast-manager>
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
    methods: {
        ...mapActions([
            'viewConversation'
        ]),
        toast(message, options) {
            this.$refs.toast.showToast(message, options)
        }
    },
    created() {
        this.$store.dispatch('getAllConversations').then(response => {
            if (response.error) {
                this.toast(response.message, {
                    className: this.$refs.toast.styles.NORMAL_STYLE.DANGER,
                    closable: true
                })
            }
        })
    },
    mounted() {
        this.$refs.toast.init({
            max: 1,
            position: this.$refs.toast.POSITION.BOTTOM_RIGHT
        })
    }
}
</script>
