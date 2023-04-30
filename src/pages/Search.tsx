import { Col, Row } from "antd";
import { useState } from "react";
import SearchWidget from "../components/SearchWidget"
import JobListingPanel from "../components/JobListingPanel";
import FilterPanel from "../components/FilterPanel";
import { axiosGet } from "../service/https.service";
import { JOB_LISTING_URL } from "../api/api";
import { useEffect } from "react";
import { HttpStatus } from "../api/httpsStatus";
import Loader from "../components/Loader";

const Search = () => {
  const [jobList, setJobList] = useState<[]>([]);
  const [loader, setLoader] = useState<boolean>(true)
  const fetchJobList = async () => {
    try {
      setLoader(true);
      const response = await axiosGet(JOB_LISTING_URL);
      if (response?.status === HttpStatus.OK) {
        setJobList(response?.data);
        setLoader(false);
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
    }
  }

  useEffect(() => {
    fetchJobList();
  }, []);

  if (loader) {
    return (
      <Loader />
    )
  };
  
  return (
    <div className="bg_gray">
      <div className="m_auto">
        <SearchWidget />
        <Row className="pt_12" gutter={22}>
          <Col xs={0} sm={0} md={8}>
            <FilterPanel />
          </Col>
          <Col xs={24} sm={24} md={16}>
            <JobListingPanel jobList={jobList} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Search;
