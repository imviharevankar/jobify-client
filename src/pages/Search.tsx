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
import { useData } from "../context/DataContext";
import { DataActionKeys } from "../context/type/dataContext";
import { sortItem } from "../helper/arrayFormater";
import { useSearchParams } from "react-router-dom";

const Search = () => {
  const { dataDispatcher, dataState } = useData();
  const [queryParameters] = useSearchParams();
  const [loader, setLoader] = useState<boolean>(true);
  const jobCategory = queryParameters.get("id");
  const filterData = (arr: any[], filterBody: any) => {
    const filterDataArr = [];
    if (!filterBody.length) {
      return arr;
    }
    for (let i = 0; i < arr.length; i += 1) {
      if (filterBody.includes(arr?.[i]?.category) && filterBody.length) {
        filterDataArr.push(arr?.[i]);
      }
    }
    return filterDataArr;
  }

  const fetchJobList = async () => {
    try {
      setLoader(true);
      const response = await axiosGet(JOB_LISTING_URL);
      if (response?.status === HttpStatus.OK) {
        console.log(sortItem(response?.data, ["timeline"], ["asc"]).filter((ele: any) => ele?.skill?.[0] === jobCategory), "pp");
        if (!jobCategory) {
          (dataDispatcher({ type: DataActionKeys.JOB_LIST, payload: sortItem(response?.data, ["timeline"], ["asc"]) }));
        } else {
          filterData(response?.data, [jobCategory])
          console.log(response?.data, jobCategory, "iii");
        }
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
            {
              dataState.jobList?.length

                ? <JobListingPanel jobList={dataState.jobList} />
                : <p className="flex col_center row_center mt_16 fs_30 fw_500 font_primary">NO Data</p>
            }
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Search;
