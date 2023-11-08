import http from 'http';
import express from 'express';

const hostname = 'localhost';
const porta = 1515;

const aplicaçao = express()
aplicaçao.use(express.static('./public'));
aplicaçao.use(express.static('./protegido'));
aplicaçao.use(express.static('./login', (requisicao, resposta) =>{
    resposta.redirect('/login.html')
}));
const servidor = http.createServer(aplicaçao);

servidor.listen(porta, hostname, () => {
    console.log('O servidor está funcionando em ' + hostname + ', na porta: ' + porta);
});
