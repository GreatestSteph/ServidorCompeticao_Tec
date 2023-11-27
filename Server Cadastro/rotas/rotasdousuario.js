import { Router } from 'express';
import ControleUsu from '../controledeusuario/controleaousuario.js';

const rotasdousuario = new Router();
const usuariocontrole = new ControleUsu();


rotasdousuario.get('/', usuariocontrole.GET).post('/', usuariocontrole.POST).put('/', usuariocontrole.PUTPATCH).patch('/', usuariocontrole.PUTPATCH).delete('/', usuariocontrole.DELETE);
export default rotasdousuario