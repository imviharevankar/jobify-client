import { FC } from "react";
import JobListingCard from "./JobListingCard";
import SortCard from "./SortCard";

const JobListingPanel: FC = () => {
  return (
    <div className="m_12">
      <div className="mb_12">
        <SortCard />
      </div>
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
      <JobListingCard />
    </div>
  );
};

export default JobListingPanel