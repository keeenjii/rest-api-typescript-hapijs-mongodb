import {Server} from '@hapi/hapi';

export const areaPrefsRoutes = (server:Server) => {
    server.route({
        method: 'PUT',
        path: '/users/{id}/biomapsPrefs',
        handler: () => {}
    });
    server.route({
        method: 'GET',
        path: '/users/{id}/biomapsPrefs',
        handler: () => {}
    });   
}