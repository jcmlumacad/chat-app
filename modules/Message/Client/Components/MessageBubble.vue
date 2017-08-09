<template lang="html">
  <div class="bubble-container">
    <div class="row">
      <div class="inversePair">
        <div class="image-container">
          <figure class="image is-48x48">
            <slot name="image"></slot>
          </figure>
        </div>
      </div>
      <div class="inversePair">
        <div class="message-container">
          <div class="message">
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
