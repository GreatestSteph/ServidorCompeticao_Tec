import usuarioclasse from '../modelo/usuario.js'; //ok //usa a classe de objetos
import conecta from "./conectar.js"; //ok

export default class usuario_dao {
    async gravar(pessoa) {
        if (pessoa instanceof usuarioclasse) { //usa a classe de objetos
            const conexao = await conecta();
            const sql = "INSERT INTO pessoa (nomedotime, nomelider, tecnologiaidade, pessoastime, idade, tecnologia, nomecontato, email, discord, infoprojeto, infopessoa) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
            const parametros = [pessoa.nomedotime, pessoa.nomelider, pessoa.tecnologiaidade, pessoa.pessoastime, pessoa.idade, pessoa.tecnologia, pessoa.nomecontato, pessoa.email, pessoa.discord, pessoa.infoprojeto, pessoa.infopessoa];
            const resultado = await conexao.query(sql, parametros);
            pessoa.id = resultado[0].insertId;
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async atualizar(pessoa) {
        if (pessoa instanceof usuarioclasse) { //usa a classe de objetos
            const conexao = await conecta();
            const sql = "UPDATE pessoa SET nomedotime = ?, nomelider = ?, tecnologiaidade = ?, pessoastime = ?, idade = ?, tecnologia = ?, nomecontato = ?, email = ?, discord = ?, infoprojeto = ?, infopessoa = ? WHERE id = ?";
            const parametros = [pessoa.nomedotime, pessoa.nomelider, pessoa.tecnologiaidade, pessoa.pessoastime, pessoa.idade, pessoa.tecnologia, pessoa.nomecontato, pessoa.email, pessoa.discord, pessoa.infoprojeto, pessoa.infopessoa, pessoa.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async excluir(pessoa) {
        if (pessoa instanceof usuarioclasse) { //usa a classe de objetos
            const conexao = await conecta();
            const sql = "DELETE FROM pessoa WHERE id = ?";
            const parametros = [pessoa.id];
            await conexao.query(sql, parametros);
            global.poolConexoes.releaseConnection(conexao);
        }
    }

    async consultar() {
        let listapessoas = [];
        const conexao = await conecta();
        const sql = 'SELECT * FROM pessoa ORDER BY nomedotime';
        const [rows, fields] = await conexao.query(sql);

        for (const registro of rows) {
            const pessoa = new usuarioclasse(registro.id, registro.nomedotime, registro.nomelider, registro.tecnologiaidade, registro.pessoastime, registro.idade, registro.tecnologia, registro.nomecontato, registro.email, registro.discord, registro.infoprojeto, registro.infopessoa);
            listapessoas.push(pessoa);
        }
        return listapessoas;
    }
}
