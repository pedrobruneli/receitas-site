import mongoose from 'mongoose'

const receitaschema = new mongoose.Schema(
    {
        id: {type: String},
        nome: {type: String, required: true},
        imagem: {type: String},
        receita: {type: String, required: true}
    }
)
const receitas = mongoose.model('receitas', receitaschema)

export default receitas