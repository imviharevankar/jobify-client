import { Avatar } from "antd"
import { GlobalOutlined, UserOutlined } from "@ant-design/icons";
import CustomButton from "./custom/CustomButton";
import { resources } from "../util/resources";
import { useData } from "../context/DataContext";
import { HOME } from "../routes/path";
import { removeLocalStorage } from "../helper/storage";
import { StorageKeys } from "../util/storageKeys";

interface ProfileHeaderProps {
  name: string,
  email: string,
  website: string,
  location: string,
  displayLogOut: boolean,
  displayHireMe: boolean,
};

const ProfileHeader = (props: ProfileHeaderProps) => {
  const { name, email, website, location, displayLogOut, displayHireMe } = props;

  const { navigateToSpecificRoute } = useData();

  const handleLogOut = () => {
    removeLocalStorage(StorageKeys.AUTH_USER);
    navigateToSpecificRoute(HOME);
  };

  return (
    <div className="box_shadow_sm br_16_0_16_16 p_16 flex col_center">
      <div className="flex g_16 col_center">
        <Avatar size={60} icon={<UserOutlined />} />
        <div>
          <p className="font_primary fs_16 lh_16 fw_600 charcoal capitalize">{name}</p>
          <p className="mt_4 font_primary fs_12 lh_16 fw_400 charcoal"><GlobalOutlined /> {location}</p>
          <p className="mt_4 font_primary fs_16 lh_16 fw_400 charcoal">{`${email} ${website ? ` | ${website}` : ''}`}</p>
        </div>
      </div>
      {
        displayLogOut
          ? <CustomButton
            label={resources.logOut}
            className="ml_auto  h_max_content py_12_px_28 charcoal fs_16 lh_16 font_primary"
            onClick={handleLogOut}
          />
          : <></>
      }
      {
        displayHireMe
          ? <CustomButton
            label={resources.hireMe}
            className="ml_auto bg_primary h_max_content py_12_px_28 white fs_16 lh_16 font_primary" />
          : <></>
      }

    </div>
  );
};

export default ProfileHeader;
