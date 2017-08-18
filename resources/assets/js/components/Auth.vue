<template>
  <div class="auth-pane">
    <div class="login-container">
      <p class="login-title">Be Chat</p>

      <form class="login-form form-horizontal">
        <input type="text" name="email" placeholder="Email" class="form-control" v-model="email" autofocus @keypress.enter="validate()">
        <input type="password" name="password" placeholder="Password" class="form-control" v-model="password" @keypress.enter="validate()">

        <button type="button" name="submit" class="form-control form-button" @click="validate()">Sign in</button>
      </form>
    </div>

    <toast-manager ref="toast"></toast-manager>
  </div>
</template>

<script>
export default {
    name: 'auth',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        validate() {
            if (this.email && this.password) {
                return this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                    store: this
                })
            }

            this.toast('Please input your credentials', {
                className: 'tag is-danger',
                closable: true
            })
        },
        toast(message, options = {}) {
            this.$refs.toast.showToast(message, options)
        }
    },
    mounted() {
        this.$refs.toast.init({
            max: 1,
            position: 'bottom right'
        })
    }
}
</script>
