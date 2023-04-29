// import { FormConstants } from 'util/formConstants';
// import { ALPHA_REGEX, EMAIL_REGEX, MOBILE_REGEX } from 'util/regexKeys';
import * as Yup from 'yup';
import { ALPHA_REGEX, EMAIL_REGEX, PASSWORD_REGEX } from '../util/regexKeys';
import { resources } from '../util/resources';
import { FormConstants } from '../util/formConstants';

export const validateRequiredString = (
  requiredMsg: string,
  invalidMsg: string,
  regex: RegExp,
  min: number,
  max: number,
  invalidLengthMsg: string
): Yup.StringSchema<string, Yup.AnyObject, undefined, ''> => {
  return Yup
    .string()
    .required(requiredMsg)
    .min(min, invalidLengthMsg)
    .max(max, invalidLengthMsg)
    .matches(regex, invalidMsg)
}

// export const validateConditionalString = (
//   requiredMsg: string,
//   key: string,
// ) => {
//   return Yup
//     .string()
//     .required(requiredMsg)
//     .oneOf([Yup.ref(key)], requiredMsg)
// }

export const validateRequired = (
  requiredMsg: string,
) => {
  return Yup
    .string()
    .required(requiredMsg)
};

export const firstNameValidation = () => {
  return validateRequiredString(
    resources.firstNameIsRequired,
    resources.invalidFirstName,
    ALPHA_REGEX,
    FormConstants.FIRST_NAME_MIN_LENGTH,
    FormConstants.FIRST_NAME_MAX_LENGTH,
    `${resources.firstNameLengthMsg} ${FormConstants.FIRST_NAME_MIN_LENGTH} - ${FormConstants.FIRST_NAME_MAX_LENGTH} ${resources.characters}`
  );
};

export const lastNameValidation = () => {
  return validateRequiredString(
    resources.lastNameIsRequired,
    resources.invalidLastName,
    ALPHA_REGEX,
    FormConstants.FIRST_NAME_MIN_LENGTH,
    FormConstants.FIRST_NAME_MAX_LENGTH,
    `${resources.lastNameLengthMsg} ${FormConstants.FIRST_NAME_MIN_LENGTH} - ${FormConstants.FIRST_NAME_MAX_LENGTH} ${resources.characters}`
  );
};

export const emailValidation = () => {
  return validateRequiredString(
    resources.emailIsRequired,
    resources.invalidEmail,
    EMAIL_REGEX,
    FormConstants.EMAIL_MIN_LENGTH,
    FormConstants.EMAIL_MAX_LENGTH,
    `${resources.emaiLengthMsg} ${FormConstants.EMAIL_MIN_LENGTH} - ${FormConstants.EMAIL_MAX_LENGTH} ${resources.characters}`
  );
};

export const passwordValidation = () => {
  return validateRequiredString(
    resources?.passwordIsRequired,
    resources?.invalidPassword,
    PASSWORD_REGEX,
    FormConstants.PASSWORD_MIN_LENGTH,
    FormConstants.PASSWORD_MAX_LENGTH,
    `${resources?.passwordLengthMsg} ${FormConstants.PASSWORD_MIN_LENGTH} - ${FormConstants.PASSWORD_MAX_LENGTH} ${resources?.characters}`
  );
}
