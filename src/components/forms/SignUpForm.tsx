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


enum SignUpFormKeys {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName',
  EMAIL = 'email',
  LOCATION = 'location',
  PASSWORD = 'password',
}

const SignUpForm = () => {
  const { handleFormikChange } = useData();
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
      password: '',
    },
    validationSchema: Yup.object({
      firstName: firstNameValidation(),
      lastName: lastNameValidation(),
      email: emailValidation(),
      location: validateRequired(resources?.locationIsRequired),
      password: passwordValidation(),
    }),
    onSubmit: async (values) => {
      const {
        firstName,
        lastName,
        email,
        location,
        password,
      } = values;
      const tokenBody = {
        firstName,
        lastName,
        email,
        location,
        password,
        isClient: ssrType === resources?.client ? true : false,
      }
      try {
        const token = encodeJwt(tokenBody);
        const response = await axiosPost(SIGN_UP_URL, { token });
        console.log(response);
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