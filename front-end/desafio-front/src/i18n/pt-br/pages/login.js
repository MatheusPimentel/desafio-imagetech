export default {
  title: 'Bem Vindo',
  fields: {
    email: 'E-mail',
    senha: 'Senha'
  },
  buttons: {
    entrar: 'Entrar'
  },
  rules: {
    email: {
      required: 'Este campo é obrigatório'
    },
    password: {
      required: 'Este campo é obrigatório'
    }
  }
}
