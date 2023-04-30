import { Col, Drawer, Row } from "antd";
import { useState } from "react";
import Jobify from "../assets/Jobify.png";
import { resources } from "../util/resources";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <Drawer
        title={
          <div className="pointer" onClick={onClose}>
            <p>{resources.jobify}</p>
          </div>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <p>Some contents...</p>
      </Drawer>
      <Row className="bg_primary p_16">
        <Col xs={4} md={0}>
          <img
            className="h_64_px br_50_p pointer"
            src={Jobify} alt="icon"
            onClick={showDrawer}
          />
        </Col>
        <Col xs={0} md={4}>
          <img className="h_64_px br_50_p pointer" src={Jobify} alt="icon" />
        </Col>
      </Row>
    </div>
  )
}

export default Header;
