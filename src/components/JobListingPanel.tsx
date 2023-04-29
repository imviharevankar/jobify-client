import JobListingCard from "./JobListingCard";
import CustomSelect from "./custom/CustomSelect";

const JobListingPanel = () => {
  return (
    <div>
      <div className="flex space_between">
        <p>40 jobs found</p>
        <CustomSelect />
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