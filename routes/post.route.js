import express from 'express'

const router = express.Router()

router.get('/test', (req, res) => {
    res.send('router workds')
})

router.post('/test', (req, res) => {
    res.send('router workds')
})

router.put('/test', (req, res) => {
    res.send('router workds')
})

router.delete('/test', (req, res) => {
    res.send('router workds')
})

export default router