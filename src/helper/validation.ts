// import { FormConstants } from 'util/formConstants';
// import { ALPHA_REGEX, EMAIL_REGEX, MOBILE_REGEX } from 'util/regexKeys';
import * as Yup from 'yup';

// export const validateRequiredString = (
//   requiredMsg: string,
//   invalidMsg: string,
//   regex: RegExp,
//   min: number,
//   max: number,
//   invalidLengthMsg: string
// ): Yup.StringSchema<string, Yup.AnyObject, undefined, ''> => {
//   return Yup
//     .string()
//     .required(requiredMsg)
//     .min(min, invalidLengthMsg)
//     .max(max, invalidLengthMsg)
//     .matches(regex, invalidMsg)
// }

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

// export const firstNameValidation = () => {
//   return validateRequiredString(
//     resources.firstNameIsRequired,
//     resources.invalidFirstName,
//     ALPHA_REGEX,
//     FormConstants.FIRST_NAME_MIN_LENGTH,
//     FormConstants.FIRST_NAME_MAX_LENGTH,
//     `${resources.firstNameLengthMsg} ${FormConstants.FIRST_NAME_MIN_LENGTH} - ${FormConstants.FIRST_NAME_MAX_LENGTH} ${resources.characters}`
//   );
// };

// export const lastNameValidation = (resources: Resources) => {
//   return validateRequiredString(
//     resources.lastNameIsRequired,
//     resources.invalidLastName,
//     ALPHA_REGEX,
//     FormConstants.FIRST_NAME_MIN_LENGTH,
//     FormConstants.FIRST_NAME_MAX_LENGTH,
//     `${resources.lastNameLengthMsg} ${FormConstants.FIRST_NAME_MIN_LENGTH} - ${FormConstants.FIRST_NAME_MAX_LENGTH} ${resources.characters}`
//   );
// };

// export const emailValidation = (resources: Resources) => {
//   return validateRequiredString(
//     resources.emailIsRequired,
//     resources.invalidEmail,
//     EMAIL_REGEX,
//     FormConstants.EMAIL_MIN_LENGTH,
//     FormConstants.EMAIL_MAX_LENGTH,
//     `${resources.emaiLengthMsg} ${FormConstants.EMAIL_MIN_LENGTH} - ${FormConstants.EMAIL_MAX_LENGTH} ${resources.characters}`
//   );
// };

// export const mobileNumberValidation = (resources: Resources) => {
//   return validateRequiredString(
//     resources.mobileNumberIsRequired,
//     resources.invalidMobileNo,
//     MOBILE_REGEX,
//     FormConstants.MOBILE_MIN_LENGTH,
//     FormConstants.MOBILE_MAX_LENGTH,
//     `${resources.mobileLengthMsg} ${FormConstants.MOBILE_MIN_LENGTH} - ${FormConstants.MOBILE_MAX_LENGTH} ${resources.characters}`
//   );
// }
