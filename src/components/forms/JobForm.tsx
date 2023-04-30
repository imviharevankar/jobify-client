import * as Yup from 'yup';
import { Col, Row } from 'antd';
import { resources } from '../../util/resources';
import CustomInput from '../custom/CustomInput';
import CustomSelect from '../custom/CustomSelect';
import { validateMultiSelect, validateRequired, validateRequiredString } from '../../helper/validation';
import { useFormik } from 'formik';
import CustomButton from '../custom/CustomButton';
import { useData } from '../../context/DataContext';
import { JobFormSchema } from '../../util/formSchema';
import { axiosPost } from '../../service/https.service';
import { JOB_LISTING_URL } from '../../api/api';
import { FormConstants, MIN_LENGTH_ONE } from '../../util/formConstants';
import { NUMBER_REGEX } from '../../util/regexKeys';

enum JobFormKeys {
  TITLE = 'title',
  CATEGORY = 'category',
  DESCRIPTION = 'description',
  LOCATION = 'location',
  SKILLS = 'skills',
  TIME_LINE = 'timeline',
  AMOUNT = 'amount',
}

export const JobForm = () => {
  const { handleFormikChange } = useData();
  const jobFormik = useFormik<JobFormSchema>({
    enableReinitialize: true,
    initialValues: {
      title: '',
      category: '',
      description: '',
      location: '',
      skills: [],
      timeline: '',
      amount: 0,
    },
    validationSchema: Yup.object({
      title: validateRequired(resources?.titleIsRequired),
      category: validateRequired(resources?.categoryIsRequired),
      description: validateRequired(resources?.descriptionIsRequired),
      location: validateRequired(resources?.locationIsRequired),
      skills: validateMultiSelect(MIN_LENGTH_ONE, resources?.skillIsRequired),
      timeline: validateRequired(resources?.timeLineIsRequired),
      amount: validateRequiredString(
        resources.amountIsRequired,
        resources.invalidAmount,
        NUMBER_REGEX,
        FormConstants.MIN_AMOUNT_LENGTH,
        FormConstants.MAX_AMOUNT_LENGTH,
        `${resources.amountLengthMsg} ${FormConstants.MIN_AMOUNT_LENGTH} - ${FormConstants.MAX_AMOUNT_LENGTH} ${resources.digits}`
      ),
    }),
    onSubmit: async (values) => {
      const {
        title,
        category,
        description,
        location,
        skills,
        timeline,
        amount,
      } = values;
      try {
        const requestBody = {
          title,
          category,
          description,
          location,
          skills,
          timeline,
          amount,
          createdBy: 'vihar205@gmail.com',
        }
        const response = await axiosPost(JOB_LISTING_URL, requestBody);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <form onSubmit={jobFormik.handleSubmit}>
        <Row gutter={22}>
          <Col md={12} sm={12} xs={12}>
            <CustomInput
              value={jobFormik.values.title}
              name={JobFormKeys.TITLE}
              label={resources?.title}
              error={jobFormik.errors.title}
              onChange={jobFormik.handleChange}
              onBlur={jobFormik.handleBlur}
              touched={jobFormik.touched.title}
              required />
          </Col>
          <Col md={12} sm={12} xs={12}>
            <CustomInput
              label={resources?.category}
              name={JobFormKeys.CATEGORY}
              value={jobFormik.values.category}
              error={jobFormik.errors.category}
              onChange={jobFormik.handleChange}
              onBlur={jobFormik.handleBlur}
              touched={jobFormik.touched.category}
              required={false}
            />
          </Col>
          <Col md={24} sm={24} xs={24}>
            <CustomInput
              label={resources?.description}
              name={JobFormKeys.DESCRIPTION}
              value={jobFormik.values.description}
              error={jobFormik.errors.description}
              onChange={jobFormik.handleChange}
              onBlur={jobFormik.handleBlur}
              touched={jobFormik.touched.description}
              required={false}
            />
          </Col>
          <Col md={12} sm={12} xs={12}>
            <CustomSelect
              label={resources?.location}
              name={JobFormKeys.LOCATION}
              value={jobFormik?.values?.location}
              onChange={(option) => handleFormikChange(jobFormik, JobFormKeys.LOCATION, option, true)}
              error={jobFormik.errors?.location}
              touched={jobFormik.touched?.location}
              required={false}
              options={[{ label: 'Bengaluru', value: 'Bengaluru' }, { label: 'Goa', value: 'Goa' }]}
            />
          </Col>
          <Col md={12} sm={12} xs={12}>
            <CustomSelect
              label={resources?.skills}
              name={JobFormKeys.SKILLS}
              value={jobFormik?.values?.skills}
              onChange={(option) => handleFormikChange(jobFormik, JobFormKeys.SKILLS, option, true)}
              error={jobFormik.errors?.skills}
              touched={jobFormik.touched?.skills}
              required={false}
              mode='multiple'
              options={[{ label: 'React', value: 'React' }, { label: 'Java', value: 'Java' }]}
            />
          </Col>
          <Col md={12} sm={12} xs={12}>
            <CustomInput
              label={resources?.timeLine}
              name={JobFormKeys.TIME_LINE}
              value={jobFormik.values.timeline}
              error={jobFormik.errors.timeline}
              onChange={jobFormik.handleChange}
              onBlur={jobFormik.handleBlur}
              touched={jobFormik.touched.timeline}
              required={false}
            />
          </Col>
          <Col md={12} sm={12} xs={12}>
            <CustomInput
              label={resources?.amount}
              name={JobFormKeys.AMOUNT}
              value={jobFormik.values.amount}
              error={jobFormik.errors.amount}
              onChange={jobFormik.handleChange}
              onBlur={jobFormik.handleBlur}
              touched={jobFormik.touched.amount}
              required={false}
            />
          </Col>
        </Row>
        <div className='flex justify_end mt_16'>
          <CustomButton
            label={resources?.save}
            className='white bg_blue row_center w_max py br_8_0_8_8 h_max fs_16 fw_600 lh_16'
          />
        </div>
      </form>
    </>
  )
}

export default JobForm