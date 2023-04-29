import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { axiosGet } from "../service/https.service";
import Loader from "../components/Loader";
import { JOB_LISTING_URL } from "../api/api";
import { HttpStatus } from "../api/httpsStatus";
import { Col, Row } from "antd";
import JobDetailProfileCard from "../components/JobDetailProfileCard";
import JobDetailsPanel from "../components/JobDetailsPanel";
import { resources } from "../util/resources";

const JobDetails = () => {
  const [queryParameters] = useSearchParams();
  const [loader, setLoader] = useState<boolean>(true);
  const [jobDetails, setJobDetails] = useState<any>({});
  let jobId = queryParameters.get("id");
  const fetchJobDescription = async () => {
    try {
      const response = await axiosGet(`${JOB_LISTING_URL}/${jobId}`);
      console.log(response);
      if (response?.status === HttpStatus.OK) {
        setJobDetails(response?.data);
        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
    }
  }

  useEffect(() => {
    fetchJobDescription();
  }, [])

  if (loader) {
    return (
      <Loader />
    )
  }
  return (
    <div className="bg_gray">
      <Row className="pt_12" gutter={22}>
        <Col xs={24} sm={24} md={10} className="mt_12">
          <JobDetailsPanel jobDetails={jobDetails} />
        </Col>
        <Col xs={24} sm={24} md={14} className="bg_white mt_12 p_16 br_8_0_8_8">
          <p className="fs_20 fw_500 mb_20">{resources.description}</p>
          <p className="fs_16 fw_400 font_primary">{jobDetails?.description}</p>
        </Col>
      </Row>
      <JobDetailProfileCard jobDetails={jobDetails} />
    </div>
  )
}

export default JobDetails;