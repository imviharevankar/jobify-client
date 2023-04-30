import { Col, Row } from "antd";
import Jobify from "../assets/Jobify.png";
import { resources } from "../util/resources";

const Footer = () => {
  return (
    <Row className="white p_16 bg_primary">
      <Col xs={24} md={8} className="pointer">
        <div className="flex col_center g_16">
          <img src={Jobify} className="h_64_px br_50_p" alt="icon" />
          <div>
            <p className="fs_30 fw_700">{resources.jobify}</p>
            <p>
              Great platform for the job seeker
              that passionate about statups.
              Find your dream job
            </p>
          </div>
        </div>
      </Col>
    </Row>
  )
}

export default Footer;
