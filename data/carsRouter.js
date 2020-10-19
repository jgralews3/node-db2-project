const express = require('express')
const knex = require('knex')
const db = require('./config')
const router = express.Router()

router.get('/', async (req, res, next) => {
    try {
        res.json(await db("cars"))
    } catch (err) {
        next(err)
    }
})
