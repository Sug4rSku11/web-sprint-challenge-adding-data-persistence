const router = require('express').Router()
const Resources = require('./model')

router.get('/', async (req, res) => {
	await Resources.getAll(req.query)
		.then(projects => {
			res.status(200).json(projects)
		})
})

router.post('/', async (req, res) => {
	await Resources.create(req.body)
		.then(newResource => {
			res.status(201).json(newResource)
		})
})

module.exports = router
