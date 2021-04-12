export default {
  fields: {
    nome: 'Nome',
    email: 'Email',
    password: 'Senha'
  },
  rules: {
    nome: {
      required: 'Este campo é obrigatório'
    },
    email: {
      required: 'Este campo é obrigatório'
    },
    password: {
      required: 'Este campo é obrigatório'
    }
  }
}
