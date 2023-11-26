export function verificarautenticaçao(requisicao, resposta, next) { //verifica se o usuario esta logado
    if (requisicao.session.autenticado) { //se o login for sucedido
        next(); //continue as açoes
    } else { //ou entao
        resposta.redirect('/login.html'); //volte a pagina de login
    }
}

export default function logarusuario(requisicao, resposta) { //ok
    const email = "manga@email"; //armazena email de login
    const senha = "manga12345"; //armazena senha de login

    const emailpessoa = requisicao.body.email;
    //captura as informações de email atraves do "name = email"
    const senhapessoa = requisicao.body.senha;
    //captura as informações de senha atraves da "name = senha"

    if (emailpessoa === email && senhapessoa === senha) { 
        // verifica se o email informado é igual a certo email
        // verifica se a senha informada é igual a certa senha
        requisicao.session.autenticado = true; //se o login for sucedido
        resposta.redirect('/cadastro.html'); //redirecione para a pagina de cadastro
    } else { //ok
        requisicao.session.autenticado = false; //se o login for mal-sucedido
        resposta.redirect('/login.html'); //redirecionada para a pagina de login
    }
}
//devemos exportar as funçoes, para que elas possam depois serem importadas