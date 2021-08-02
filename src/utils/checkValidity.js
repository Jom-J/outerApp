const checkValidity = (value, tag, rules) => {
  if (!rules) {
    return { isValid: true };
  }
  let val = value;
  if (typeof value === "string") {
    val = value.trim();

    if (rules.isRequired && val === "") {
      return { isValid: false, error: `${tag} is required` };
    }

    if (val !== "" && rules.minLength && val.length < rules.minLength) {
      return {
        isValid: false,
        error: `${tag} should be minimum ${rules.minLength} in length`,
      };
    }

    if (val !== "" && rules.maxLength && val.length > rules.maxLength) {
      return {
        isValid: false,
        error: `${tag} should be maximum ${rules.maxLength} in length`,
      };
    }

    if (rules.isEmail && val !== "") {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if (!pattern.test(val.toLowerCase())) {
        return { isValid: false, error: `${tag} should be a valid email` };
      }
    }

    if (rules.isUsername && val !== "") {
      const pattern = /^[A-Za-z]{1}[A-Za-z0-9]*$/;
      if (!pattern.test(val)) {
        return {
          isValid: false,
          error: `${tag} must start with letter and should contain alphabets, numbers only`,
        };
      }
    }

    if (rules.isPassword && val !== "") {
      const pattern = /^[A-Za-z\d#!@$%^&*]*$/;
      if (!pattern.test(val)) {
        return {
          isValid: false,
          error: `Only alphabets, numbers and special characters (!@#$%^&*) are allowed`,
        };
      }
    }
  }
  return { isValid: true };
};

export default checkValidity;
