<template lang="html">
  <div class="bubble-container" :class="{ 'bubble-right': right }">
    <div class="row">
      <div class="inversePair" :class="{ sender: right }">
        <div class="image-container">
          <figure class="image is-48x48">
            <slot name="image"></slot>
          </figure>
        </div>
      </div>
      <div class="inversePair">
        <div class="message-container" :class="{ 'message-container-right': right }">
          <div class="message" :class="{ 'message-right': right }">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
      <!-- <p class="message-content">{{ name }} . {{ message.created_at | ago }}</p> -->
    </div>
    <div class="row">
      <div class="inversePair" :class="{ sender: right }"></div>
      <div class="inversePair">
        <p class="message-content" :class="{ left: !right, right: right }">{{ name }} &middot; {{ message.created_at | time }}</p>
      </div>
    </div>
    <!-- <div class="message-timestamp" :class="{ 'message-container-right': right }">
      <p class="message-content">{{ name }} . {{ message.created_at | ago }}</p>
    </div> -->
  </div>
</template>

<script>
export default {
    name: 'message-bubble',
    data() {
        return {
            right: false
        }
    },
    props: {
        message: {
            require: true
        },
        profile: {
            type: Object,
            require: true
        }
    },
    filters: {
        ago(date) {
            return Moment.utc(date).fromNow()
        },
        time(date) {
            return Moment(date).format('h:mm a')
        }
    },
    computed: {
        name() {
            return this.message._sender.length ? this.message._sender[0].name : 'Client'
        }
    },
    created() {
        // For admin users
        if (this.profile.hasOwnProperty('id')) {
            // If the message has sender details
            if (this.message._sender.length == 0) {
                this.right = false
            } else {
                this.right = this.message._sender[0].id == this.profile.id
            }
        // For client users
        } else {
            // If the message has sender details
            if (this.message._sender.length == 0) {
                this.right = true
            } else {
                this.right = false
            }
        }
    }
}
</script>
