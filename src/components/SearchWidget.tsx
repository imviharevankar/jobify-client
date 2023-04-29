import { Col, Row } from "antd";
import { resources } from "../util/resources";
import CustomSelect from "./custom/CustomSelect";
import CustomSwitch from "./custom/CustomSwitch";
import CustomButton from "./custom/CustomButton";

const SearchWidget = () => {
  return (
    <>
      <Row gutter={22}>
        <Col md={8}>
          <CustomSelect
            label={resources.skills}
          />
        </Col>
        <Col md={8}>
          <CustomSelect
            label={resources.location}
          />
        </Col>
        <Col md={2}>
          <CustomSwitch label="availfrkneff" name='availiability' />
        </Col>
      </Row>
      <CustomButton
        label="search"
      />
    </>
  )
}

export default SearchWidget;
