<template lang="html">
  <div>
    <router-link to="/conversation/create" exact>
      <div class="mini-chat-new-conversation">
        <i class="fa fa-pencil-square-o mini-chat-new-conversation-icon"></i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
    name: 'create-conversation'
}
</script>

<style lang="scss" scoped>
$light-blue: #8394C5;
$white: #FFFFFF;

.mini-chat-new-conversation {
    width: 35px;
    height: 35px;
    background-color: transparent;
    border-radius: 50%;
    color: $white;
    position: relative;
    cursor: pointer;
}
.mini-chat-new-conversation:hover {
    background-color: $light-blue;
}
.mini-chat-new-conversation-icon {
    position: absolute;
    width: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: $white;
    display: block;
}
</style>
