
const Tasks = require('./model')

const checkProjectId = async (req, res, next) => {
    await Tasks.checkProjectId(req.body.project_id)
        .then(project => {
            if(project){
                next()
            } else {
                res.status(400).json({
                    message: 'invalid project id'
                })
            }
        })
}

const checkTasksPayload = (req, res, next) => {
	const { task_description, project_id } = req.body
	if (task_description && project_id && typeof project_id == 'number') {
		next()
	} else {
        res.status(400).json({ message: "missing proper fields" })
		
	}
}

module.exports = {
	checkProjectId,
	checkTasksPayload
}