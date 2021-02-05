import {Server} from '@hapi/hapi'

export const biomapsPrefsRoutes = (server:Server) => {
    server.route({
        method: 'PUT',
        path: '/user/{id}/biomapsPrefs' ,
        handler: () => {}
    });

    server.route({
        method: 'GET',
        path: '/users/{id}/biomapsPrefs',
        handler: () => {}
    })
}