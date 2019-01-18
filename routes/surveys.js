const express = require('express');
const Joi = require('joi');
const router = express.Router();
const Survey = require('../models/survey.js')


const surveys = [{
	'id': 1,
    'survey': 'Will George R.R. Martin ever finish a Song of Ice and Fire?',
	'yes': 2,
	'no': 3
    }
];

// get by all surveys
router.get('/', (req, res) => {
	console.log('yo mama');
	res.send(surveys);
}); 


// get survey by id
router.get('/:id', (req, res) => {
	const survey = surveys.find(g => g.id === parseInt(req.params.id));
	if (!survey) return res.status(404).send('Not found');
	res.send(survey);
});

// add a survey
router.post('/create', (req, res) => {

	const result = Joi.validate(req.body);
	if (result.error){
		res.status(400).send(result.error)
	}

	const survey = {
		id: surveys.length + 1,
		survey: req.body.survey,
		yes: 0,
		no: 0
		
	}

	surveys.push(survey)
	res.send(survey);
});

// update a survey
// router.put('/api/surveys/:id', (req, res) => {
// 	const survey = surveys.find(g => g.id === parseInt(req.params.id));
// 	if(!survey) return res.status(404).send('This ID not found.');

// 	const schema = {
// 		title: Joi.string().min(2).required()
// 	};

// 	const result = Joi.validate(req.body, schema);
// 	if(result.error) {
// 		res.status(400).send(result.error)
// 	}

// 	survey.title = req.body.title;
// 	res.send(survey);
// });

// delete a survey
// router.delete('/api/surveys/:id', (req, res) => {
// 	const survey = surveys.find(g => g.id ===  parseInt(req.params.id));
//     if (!survey) return res.status(404).send('This ID not found.');

//     const index = surveys.indexOf(survey);
//     surveys.splice(index, 1);

//     res.send(survey);
// });

module.exports = router;