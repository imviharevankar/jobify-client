import { FC } from "react";
import IconCard from "./IconCard";
import { LayoutOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Row, Col } from "antd";

const JobCategoryPannel: FC = () => {
  return (
    <>
      <p className="fs_30 fw_700 lh_20 font_primary">Explore by <span className="primary">category</span></p>
      <Row gutter={11}>
        <Col xs={12} md={6}>
          <IconCard
            size="fs_40"
            icon={<LayoutOutlined />}
            label="Design"
            footer={
              <div className="flex col_center g_16">
                <p className="font_primary fs_16 fw_500 lh_20">See all....</p>
                <ArrowRightOutlined />
              </div>
            }
          />
        </Col>
        <Col xs={12} md={6}>
          <IconCard
            size="fs_40"
            icon={<LayoutOutlined />}
            label="Design"
            footer={
              <div className="flex col_center g_16">
                <p className="font_primary fs_16 fw_500 lh_20">See all....</p>
                <ArrowRightOutlined />
              </div>
            }
          />
        </Col>
        <Col xs={12} md={6}>
          <IconCard
            size="fs_40"
            icon={<LayoutOutlined />}
            label="Design"
            footer={
              <div className="flex col_center g_16">
                <p className="font_primary fs_16 fw_500 lh_20">See all....</p>
                <ArrowRightOutlined />
              </div>
            }
          />
        </Col>
        <Col xs={12} md={6}>
          <IconCard
            size="fs_40"
            icon={<LayoutOutlined />}
            label="Design"
            footer={
              <div className="flex col_center g_16">
                <p className="font_primary fs_16 fw_500 lh_20">See all....</p>
                <ArrowRightOutlined />
              </div>
            }
          />
        </Col>
      </Row>
    </>
  )
};

export default JobCategoryPannel;
