const Schemes = require('./scheme-model');
// find, findById, findSteps, add, addStep
/*
  If `scheme_id` does not exist in the database:

  status 404
  {
    "message": "scheme with scheme_id <actual id> not found"
  }
*/
const checkSchemeId = (req, res, next) => {
  const { scheme_id } = req.params;
  Schemes.findById(scheme_id)
    .then(scheme => {
      if (scheme) {
        next();
      } else {
        res.status(404).json({
          message: `scheme with scheme_id ${scheme_id} not found`
        });
      }
    })
    .catch(next);
};

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {
  const { scheme_name } = req.body;
  if (
    (scheme_name === undefined) ||
      (scheme_name === '') ||
      (typeof scheme_name !== 'string')) {
    res.status(404).json({
      message: 'invalid scheme_name'
    });
  } else {
    next();
  }
};

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {
  const {step_number, instructions} = req.body;

  const instructionsValid = (instructions !== undefined) &&
        (instructions !== '') &&
        (typeof instructions === 'string');

  const stepNumValid = (step_number !== undefined) &&
        (typeof step_number === 'number') &&
        (step_number >= 1);

  if (instructionsValid && stepNumValid) {
    next();
  } else {
    res.status(400).json({
      message: 'invalid step'
    });
  }
};

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
