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
import Conversation from '~/modules/Conversation/Client/Models/Conversation'

export default {
    name: 'conversations',

    data() {
        return {
            conversations: []
        }
    },

    methods: {
        viewConversation(conversation) {
            console.log(conversation);
        }
    },

    created() {
        Conversation.all(conversations => this.conversations = conversations)
    }
}
</script>

<style lang="scss" scoped>
$box-highlight: #B6C0E2;
$online-image: #3C4F8F;

.box:not(:last-child) {
    margin-bottom: 0;
}
.box:hover {
    background: $box-highlight;
    cursor: pointer;
}
.box {
    border-radius: 5px;
    padding: 0.75rem;
    margin: 0.75rem;
}
.image {
    border-radius: 50%;
    border: 2px solid $online-image;
    overflow: hidden;
}
</style>
