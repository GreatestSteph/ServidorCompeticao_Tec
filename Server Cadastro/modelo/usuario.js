import usuario_dao from "./campersistencia/userdao.js"; //ok

// cria classe usuario
export default class usuarioclasse{
    #id;
    #nomedotime;
    #nomelider;
    #tecnologiaidade;
    #pessoastime;
    #idade;
    #tecnologia;
    #nomecontato;
    #email;
    #discord;
    #infoprojeto;
    #infopessoa;

    constructor(id, nomedotime, nomelider, tecnologiaidade, pessoastime, idade, tecnologia, nomecontato, email, discord, infoprojeto, infopessoa) {
        this.#id = id;
        this.#nomedotime = nomedotime;
        this.#nomelider = nomelider;
        this.#tecnologiaidade = tecnologiaidade;
        this.#pessoastime = pessoastime;
        this.#idade = idade;
        this.#tecnologia = tecnologia;
        this.#nomecontato = nomecontato;
        this.#email = email;
        this.#discord = discord;
        this.#infoprojeto = infoprojeto;
        this.#infopessoa = infopessoa;
    }

    get id() {
        return this.#id;
    }

    set id(novoid) {
        this.#id = novoid;
    }

    get nomedotime() {
        return this.#nomedotime;
    }

    set nomedotime(novonome) {
        this.#nomedotime = novonome;
    }

    get nomelider() {
        return this.#nomelider;
    }

    set nomelider(novonomelider) {
        this.#nomelider = novonomelider;
    }

    get tecnologiaidade() {
        return this.#tecnologiaidade;
    }

    set tecnologiaidade(novatecnologiaidade) {
        this.#tecnologiaidade = novatecnologiaidade;
    }

    get pessoastime() {
        return this.#pessoastime;
    }

    set pessoastime(novapessoastime) {
        this.#pessoastime = novapessoastime;
    }

    get idade() {
        return this.#idade;
    }

    set idade(novaidade) {
        this.#idade = novaidade;
    }

    get tecnologia() {
        return this.#tecnologia;
    }

    set tecnologia(novatecnologia) {
        this.#tecnologia = novatecnologia;
    }

    get nomecontato() {
        return this.#nomecontato;
    }

    set nomecontato(novonomecontato) {
        this.#nomecontato = novonomecontato;
    }

    get email() {
        return this.#email;
    }

    set email(novoemail) {
        this.#email = novoemail;
    }

    get discord() {
        return this.#discord;
    }

    set discord(novodiscord) {
        this.#discord = novodiscord;
    }

    get infoprojeto() {
        return this.#infoprojeto;
    }

    set infoprojeto(novoinfoprojeto) {
        this.#infoprojeto = novoinfoprojeto;
    }

    get infopessoa() {
        return this.#infopessoa;
    }

    set infopessoa(novoinfopessoa) {
        this.#infopessoa = novoinfopessoa;
    }

    //override 
    // ele faz o javascript converter o objeto de outra forma 
    // na saida do terminal
    //O método toJSON tambem serve para personalizar a aparência da saída de um objeto. 
    toJSON() {
        return {
            id: this.#id,
            nome_do_time: this.#nomedotime,
            nome_lider: this.#nomelider,
            tecnologia_idade: this.#tecnologiaidade,
            pessoas_time: this.#pessoastime,
            idade: this.#idade,
            tecnologia: this.#tecnologia,
            nome_contato: this.#nomecontato,
            email: this.#email,
            discord: this.#discord,
            info_projeto: this.#infoprojeto,
            info_pessoa: this.#infopessoa,
        };
    }

    //o async quer dizer que esses metodos estao sendo executados em paralelo
    //eles tambem aguardam uma resposta que nao depende dessa aplicaçao
    //eles dependem da ação do banco de dados
    
    //mudar aqui
    async gravar(){
        const novousuarioDAO = new usuario_dao();
        await novousuarioDAO.gravar(this);
    };
    async atualizar(){
        const novousuarioDAO = new usuario_dao();
        await novousuarioDAO.atualizar(this);
    };
    async excluir(){
        const novousuarioDAO = new usuario_dao();
        await novousuarioDAO.excluir(this);
    };
    async consultar(){
        const novousuarioDAO = new usuario_dao();
        return await novousuarioDAO.consultar(this);
    };
}