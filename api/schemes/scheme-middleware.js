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
  const id = req.params.id;
  Schemes.findById(id)
    .then(scheme => {
      if (scheme) {
      //  req.scheme = scheme; // the router doesn't work in a way that can use this
        next();
      } else {
        res.status(404).json({
          message: `scheme with scheme_id ${id} not found`
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

}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
