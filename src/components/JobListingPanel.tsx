import { FC } from "react";
import JobListingCard from "./JobListingCard";
import SortCard from "./SortCard";

interface IJobListingPanel {
  jobList: [],
}
const JobListingPanel: FC<IJobListingPanel> = (props: IJobListingPanel) => {
  const { jobList } = props;
  return (
    <div className="m_12">
      <div className="mb_12">
        <SortCard />
      </div>
      {
        jobList?.map((ele: any) => {
          return (
            <JobListingCard
              title={ele?.title}
              createdBy={ele?.createdBy}
              skills={ele?.skills}
              timeline={ele?.timeline}
            />
          )
        })
      }
    </div>
  );
};

export default JobListingPanel