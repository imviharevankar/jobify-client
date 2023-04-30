import * as Yup from 'yup';
import { useFormik } from 'formik';
import { EyeInvisibleOutlined } from '@ant-design/icons';
import { resources } from '../../util/resources';
import { emailValidation, passwordValidation } from '../../helper/validation';
import { SignInFormSchema } from '../../util/formSchema';
import CustomInput from '../custom/CustomInput';
import CustomButton from '../custom/CustomButton';
import { axiosPost } from '../../service/https.service';
import { SIGN_IN_URL } from '../../api/api';
import { encodeJwt } from '../../helper/cipher';
import { HttpStatus } from '../../api/httpsStatus';
import { setLocalStorage } from '../../helper/storage';
import { StorageKeys } from '../../util/storageKeys';
import { HOME } from '../../routes/path';
import { useData } from '../../context/DataContext';

enum SignInFormKeys {
  EMAIL = 'email',
  PASSWORD = 'password',
}

const SignInForm = () => {

  const { navigateToSpecificRoute } = useData();

  const signInFormik = useFormik<SignInFormSchema>({
    enableReinitialize: true,
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: emailValidation(),
      password: passwordValidation(),
    }),
    onSubmit: async (values) => {
      const { email, password } = values;
      console.log(email, password);

      const token = encodeJwt({ email, password });
      try {
        const response = await axiosPost(SIGN_IN_URL, { token });
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
      <p className='fw_600 fs_24 lh_32 font_primary charcoal'>{resources.signIn}</p>
      <form onSubmit={signInFormik.handleSubmit}>
        <CustomInput
          value={signInFormik.values.email}
          name={SignInFormKeys.EMAIL}
          label={resources.email}
          error={signInFormik.errors.email}
          onChange={signInFormik.handleChange}
          onBlur={signInFormik.handleBlur}
          touched={signInFormik.touched.email}
          required
          className='w_100'
        />
        <CustomInput
          value={signInFormik.values.password}
          name={SignInFormKeys.PASSWORD}
          label={resources.password}
          error={signInFormik.errors.password}
          onChange={signInFormik.handleChange}
          onBlur={signInFormik.handleBlur}
          touched={signInFormik.touched.password}
          required
          className='w_100'
          suffixIcon={<EyeInvisibleOutlined />}
        />
        <CustomButton
          className='w_100 primary_btn_filled poppins1616600White mt_8 sign_in_otp mt_16'
          label={resources.signIn}
        />
      </form>
    </div>
  );
};

export default SignInForm;
