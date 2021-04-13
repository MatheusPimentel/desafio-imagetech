export default {
  fields: {
    nome: 'Nome',
    email: 'Email',
    password: 'Senha'
  },
  buttons: {
    salvar: 'Salvar',
    cancelar: 'Cancelar'
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
