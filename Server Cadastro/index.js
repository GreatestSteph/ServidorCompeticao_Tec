import express from 'express'; //importa express
import session from 'express-session'; //importa session do express
import logarusuario, {verificarautenticaçao} from './segurança/autenticar.js'; 
import rotasdousuario from './rotas/rotasdousuario.js';
import usuarioclasse from "./modelo/usuario.js"
//importa as funçoes autenticaçaologin e UsuarioAutenticado do arquivo autenticarjs



const localizaçaohostname = 'localhost'; //local do server
const numeroporta = 1515; //numero da porta
const aplicacao = express();  
//cria uma aplicação como instancia do express



//instalado a partir do npm install session
aplicacao.use(session({ //configura a sessão/login de determinado usuario
    secret: 'W0WsUp3rçh4V3s3çRet4W0W', //chavesecreta
    resave: true, //salva a sessão a cada requisição
    saveUninitialized: true, 
    // quando for true, a sessão será salva no armazenamento, 
    // mesmo que ela não tenha sido modificada durante a requisição

    // quando for false, a sessão só será salva no armazenamento se for modificada 

    // uma sessao modificada é aquela que se altera o login ou senha para o acesso
    // uma sessao normal é aquela que o login ou senha são os mesmos para o acesso
    cookie: { //ok
        maxAge: 1000 * 60 * 15 // a sessão/login irá durar 15 minutos
    }
})) 




aplicacao.use(express.urlencoded({extended: true})); 
// as informaçoes enviadas de um formulario/etc
// são analisadas e então codificadas em um objeto javascript (transformadas)

// Exemplo: 
// nome: João Silva (normal)
// nome=Jo%C3%A3o+Silva (codificado)

// quando for true, os dados serao analisados e codificados com o ajuda da biblioteca qs 
// quando for false, os dados serao analisados e codificados com o ajuda da biblioteca query string




aplicacao.get('/', (requisicao, resposta) => { //se o usuario digitar apenas /
    resposta.redirect('/login.html'); //ele será redirecionado para a pagina de login
}); //ok

aplicacao.get('/login', (requisicao, resposta) => { //se o usuario digitar /login
    resposta.redirect('/login.html'); //o usuario sera redirecionado para a pagina de login
});

aplicacao.post('/login', logarusuario); 
//ao acessar a pagina de login
//o usuario recebe uma requisiçao e produz uma resposta a partir da funçao autenticaçaologin




aplicacao.use(express.static('./public')); 
//a aplicaçao disponibiliza os arquivos da pasta public, de forma estática

aplicacao.use(verificarautenticaçao, express.static('./protegido'));
//a aplicaçao disponibiliza os arquivos da pasta protegida, de forma estática
//verifica se o usuario foi autenticado antes de levar ele as paginas da pasta protegida




aplicacao.listen(numeroporta, localizaçaohostname, () => {
    console.log('O servidor está funcionando em ' + localizaçaohostname + ', na porta: ' + numeroporta); 
    // o server ao ler ou receber uma requisiçao, vai mostrar uma mensagem
});




//testar se o banco de dados está funcionando

// primeira pessoa adicionada
//const pessoa = new usuarioclasse(1, "Elix", "Ana Beatriz de Souza Sauro", "Menos de 1 ano", "2 pessoas", "Entre 18 a 25", "Banco de Dados, Front End", "Sabrina de Souza Pereira", "sabrinasou@email.com", "souzsabrina#4455", "Será aprensentado um projeto sobre a natureza", "Nada");

// segunda pessoa adicionada e atualizada
//const pessoa = new usuarioclasse(2, "Corsa", "Roberto de Santos Soares", "1 a 4 anos", "4 pessoas", "Variado", "Banco de Dados, Back End, Power BI", "Ana Maria dos Santos", "anamariasa@email.com", "anamaryy#4455", "Será aprensentado um projeto sobre o impacto das tecnologias", "Nada");



//gravar funcionando 

//pessoa.gravar().then(() => {
//    console.log('Usuário gravado com sucesso');
//}).catch((erro) => {
//    console.log('Não foi possível gravar o usuário no banco de dados:' + erro.message)
//})



//atualizar funcionando

//pessoa.atualizar().then(() =>{
//    console.log('Usuário atualizado com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível atualizar o usuário no banco de dados:' + erro.message)
//})



//exclui pessoa funcionando

//pessoa.excluir().then(() =>{
//    console.log('Usuário excluido com sucesso!');
//}).catch((erro) => {
//    console.log('Não foi possível excluir o usuário no banco de dados:' + erro.message)
//})



//consulta funcionando

//pessoa.consultar().then((listapessoas) => {
//   for (const pessoa of listapessoas){
//        console.log(pessoa.toJSON())
//    }
//}).catch((erro) => {
//    console.log('Não foi possível consultar o usuário!' + erro.message);
//})


//permite que o express manipula objetos no formato json
aplicacao.use(express.json());
aplicacao.use('/usuario', rotasdousuario)