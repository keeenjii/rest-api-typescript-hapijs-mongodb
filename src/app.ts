import {Server} from '@hapi/hapi'
import {userRoutes} from './routes/user.routes'

export const init = async () => {
    const server:Server = new Server({
        port: 3000,
        host: 'localhost'
    });
    
    userRoutes(server);


    await server.start();
    console.log('Servidor rodando em %s', server.info.uri);
}