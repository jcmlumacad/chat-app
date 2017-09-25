<template>
  <div class="auth-pane">
    <div class="login-container">
      <p class="login-title">Be Chat</p>

      <form class="login-form form-horizontal">
        <input type="email" name="email" placeholder="Email" class="form-control" v-model="email" autofocus @keypress.enter="validate()" required>
        <input type="password" name="password" placeholder="Password" class="form-control" v-model="password" @keypress.enter="validate()" required>

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
                this.toast('Logging in', {
                    className: this.$refs.toast.styles.NORMAL_STYLE.INFO,
                    closable: true
                })

                return this.$store.dispatch('login', {
                    email: this.email,
                    password: this.password,
                    store: this
                }).then(response => {
                    if (response.error) {
                        this.toast(response.message, {
                            className: this.$refs.toast.styles.NORMAL_STYLE.DANGER,
                            closable: true
                        })
                    } else {
                        this.$router.push({
                            name: 'home'
                        })
                    }
                })
            }

            this.toast('Please input your credentials', {
                className: this.$refs.toast.styles.NORMAL_STYLE.DANGER,
                closable: true
            })
        },
        toast(message, options) {
            this.$refs.toast.showToast(message, options)
        }
    },
    mounted() {
        this.$refs.toast.init({
            max: 1,
            position: this.$refs.toast.POSITION.BOTTOM_RIGHT
        })
    }
}
</script>
