import { FC } from "react";
import JobCategoryPannel from "../components/JobCategoryPannel";
import HeroBanner from "../components/HeroBanner";

const Home: FC = () => {
  return (
    <>
      <HeroBanner />
      <JobCategoryPannel />
    </>
  )
}

export default Home;
