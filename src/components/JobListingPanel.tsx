import { FC } from "react";
import JobListingCard from "./JobListingCard";
import SortCard from "./SortCard";
import { useData } from "../context/DataContext";
import { filterData } from "../helper/filter";

interface IJobListingPanel {
  jobList: [],
}
const JobListingPanel: FC<IJobListingPanel> = (props: IJobListingPanel) => {
  const { jobList } = props;
  const { dataState } = useData();
  return (
    <div className="m_12">
      <div className="mb_12">
        <SortCard />
      </div>
      {
        filterData(jobList, dataState.filterKey)?.map((ele: any) => {
          return (
            <JobListingCard
              title={ele?.title}
              createdBy={ele?.createdBy}
              skills={ele?.skills}
              timeline={ele?.timeline}
              jobId={ele?.jobId}
            />
          )
        })
      }
    </div>
  );
};

export default JobListingPanel