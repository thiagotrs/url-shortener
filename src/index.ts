import express from 'express'
import { UrlController } from './controllers/UrlController'
import { MongoConnection } from './database/MongoConnection'

const api = express()
api.use(express.json())

const database = new MongoConnection()
database.connect()

const urlController = new UrlController()
api.get('/health', (req, res) => res.json({ status: 'ok' }))
api.post('/shorten', urlController.shorten)
api.get('/:hash', urlController.redirect)

api.listen(5000, () => console.log('Express listening'))