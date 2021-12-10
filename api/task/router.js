const router = require('express').Router()
const Tasks = require('./model')
const { checkProjectId, checkTasksPayload } = require('./middleware')


router.get('/', async (req, res) => {
	await Tasks.getAll(req.query)
		.then(tasks => {
			res.status(200).json(tasks)
		})
})

router.post('/', checkProjectId, checkTasksPayload, async (req, res) => {
	await Tasks.create(req.body)
		.then(newResource => {
			res.status(201).json(newResource)
		})
})


module.exports = router