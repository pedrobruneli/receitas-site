import express from 'express'
import {receitas} from './receitasRoutes.js'
import users from './usersRoutes.js'

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send("Home");
    })
    app.use(
        express.json(),
        receitas, users
    )
}

export default routes;