import { FC, useState } from "react";
import JobCategoryPannel from "../components/JobCategoryPannel";
import CustomModal from "../components/custom/CustomModal/CustomModal";
import JobsModal from "../components/modals/JobsModal";
import CustomButton from "../components/custom/CustomButton";
import { resources } from "../util/resources";

const Home: FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  }
  const handleOpenOpup = () => {
    setOpen(!open);
  }
  return (
    <>
      <CustomModal
        title={resources?.addJob}
        open={open}
        modalBody={
          <JobsModal />
        }
        width={500}
        okCancel={handleClose}
      />
      <div className='flex justify_end mt_16'>
        <CustomButton
          label={resources?.postJob}
          className='white bg_blue row_center w_max py br_8_0_8_8 h_max fs_16 fw_600 lh_16'
          onClick={handleOpenOpup}
        />
      </div>
      <JobCategoryPannel />
    </>
  )
}

export default Home;
