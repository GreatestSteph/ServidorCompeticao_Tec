import usuarioclasse from "../modelo/usuario.js";

export default class ControleUsu {
    
    async POST(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method !== 'POST') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize POST!'
            });
            return;
        }

        const extraidados = requisicao.body;
        const { nomedotime, nomelider, tecnologiaidade, pessoastime, idade, tecnologia, email, nomecontato, discord, infoprojeto } = extraidados;
        if (nomedotime && nomelider && tecnologiaidade && pessoastime && idade && tecnologia && nomecontato && email && discord && infoprojeto) {
            const pessoa = new usuarioclasse(0, ...Object.values(extraidados));
            try {
                await pessoa.gravar();
                resposta.json({
                    status: true,
                    mensagem: 'Usuário gravado com sucesso!',
                    id_usuario: pessoa.id
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível registrar o usuário! ' + erro.message
                });
            }
        } else {
            resposta.json({
                status: false,
                mensagem: "Há campos faltando que devem ser obrigatoriamente preenchidos!"
            });
        }
    }
    


    async PUTPATCH(requisicao, resposta) {
        resposta.type('application/json');

        if (requisicao.method !== 'PUT' && requisicao.method !== 'PATCH') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método PUT ou PATCH!'
            });
            return;
        }
        const extraidados = requisicao.body;
        const { id, nomedotime, nomelider, tecnologiaidade, pessoastime, idade, tecnologia, email, nomecontato, discord, infoprojeto } = extraidados;
        if (id && nomedotime && nomelider && tecnologiaidade && pessoastime && idade && tecnologia && nomecontato && email && discord && infoprojeto) {
            const pessoa = new usuarioclasse(id, ...Object.values(extraidados));
            try {
                await pessoa.atualizar();
                resposta.json({
                    status: true,
                    mensagem: 'Usuário atualizado com sucesso!'
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível atualizar o usuário! ' + erro.message
                });
            }
        } else {
            resposta.json({
                status: false,
                mensagem: "Há campos faltando que devem ser obrigatoriamente preenchidos!"
            });
        }
    }


    async DELETE(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method !== 'DELETE') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método DELETE!'
            });
            return;
        }
        const extraidados = requisicao.body;
        const { id } = extraidados;
        if (id) {
            const pessoa = new usuarioclasse(id);
            try {
                await pessoa.excluir();
                resposta.json({
                    status: true,
                    mensagem: 'Usuário excluído com sucesso!'
                });
            } catch (erro) {
                resposta.json({
                    status: false,
                    mensagem: 'Não foi possível excluir o usuário! ' + erro.message
                });
            }
        } else {
            resposta.json({
                status: false,
                mensagem: "O id deve ser informado!"
            });
        }
    }


    async GET(requisicao, resposta) {
        resposta.type('application/json');
        if (requisicao.method !== 'GET') {
            resposta.json({
                status: false,
                mensagem: 'Método inválido! Utilize o método GET!'
            });
            return;
        }
        const pessoa = new usuarioclasse(0);
        try {
            const listapessoas = await pessoa.consultar();
            resposta.json(listapessoas);
        } catch (erro) {
            resposta.json({
                status: false,
                mensagem: 'Não foi possível mostrar os usuários! ' + erro.message
            });
        }
    }
}
