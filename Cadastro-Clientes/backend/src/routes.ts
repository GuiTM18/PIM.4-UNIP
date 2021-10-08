import { Router, request, response, Request, Response} from 'express'
 
import { getClientes } from './controller/ClientesController';
import { saveCliente } from './controller/ClientesController';
import { getCliente } from './controller/ClientesController';
import { updateCliente } from './controller/ClientesController';
import { deleteCliente } from './controller/ClientesController';

const routes = Router()
 
routes.get('/home', (request: Request, response: Response) => {
    return response.json({ message: 'Teste!' })
})
 
routes.get('/Clientes', getClientes)
routes.post('/Clientes', saveCliente)
routes.get('/Clientes/:id', getCliente)
routes.put('/Clientes/:id', updateCliente)
routes.delete('/Clientes/:id', deleteCliente)

 
export default routes
