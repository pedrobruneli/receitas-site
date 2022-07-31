import bcrypt from 'bcrypt'

export default async function checkUser(object, pass) {
    if(!object) {
        throw new Error('Usuario não encontrado');
    }
    if(!await checkPass(pass, object.pass)) {
        throw new Error('Senha incorreta');
    }
    return true;
}

async function checkPass(pass, db_pass) {
    const correctPass = await bcrypt.compare(pass, db_pass);
    return correctPass;
}