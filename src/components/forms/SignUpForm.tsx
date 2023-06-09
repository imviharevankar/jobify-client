import * as Yup from 'yup';
import { useFormik } from "formik";
import { useData } from '../../context/DataContext';
import { useState } from 'react';
import { resources } from '../../util/resources';
import { emailValidation, firstNameValidation, lastNameValidation, passwordValidation, validateRequired } from '../../helper/validation';
import { encodeJwt } from '../../helper/cipher';
import { axiosPost } from '../../service/https.service';
import { SIGN_UP_URL } from '../../api/api';
import CustomRadioGroup from '../custom/CustomRadioGroup';
import { CHARCOAL, DARK_GREY } from '../../util/cssConstants';
import CustomInput from '../custom/CustomInput';
import CustomSelect from '../custom/CustomSelect';
import CustomButton from '../custom/CustomButton';
import { SignUpSchema } from '../../util/formSchema';
import { MIN_LENGTH_ONE } from '../../util/formConstants';
import { validateMultiSelect } from '../../helper/validation';
import { HttpStatus } from '../../api/httpsStatus';
import { HOME } from '../../routes/path';
import { setLocalStorage } from '../../helper/storage';
import { StorageKeys } from '../../util/storageKeys';


enum SignUpFormKeys {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  LOCATION = 'location',
  SKILLS = 'skills',
  PASSWORD = 'password',
}

const SignUpForm = () => {
  const { handleFormikChange, navigateToSpecificRoute } = useData();
  const [ssrType, setSsrType] = useState<string>(resources?.client);

  const ssrTypeList = [
    {
      value: resources?.client,
      label: resources?.client,
    },
    {
      value: resources.freelancer,
      label: resources.freelancer,
    },
  ];

  const signUpFormik = useFormik<SignUpSchema>({
    enableReinitialize: true,
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      location: '',
      skills: [],
      password: '',
    },
    validationSchema: Yup.object({
      firstName: firstNameValidation(),
      lastName: lastNameValidation(),
      email: emailValidation(),
      location: validateRequired(resources?.locationIsRequired),
      skills: validateMultiSelect(MIN_LENGTH_ONE, resources?.skillIsRequired),
      password: passwordValidation(),
    }),
    onSubmit: async (values) => {
      const {
        firstName,
        lastName,
        email,
        location,
        skills,
        password,
      } = values;
      const tokenBody = {
        firstName,
        lastName,
        email,
        location,
        skills,
        password,
        isClient: ssrType === resources?.client ? true : false,
      }
      try {
        const token = encodeJwt(tokenBody);
        const response = await axiosPost(SIGN_UP_URL, { token });
        if (response.status === HttpStatus.OK) {
          navigateToSpecificRoute(HOME);
          setLocalStorage(StorageKeys.AUTH_USER, response?.data?.token);
        }
      } catch (error) {
        console.log(error);
      }

    }
  });

  return (
    <div className='p_24'>
      <p className='fw_600 fs_24 lh_32 font_primary charcoal mb_12'>{resources?.signUp}</p>
      <form onSubmit={signUpFormik.handleSubmit}>
        <CustomRadioGroup
          onChange={(label) => setSsrType(label?.target?.value)}
          value={ssrType}
          items={ssrTypeList}
          radioClassName='poppins1624600Charcoal'
          defaultColor={DARK_GREY}
          activeColor={CHARCOAL}
          spaceClassName='gap_0 wrap'
        />
        <CustomInput
          value={signUpFormik.values.firstName}
          name={SignUpFormKeys.FIRST_NAME}
          label={resources?.firstName}
          error={signUpFormik.errors.firstName}
          onChange={signUpFormik.handleChange}
          onBlur={signUpFormik.handleBlur}
          touched={signUpFormik.touched.firstName}
          required
        />
        <CustomInput
          value={signUpFormik.values.lastName}
          name={SignUpFormKeys.LAST_NAME}
          label={resources?.lastName}
          error={signUpFormik.errors.lastName}
          onChange={signUpFormik.handleChange}
          onBlur={signUpFormik.handleBlur}
          touched={signUpFormik.touched.lastName}
          required
        />
        <CustomInput
          value={signUpFormik.values.email}
          name={SignUpFormKeys.EMAIL}
          label={resources?.email}
          error={signUpFormik.errors.email}
          onChange={signUpFormik.handleChange}
          onBlur={signUpFormik.handleBlur}
          touched={signUpFormik.touched.email}
          required
        />
        <CustomSelect
          name={SignUpFormKeys.LOCATION}
          label={resources?.location}
          required={false}
          value={signUpFormik.values.location}
          onChange={(event) => handleFormikChange(signUpFormik, SignUpFormKeys.LOCATION, event, true)}
          options={[{ label: 'Bengaluru', value: 'Bengaluru' }, { label: 'Goa', value: 'Gia' }]}
          touched={signUpFormik.touched.location}
          error={signUpFormik.errors.location}
        />
        {
          !(ssrType === resources?.client)
            ? <CustomSelect
              label={resources?.skills}
              name={SignUpFormKeys.SKILLS}
              value={signUpFormik.values?.skills}
              onChange={(option) => handleFormikChange(signUpFormik, SignUpFormKeys.SKILLS, option, true)}
              error={signUpFormik.errors?.skills}
              touched={signUpFormik.touched?.skills}
              required={false}
              mode='multiple'
              options={[{ label: 'React', value: 'React' }, { label: 'Java', value: 'Java' }]}
            />
            : ''
        }
        <CustomInput
          value={signUpFormik.values.password}
          name={SignUpFormKeys.PASSWORD}
          label={resources?.password}
          error={signUpFormik.errors.password}
          onChange={signUpFormik.handleChange}
          onBlur={signUpFormik.handleBlur}
          touched={signUpFormik.touched.password}
          required
        />
        <CustomButton
          label={resources?.submit}
          className='w_100 font_primary fs_16 lh_16 fw_600 white bg_blue text_center mt_16'
        />
      </form>
    </div>
  )
}

export default SignUpForm