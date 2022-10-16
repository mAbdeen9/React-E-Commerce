import Joi from "joi";

function useValidate() {
  //
  const validateName = (name) => {
    const rules = Joi.object({
      Name: Joi.string().required().min(2).max(20),
    });
    return rules.validate(name);
  };

  const validateEmail = (email) => {
    const rules = Joi.object({
      Email: Joi.string().email({ tlds: { allow: false } }),
    });
    return rules.validate(email);
  };

  const validatePassword = (password) => {
    const pattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (pattern.test(password)) {
      return true;
    } else {
      return false;
    }
  };

  return { validateName, validateEmail, validatePassword };
}

export default useValidate;
