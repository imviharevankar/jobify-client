import { displayDate } from "../helper/dateFormater";
import { MailOutlined } from "@ant-design/icons";
import { resources } from "../util/resources";
import DetailsContainer from "./DetailsContainer";
import CustomButton from "./custom/CustomButton";

interface IJobDetaiProfileCard {
  jobDetails: any,
}

const JobDetailProfileCard = (props: IJobDetaiProfileCard) => {
  const { jobDetails } = props;
  return (
    <div className="bg_white flex justify_between wrap col_center mt_12 p_16 br_8_0_8_8">
      <div className="flex g_16 mb_20 col_center">
        <img className="w_64_px h_64_px mb_12" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="icon" />
        <DetailsContainer
          label={jobDetails?.title}
          value={jobDetails?.createdBy}
          labelClassName="fs_30 font_primary"
          valueClassName="fs_16 lh_20 font_primary"
        />
      </div>
      <CustomButton
        className="white bg_primary"
        icon={<MailOutlined />}
        label={resources.talkToClient}
      />
      <div className="flex g_16">
        <DetailsContainer
          label={resources.createdAt}
          value={displayDate(jobDetails?.createdAt)}
          labelClassName="fs_16 fw_400 font_primary mb_12"
          valueClassName="b_1_solid_red br_16_0_16_16 p_8 fs_16 fw_700 font_primary error"
        />
        <DetailsContainer
          label={resources.updatedAt}
          value={displayDate(jobDetails?.createdAt)}
          labelClassName="fs_16 fw_400 font_primary mb_12"
          valueClassName="b_1_solid_green br_16_0_16_16 p_8 fs_16 fw_700 font_primary green"
        />
      </div>
    </div>
  )
}

export default JobDetailProfileCard