import * as Yup from 'yup';
import { Col, Row } from 'antd';
import { ChangeEvent } from 'react';
import { resources } from '../../util/resources';
import CustomInput from '../custom/CustomInput';
import CustomSelect from '../custom/CustomSelect';
import { validateMultiSelect, validateRequired } from '../../helper/validation';
import { useFormik } from 'formik';
import CustomButton from '../custom/CustomButton';
import { axiosPost } from '../../service/https.service';
import { JOB_LISTING_URL } from '../../api/api';
import { MIN_LENGTH_ONE } from '../../util/formConstants';

enum JobFormKeys {
  TITLE = 'title',
  CATEGORY = 'category',
  DESCRIPTION = 'description',
  LOCATION = 'location',
  SKILLS = 'skills',
  TIME_LINE = 'timeline',
}

type JobFormSchema = {
  title: string,
  category: string,
  description: string,
  location: string,
  skills: string[],
  timeline: string,
}

export const JobsModal = () => {
  const jobFormik = useFormik<JobFormSchema>({
    enableReinitialize: true,
    initialValues: {
      title: '',
      category: '',
      description: '',
      location: '',
      skills: [''],
      timeline: '',
    },
    validationSchema: Yup.object({
      title: validateRequired(resources?.titleIsRequired),
      category: validateRequired(resources?.categoryIsRequired),
      description: validateRequired(resources?.descriptionIsRequired),
      location: validateRequired(resources?.locationIsRequired),
      skills: validateMultiSelect(MIN_LENGTH_ONE, resources?.skillIsRequired),
      timeline: validateRequired(resources?.timeLineIsRequired),
    }),
    onSubmit: async (values) => {
      const {
        title,
        category,
        description,
        location,
        skills,
        timeline,
      } = values;
      try {
        const requestBody = {
          title,
          category,
          description,
          location,
          skills,
          timeline,
          createdBy: 'vihar205@gmail.com',
        }
        const response = await axiosPost(JOB_LISTING_URL, requestBody);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    },
  });
  const handleFormikChange = (key: string, value: ChangeEvent<HTMLInputElement> | string) => {
    jobFormik.setFieldTouched(key, true);
    jobFormik.setFieldValue(key, value);
  }
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
          <Col md={12} sm={12} xs={12}>
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
              onChange={(option) => handleFormikChange(JobFormKeys.LOCATION, option,)}
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
              onChange={(option) => handleFormikChange(JobFormKeys.SKILLS, option)}
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
        </Row>
        <div className='flex justify_end mt_16'>
          <CustomButton
            label='save'
            className='white bg_blue row_center w_max py br_8_0_8_8 h_max fs_16 fw_600 lh_16'
          />
        </div>
      </form>
    </>
  )
}

export default JobsModal