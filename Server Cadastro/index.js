import express from 'express'; //importa express
import session from 'express-session'; //importa session do express
import autenticaçaologin, {UsuarioAutenticado} from './segurança/autenticar.js'; 
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

aplicacao.post('/login', autenticaçaologin); 
//ao acessar a pagina de login
//o usuario recebe uma requisiçao e produz uma resposta a partir da funçao autenticaçaologin




aplicacao.use(express.static('./public')); 
//a aplicaçao disponibiliza os arquivos da pasta public, de forma estática

aplicacao.use(UsuarioAutenticado, express.static('./protegido'));
//a aplicaçao disponibiliza os arquivos da pasta protegida, de forma estática
//verifica se o usuario foi autenticado antes de levar ele as paginas da pasta protegida




aplicacao.listen(numeroporta, localizaçaohostname, () => {
    console.log('O servidor está funcionando em ' + localizaçaohostname + ', na porta: ' + numeroporta); 
    // o server ao ler ou receber uma requisiçao, vai mostrar uma mensagem
});
