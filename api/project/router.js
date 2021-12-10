const router = require('express').Router()
const Projects = require('./model')

router.get('/', async (req, res) => {
	await Projects.getAll(req.query)
		.then(projects => {
			res.status(200).json(projects)
		})
})

router.post('/', async (req, res) => {
	await Projects.create(req.body)
		.then(newProject => {
			res.status(201).json(newProject)
		})
})



module.exports = router