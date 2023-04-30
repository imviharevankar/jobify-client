import { FC, ChangeEvent } from "react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Col, Row } from "antd";
import { resources } from "../util/resources";
import CustomSelect from "./custom/CustomSelect";
import CustomButton from "./custom/CustomButton";
import { axiosPost } from "../service/https.service";
import { CLIENT_SEARCH, FREELANCER_SEARCH } from "../api/api";
import { validateMultiSelect } from "../helper/validation";

enum SearchWidgetKeys {
  SKILLS = "skills",
  LOCATION = "location",
}

const SearchWidget: FC = () => {
  const isClient = false;

  const searchWidgetFormik = useFormik({
    enableReinitialize: true,
    initialValues: {
      skills: [""],
      location: '',
    },
    validationSchema: Yup.object({
      skills: validateMultiSelect(1, resources.skillsIsRequired)
    }),
    onSubmit: async (values) => {
      const { skills, location } = values;
      const requestBody = {
        ...(skills.length) && { skills },
        ...(location) && { location },
      }
      try {
        const response = await axiosPost(isClient ? CLIENT_SEARCH : FREELANCER_SEARCH, requestBody);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  });

  // const fetchDetails = async (api: string) => {
  //   const { }
  //   const response = await axiosPost(api, searchWidgetFormik.values);
  //   console.log(response, 'pp');
  // }

  const handleFormikChange = (key: string, value: ChangeEvent<HTMLInputElement> | string) => {
    searchWidgetFormik.setFieldTouched(key, true);
    searchWidgetFormik.setFieldValue(key, value);
  }

  return (
    <form onSubmit={searchWidgetFormik.handleSubmit}>
      <div className="bg_white p_16 br_8_0_8_8">
        <Row gutter={22}>
          <Col xs={24} md={10}>
            <CustomSelect
              label={resources.skills}
              value={searchWidgetFormik.values.skills}
              required={false}
              mode="multiple"
              touched={searchWidgetFormik.touched.skills}
              name={SearchWidgetKeys.SKILLS}
              onChange={(option) => handleFormikChange(SearchWidgetKeys.SKILLS, option,)}
              options={[{ label: "React", value: "React" }, { label: "react", value: "react" }]}
              error={searchWidgetFormik.errors.skills}
            />
          </Col>
          <Col xs={24} md={10}>
            <CustomSelect
              label={resources.location}
              value={searchWidgetFormik.values.location}
              name={SearchWidgetKeys.LOCATION}
              className="fs_20 font_primary"
              required={false}
              options={[{ label: "india", value: "india" }]}
              onChange={(option) => handleFormikChange(SearchWidgetKeys.LOCATION, option,)}
            />
          </Col>
          <Col xs={24} md={4} className="flex align_end">
            <CustomButton
              label="search"
              className="bg_primary w_100 font_primary white"
            />
          </Col>
        </Row>
      </div>
    </form>
  )
}

export default SearchWidget;
