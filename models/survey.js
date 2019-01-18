const Joi = require('joi');

const SurveySchema = {
	id: Joi.number().integer().required(),
	survey: Joi.string().min(2).required(),
	yes: Joi.number().integer().required(),
	no: Joi.number().integer().required()
	};

exports.SurveySchema;