import { resources } from "../util/resources";
import { Col, Row } from "antd";
import SkillsListing from "./SkillsListing";
import DetailsContainer from "./DetailsContainer";

interface IJobDetailPanel {
  jobDetails: any,
}
const JobDetailsPanel = (props: IJobDetailPanel) => {
  const { jobDetails } = props;
  return (
    <div className="bg_white p_16 br_8_0_8_8">
      <p className="fs_30 fw_500 mb_12 font_primary">{resources?.jobDetails}</p>
      <p className="fs_20 fw_400 font_primary">{jobDetails?.title}</p>
      <Row className="mb_20 col_center">
        <Col xs={12} md={14}>
          <SkillsListing skills={jobDetails?.skills} />
        </Col>
      </Row>
      <Row className="mb_12">
        <Col xs={12} md={6} className="mt_12">
          <DetailsContainer
            label={resources.time}
            value={jobDetails?.timeline}
            valueClassName="fs_16 fw_700 green font_primary"
          />
        </Col>
        <Col xs={12} md={2} className="mt_12">
          <DetailsContainer
            label={resources.catagory}
            value={jobDetails?.category}
          />
        </Col>
      </Row>
    </div>
  )
}

export default JobDetailsPanel