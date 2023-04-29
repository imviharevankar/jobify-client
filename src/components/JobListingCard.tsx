import { FC } from "react";
import CustomButton from "./custom/CustomButton";

const JobListingCard: FC = () => {
  return (
    <div className="bg_white mb_12 p_16 br_16_0_16_16">
      <div className="flex justify_between col_center align_center">
        <div className="flex g_16 align_center">
          <div>
            <img className="w_40_px h_40_px" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="icon" />
          </div>
          <div className="font_primary">
            <p className="fs_20">Job title</p>
            <p className="fs_12">client name</p>
          </div>
        </div>
        <div>
          <CustomButton
            label="Apply"
            className="bg_primary font_primary white br_0"
          />
        </div>
      </div>
      <div className="flex justify_between col_center">
        <div className="flex mt_12 g_16 col_center align_center">
          <p className="px_1_py_12 bg_gray br_8 fs_12">skills</p>
          <p className="px_1_py_12 bg_gray br_8 fs_12">skills</p>
        </div>
        <p className="fs_12 font_primary">$400/hour</p>
      </div>
    </div>
  )
}

export default JobListingCard;
