<template lang="html">
  <div class="bubble-container" :class="{ 'bubble-right': true }">
    <div class="row">
      <div class="inversePair" :class="{ sender: true }">
        <div class="image-container">
          <figure class="image is-48x48">
            <slot name="image"></slot>
          </figure>
        </div>
      </div>
      <div class="inversePair">
        <div class="message-container" :class="{ 'message-container-right': true }">
          <div class="message" :class="{ 'message-right': true }">
            <slot name="content"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'message-bubble'
}
</script>
