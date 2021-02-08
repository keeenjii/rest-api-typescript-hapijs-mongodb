import {Server} from '@hapi/hapi'
import { getPrefs, updatePrefs } from '../controllers/biomapsPrefs.controller'
import {createUser, getUsers, getUser, deleteUser, updateUser} from '../controllers/user.controller'
import {updateAreaPrefs, getArea} from '../controllers/areaPreferences.controller'

export const userRoutes = (server: Server) => {
    server.route({
        method: 'POST',
        path: '/users',
        handler: createUser
    })

    server.route({
        method: 'GET',
        path: '/users',
        handler: getUsers
    })

    server.route({
        method: 'GET',
        path: '/users/{id}',
        handler: getUser
    })

    server.route({
        method: 'PUT',
        path: '/users/{id}',
        handler: updateUser
    })

    server.route({
        method: 'DELETE',
        path: '/users/{id}',
        handler: deleteUser
    })

    server.route({
        method: 'PUT',
        path: '/users/{id}/biomapsPrefs' ,
        handler: updatePrefs
    });

    server.route({
        method: 'GET',
        path: '/users/{id}/biomapsPrefs',
        handler: getPrefs
    })

    server.route({
        method: 'PUT',
        path: '/users/{id}/biomapsPrefs/areaPrefs',
        handler: updateAreaPrefs
    })

    server.route({
        method: 'GET',
        path: '/users/{id}/biomapsPrefs/areaPrefs',
        handler: getArea
    })
}