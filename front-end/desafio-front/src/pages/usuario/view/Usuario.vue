<template>
  <div>
    <q-dialog
      v-model="open"
    >
      <q-card class="size-dialog">
        <q-card-section>
          <div class="text-h6">Editar</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <div class="row">
            <div class="div-pic col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <q-avatar size="110px" class="q-mb-sm">
                <img :src="getUserImage">
              </q-avatar>
            </div>
            <div class="div-input col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <app-input
                v-if="user"
                ref="nome"
                :rules="rulesNome"
                :label="$t('pages.usuario.fields.nome')"
                :value="user.name"
                v-model="user.name"
              />
            </div>
            <div class="div-input col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
              <app-input
                v-if="user"
                ref="email"
                :rules="rulesEmail"
                :label="$t('pages.usuario.fields.email')"
                :value="user.email"
                v-model="user.email"
              />
            </div>
            <div class="div-input col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
              <app-input
                v-if="user"
                ref="password"
                :rules="rulesPassword"
                :label="$t('pages.usuario.fields.password')"
                :value="user.password"
                :type-input="'password'"
                v-model="user.password"
              />
            </div>
          </div>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <app-button
            class="style-button"
            :label="$t('pages.usuario.buttons.salvar')"
            :color="'positive'"
            @click="salvar"
          />
          <app-button
            class="style-button"
            v-close-popup
            :label="$t('pages.usuario.buttons.cancelar')"
            :color="'negative'"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import validateMixin from 'pages/mixins/validateMixin.js'
import UsuarioService from 'pages/usuario/service/UsuarioService.js'

export default {
  name: 'Usuario',
  mixins: [validateMixin],
  props: {
    usuario: {
      type: Object,
      default: undefined
    },
    value: {
      type: Boolean,
      default: false
    },
    fromVuex: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    user: undefined,
    open: false
  }),
  created () {
    this.open = this.value
    this.user = this.usuario
  },
  methods: {
    salvar () {
      if (!this.validate()) {
        return
      }
      UsuarioService.build().create(this.user)
        .then((user) => {
          if (this.fromVuex) {
            this.$store.dispatch('app/actionUser', user)
            this.open = false
            return
          }
          this.$emit('update-user', user)
          this.open = false
        })
    }
  },
  computed: {
    getUserImage () {
      return this.user ? this.user.avatar : ''
    },
    rulesNome () {
      return [
        (value) => value && value.length > 0 || this.$t('pages.usuario.rules.nome.required')
      ]
    },
    rulesEmail () {
      return [
        (value) => value && value.length > 0 || this.$t('pages.usuario.rules.email.required')
      ]
    },
    rulesPassword () {
      return [
        (value) => value && value.length > 0 || this.$t('pages.usuario.rules.password.required')
      ]
    }
  },
  watch: {
    usuario () {
      this.user = this.usuario
    },
    value () {
      this.open = this.value
    },
    open () {
      this.$emit('input', this.open)
    }
  }
}
</script>

<style scoped>
.size-dialog {
  width: 800px;
  max-width: 80vw;
}
.div-pic {
  display: flex;
  align-items: center;
  justify-content: center;
}

.div-input {
  padding: 5px;
}

.style-button {
  width: 130px;
  margin-right: 12px;
}
</style>
