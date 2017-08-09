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
