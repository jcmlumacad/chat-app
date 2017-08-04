<template lang="html">
  <div>
    <router-link to="/" exact>
      <div class="mini-chat-back">
        <i class="fa fa-chevron-left mini-chat-back-icon"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'back'
}
</script>

<style lang="scss" scoped>
$light-blue: #8394C5;
$white: #FFFFFF;

.mini-chat-back {
    width: 35px;
    height: 35px;
    background-color: transparent;
    border-radius: 50%;
    color: $white;
    position: relative;
    cursor: pointer;
}
.mini-chat-back:hover {
    background-color: $light-blue;
}
.mini-chat-back-icon {
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
    display: block;
}
</style>
