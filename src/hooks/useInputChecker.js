import useValidate from "./useValidate";

function useInputChecker() {
  const { validateName, validateEmail, validatePassword } = useValidate();

  const checkName = (inputValue, setError, setForm) => {
    const { error } = validateName({
      Name: inputValue,
    });

    if (error) {
      setError(() => error.message);
      setForm(false);
      return false;
    } else {
      setError(false);
      setForm(true);
      return true;
    }
  };

  const checkEmail = (inputValue, setError, setForm) => {
    const { error } = validateEmail({
      Email: inputValue,
    });

    if (error) {
      setError(() => error.message);
      setForm(false);
      return false;
    } else {
      setError(false);
      setForm(true);
      return true;
    }
  };

  const checkPassword = (inputValue, setError, setForm) => {
    const isVaildPassowrd = validatePassword(inputValue);

    if (!isVaildPassowrd) {
      setError(
        () =>
          "password must contain special characters numbers upper and lowercase letters"
      );
      setForm(false);
      return false;
    } else {
      setError(false);
      setForm(true);
      return true;
    }
  };

  return { checkName, checkEmail, checkPassword };
}

export default useInputChecker;
