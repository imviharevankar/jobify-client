import { FC } from "react";
import { Col, Row } from "antd";
import { resources } from "../util/resources";
import CustomSelect from "./custom/CustomSelect";
import CustomButton from "./custom/CustomButton";

const SearchWidget: FC = () => {
  return (
    <div className="bg_white p_16 br_8_0_8_8">
      <Row gutter={22}>
        <Col xs={24} md={10}>
          <CustomSelect
            label={resources.skills}
            required={false}
          />
        </Col>
        <Col xs={24} md={10}>
          <CustomSelect
            label={resources.location}
            className="fs_20 font_primary"
            required={false}
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
  )
}

export default SearchWidget;
