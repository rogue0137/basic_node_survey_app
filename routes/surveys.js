const express = require('express');
const _ = require('lodash');
const router = express.Router();


const surveys = [];


// Creating a survey
router.post('/', (req, res) => {

	const question = req.body.question;
	
	if (question) {

		const survey = {
			id: surveys.length + 1,
			question: question,
			yes: 0,
			no: 0
		}	

		surveys.push(survey)

		return res.send(survey);
	} else {

		return res.send('Your must include a question.');
	}
});


// Taking a survey
router.post('/:id', (req, res) => {

	const surveyIndex = _.findIndex(surveys, ['id', parseInt(req.params.id)]);

	if (surveyIndex === -1 ) {
		return res.send('This ID not found.');
	} 

	const answer = req.body.answer; 

	if (answer === 'yes') {
		const oldYes = surveys[surveyIndex].yes;
		//increment the "YES" key of the survey object by 1
		surveys[surveyIndex].yes = oldYes + 1;

	} else if (answer === 'no') {
		const oldNo = surveys[surveyIndex].no;
		//increment the "NO" key of the survey object by 1
		surveys[surveyIndex].no = oldNo + 1;
	} else {
		return res.send('Your answer must be "yes" or "no."');
	}

	return res.send(surveys[surveyIndex])
});


// Getting results of a survey 
router.get('/:id', (req, res) => {
	const survey = _.find(surveys, ['id', parseInt(req.params.id)]);
	
	if (!survey) {
		return res.send('This ID not found.');
	} 
	
	return res.send(survey);
});


// Delete a survey
router.delete('/:id', (req, res) => {
	const survey = _.find(surveys, ['id', parseInt(req.params.id)]);

    if (!survey) {
    	return res.send('This ID not found.');
    } 	

    const index = surveys.indexOf(survey);
    surveys.splice(index, 1);

    return res.send(survey);
});


module.exports = router;