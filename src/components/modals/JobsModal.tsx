import * as Yup from 'yup';
import { Col, Row } from 'antd';
import { resources } from '../../util/resources';
import CustomInput from '../custom/CustomInput';
import CustomSelect from '../custom/CustomSelect';
import { validateRequired } from '../../helper/validation';
import { useFormik } from 'formik';
import CustomButton from '../custom/CustomButton';
import { useData } from '../../context/DataContext';
import { JobFormSchema } from '../../util/formSchema';

enum jobFormKeys {
  TITLE = 'title',
  CATEGORY = 'category',
  DESCRIPTION = 'description',
  SKILLS = 'skills',
  TIME_LINE = 'timeLine',
}

export const JobsModal = () => {
  const { handleFormikChange } = useData();
  const jobFormik = useFormik<JobFormSchema>({
    enableReinitialize: true,
    initialValues: {
      title: '',
      category: '',
      description: '',
      skills: '',
      timeLine: '',
    },
    validationSchema: Yup.object({
      title: validateRequired(resources?.titleIsRequired),
      category: validateRequired(resources?.categoryIsRequired),
      description: validateRequired(resources?.descriptionIsRequired),
      skills: validateRequired(resources?.skillIsRequired),
      timeLine: validateRequired(resources?.timeLineIsRequired)
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <>
      <form onSubmit={jobFormik.handleSubmit}>
        <Row gutter={22}>
          <Col md={12} sm={12} xs={12}>
            <CustomInput
              value={jobFormik.values.title}
              name={jobFormKeys.TITLE}
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
              name={jobFormKeys.CATEGORY}
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
              name={jobFormKeys.DESCRIPTION}
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
              label={resources?.skills}
              name={jobFormKeys.SKILLS}
              value={jobFormik?.values?.skills}
              onChange={(option) => handleFormikChange(jobFormik, jobFormKeys.SKILLS, option, true)}
              error={jobFormik.errors?.skills}
              touched={jobFormik.touched?.skills}
              required={false}
              options={[{ label: 'React', value: 'React' }, { label: 'Java', value: 'Java' }]}
            />
          </Col>
          <Col md={12} sm={12} xs={12}>
            <CustomInput
              label={resources?.timeLine}
              name={jobFormKeys.TIME_LINE}
              value={jobFormik.values.timeLine}
              error={jobFormik.errors.timeLine}
              onChange={jobFormik.handleChange}
              onBlur={jobFormik.handleBlur}
              touched={jobFormik.touched.timeLine}
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