const router = require('express').Router()
const Resources = require('./model')
const { checkUniqueName } = require('./middleware')

router.get('/', async (req, res) => {
	await Resources.getAll(req.query)
		.then(projects => {
			res.status(200).json(projects)
		})
})

router.post('/', checkUniqueName, async (req, res) => {
	await Resources.create(req.body)
		.then(newResource => {
			res.status(201).json(newResource)
		})
})

module.exports = router
