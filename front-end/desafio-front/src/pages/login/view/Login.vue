<template>
  <div class="container-login">
    <div class="div-login">
      <div class="div-icon">
        <img
          class="image-login"
          src="../../../assets/login.png"
        />
      </div>
      <div class="form-login">
        <span class="form-title">{{ $t('pages.login.title') }}</span>
        <app-input
          ref="email"
          class="fields"
          :rules="rulesEmail"
          :rounded="true"
          :label="$t('pages.login.fields.email')"
          :dense="false"
          :prepend="'email'"
          :value="record.email"
          v-model="record.email"
        />
        <app-input
          ref="password"
          class="fields"
          :rules="rulespassword"
          :rounded="true"
          :label="$t('pages.login.fields.senha')"
          :dense="false"
          :prepend="'lock'"
          :type-input="'password'"
          :value="record.password"
          v-model="record.password"
        />
        <app-button
          :label="$t('pages.login.buttons.entrar')"
          :color="'positive'"
          :rounded="true"
          :size="'lg'"
          @click="login"
        />
      </div>
    </div>
  </div>
</template>

<script>
import validateMixin from 'pages/mixins/validateMixin.js'
import UsuarioService from 'pages/usuario/service/UsuarioService.js'

export default {
  name: 'Login',
  mixins: [validateMixin],
  data: () => ({
    record: {
      email: undefined,
      password: undefined
    }
  }),
  methods: {
    login () {
      if (!this.validate()) {
        return
      }
      UsuarioService.build().login(this.record)
        .then((user) => {
          this.$store.dispatch('app/actionUser', user)
          this.$router.push({ path: '/dashboard' })
        })
    }
  },
  computed: {
    rulesEmail () {
      return [
        (value) => value && value.length > 0 || this.$t('pages.login.rules.email.required')
      ]
    },
    rulespassword () {
      return [
        (value) => value && value.length > 0 || this.$t('pages.login.rules.password.required')
      ]
    }
  }
}
</script>

<style
  lang="scss"
  scoped
>
.container-login {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 15px;
  background: #9053c7;
  background: linear-gradient(
    -135deg
    ,#c850c0,#4158d0)
}

.div-login {
  width: 960px;
  background: #fff;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  padding: 177px 130px 33px 95px;
}

.div-icon {
  width: 316px;
}

.image-login {
  width: 100%;
}

.form-login {
  width: 290px;
}

.form-title {
  font-family: Poppins-Bold, sans-serif;
  font-weight: bold;
  font-size: 24px;
  text-align: center;
  width: 100%;
  display: block;
  padding-bottom: 54px;
}

.fields {
  margin-bottom: 15px;
}

@media (max-width: 768px) {
  .div-icon {
    display: none;
  }

  .form-login {
    width: 100%;
  }
  .div-login {
    padding: 177px 20px 33px 20px;
  }
}

@media (max-width: 992px) {
  .div-icon {
    width: 35%;
  }
}
</style>
